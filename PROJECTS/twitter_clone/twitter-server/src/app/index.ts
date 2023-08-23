import express from 'express'
import { ApolloServer } from '@apollo/server'
import { expressMiddleware } from '@apollo/server/express4'
import bodyParser from 'body-parser'
import { graphql } from 'graphql'

export async function initServer() {
  const app = express()
  app.use(bodyParser.json())
  //grphql server
  const typeDefs = `
    type Query {
      hello: String
      sayHelloToMe(name:String!) :String
    }
  `

  const resolvers = {
    Query: {
      hello: () => 'Hello, world!',
      sayHelloToMe: (parent: any, { name }: { name: string }) => `hey ${name}`,
    },
  }

  const graphqlServer = new ApolloServer({
    typeDefs,
    resolvers,
  })

  await graphqlServer.start()
  app.use('/graphql', expressMiddleware(graphqlServer))

  return app
}
