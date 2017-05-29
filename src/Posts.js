import React, { Component } from 'react'
import { gql, graphql } from 'react-apollo'

const allPosts = graphql(gql`
  query AllPosts {
    allPosts {
      id
      title
      content
      author {
        name
      }
    }
  }
`)

class Posts extends Component {
  render () {
    const { data } = this.props

    if (data.loading) return (
      <div className='container'>
        <p>Loading...</p>
      </div>
    )

    return (
      <div className='container'>
        <h2>Posts</h2>
        <div>
          {data.allPosts.map(p =>
            <div key={p.id} className='card' style={{ marginBottom: '1rem' }}>
              <div className='card-block'>
                <h4 className='card-title'>{p.title}</h4>
                <h6 className='card-subtitle mb-2 text-muted'>{p.author.name}</h6>
                <p className='card-text'>{p.content}</p>
              </div>
            </div>
          )}
        </div>
      </div>
    )
  }
}

export default allPosts(Posts)
