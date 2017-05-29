import React from 'react'
import { gql, graphql, compose } from 'react-apollo'

const AllUsersQuery = gql`
  query AllUsers {
    allUsers {
      id
      name
      posts {
        id
        title
      }
    }
  }
`

const AllUsers = graphql(AllUsersQuery)

const AddPost = graphql(gql`
  mutation AddPost ($author: ID!, $title: String!, $content: String!) {
    addPost(author: $author, title: $title, content: $content) {
      id
      title
    }
  }
`)

class App extends React.Component {
  state = {
    author: '',
    title: '',
    content: ''
  }

  create = () => {
    this.props.mutate({
      variables: this.state,
      refetchQueries: [
        { query: AllUsersQuery }
      ]
    })
  }

  update = field => e => {
    this.setState({
      [field]: e.target.value
    })
  }

  render () {
    const { data } = this.props

    if (data.loading) return <p>Loading...</p>

    return (
      <div className='container'>
        <h2>Users</h2>
        <ul className='list-group'>
          {data.allUsers.map(c =>
            <li key={c.id} className='list-group-item'>
              ({c.id}) {c.name}
              <ul>
                {c.posts.map(p =>
                  <li key={p.id}>{p.title}</li>
                )}
              </ul>
            </li>
          )}
        </ul>

        <br />

        <div>
          <h2>Create Post</h2>
          <div className='form-group'>
            <label>Author</label>
            <input className='form-control' onChange={this.update('author')} value={this.state.author} />
          </div>
          <div className='form-group'>
            <label>Title</label>
            <input className='form-control' onChange={this.update('title')} value={this.state.title} />
          </div>
          <div className='form-group'>
            <label>Content</label>
            <input className='form-control' onChange={this.update('content')} value={this.state.content} />
          </div>
          <button className='btn btn-primary' onClick={this.create}>Create</button>
        </div>
      </div>
    )
  }
}

export default compose(
  AddPost,
  AllUsers
)(App)
