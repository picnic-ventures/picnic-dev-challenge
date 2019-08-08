import express from 'express'
import session from 'express-session'
import fs from 'fs'
import { GraphQLServer } from 'graphql-yoga'
import path from 'path'
import resolvers from './resolvers'
import stores from './stores'

const typesPath = path.resolve(__dirname + '/../types.graphql')
const typeDefs = fs.readFileSync(typesPath, 'utf8')

export type Context = {
  session: string
  stores: typeof stores
}

const server = new GraphQLServer({
  typeDefs,
  resolvers: resolvers as any,
  context({ request }): Context {
    return { session: request.sessionID!, stores }
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

server.start({ endpoint: '/graphql' }, ({ port }) => {
  console.log(`http://localhost:${port}`)
})
