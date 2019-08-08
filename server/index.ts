import { GraphQLServer } from 'graphql-yoga'
import fs from 'fs'
import path from 'path'
import resolvers from './resolvers'

const typesPath = path.resolve(__dirname + '/../types.graphql')
const typeDefs = fs.readFileSync(typesPath, 'utf8')

const server = new GraphQLServer({ typeDefs, resolvers: resolvers as any })
server.start({ endpoint: '/graphql' }, ({ port }) => {
  console.log(`http://localhost:${port}`)
})
