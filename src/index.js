import React from 'react'
import ReactDOM from 'react-dom'
import { ApolloProvider } from 'react-apollo'
import configureClient from './configureClient'
import App from './App'
import './index.css'

const client = configureClient()
const root = document.getElementById('root')

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  root
)

if (module.hot) {
  module.hot.accept('./App', () => {
    const NextApp = require('./App').default

    ReactDOM.render(
      <ApolloProvider client={client}>
        <NextApp />
      </ApolloProvider>,
      root
    )
  })
}
