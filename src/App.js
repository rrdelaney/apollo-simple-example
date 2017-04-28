import React from 'react'
import { gql, graphql } from 'react-apollo'

const AllCharacters = gql`
  query AllCharacters {
    allPersons {
      id
      name
    }
  }
`

function App ({ data }) {
  if (data.loading) return <p>Loading...</p>

  return (
    <div>
      <h2>Characters</h2>
      <ul>
        {data.allPersons.map(c =>
          <li key={c.id}>{c.name}</li>
        )}
      </ul>
    </div>
  )
}

export default graphql(AllCharacters)(App)
