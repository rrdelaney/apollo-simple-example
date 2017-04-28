import { ApolloClient, createNetworkInterface } from 'react-apollo'

export default function configureClient () {
  return new ApolloClient({
    networkInterface: createNetworkInterface({
      uri: 'https://api.graphcms.com/simple/v1/swapi'
    }),
  })
}
