import { ApolloClient, createNetworkInterface } from 'react-apollo'

export default function configureClient () {
  return new ApolloClient({
    dataIdFromObject: o => o.id,
    networkInterface: createNetworkInterface({
      uri: 'https://7vkj4v8vj.lp.gql.zone/graphql'
    }),
  })
}
