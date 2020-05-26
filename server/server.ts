import express from 'express'
import session from 'express-session'
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
    return { userId: request.sessionID!, stores }
  },
})

server.express.use(
  session({
    resave: false,
    saveUninitialized: true,
    // Always generate a secure secret using crypto.randomBytes() in a real app!
    secret: 'not-very-secure-secret',
  })
)

server.express.use('/images', express.static('images'))

export default function startServer(port: number) {
  return new Promise<Options>((resolve) => {
    server.start({ port, endpoint: '/graphql' }, (options) => {
      resolve(options)
    })
  })
}
