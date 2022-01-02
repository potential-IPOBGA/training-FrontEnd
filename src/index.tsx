import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import { App } from "./components/App"
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client"
import { typeDefs } from "./graphql/TypeDef"

const client: ApolloClient<unknown> = new ApolloClient({
  uri: 'http://localhost:4000/graphql',
  cache: new InMemoryCache(),
  typeDefs,
})

ReactDOM.render(
  <ApolloProvider client={client}>
    <App/>
  </ApolloProvider>,
  document.getElementById('root')
)

