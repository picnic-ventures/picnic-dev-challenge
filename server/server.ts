import express from 'express'
import fs from 'fs'
import { GraphQLServer, Options } from 'graphql-yoga'
import path from 'path'
import resolvers from './resolvers'
import stores from './stores'

const typesPath = path.resolve(__dirname + '/../types.graphql')
const typeDefs = fs.readFileSync(typesPath, 'utf8')

export type Context = {
  userId: string
  stores: typeof stores
}

const server = new GraphQLServer({
  typeDefs,
  resolvers: resolvers as any,
  context({ request }): Context {
    const userId = getUserId(request)
    return { userId, stores }
  },
})

server.express.use('/images', express.static('images'))

export default function startServer(port: number) {
  return new Promise<Options>((resolve) => {
    server.start({ port, endpoint: '/graphql' }, (options) => {
      resolve(options)
    })
  })
}

// Warning! This performs absolutely no authentication or checks the passed
// "token" in any way. You would obviously never do this in a real app, but
// this allows us to simulate sessions in the simplest possible way.
// This function returns a random user id if there is no valid authorization
// header in the request. Normally, you would want to fail the request with a
// 401 Unauthorized HTTP response.
function getUserId(request: express.Request) {
  const authorization = request.headers.authorization
  if (authorization == null) {
    console.error(
      'Warning! No authorization header found. Generating a random user id.'
    )
    return anonymousUserId()
  }
  const matches = /^Bearer (\w+)$/.exec(authorization)
  if (matches == null) {
    console.error(
      'Warning! Invalid authorization header found. It needs to be in the format "Bearer <token>". Generating a random user id.'
    )
    return anonymousUserId()
  }
  const [_, token] = matches
  return token
}

function anonymousUserId() {
  return `anonymous_${String(Math.random()).slice(2, 8)}`
}
