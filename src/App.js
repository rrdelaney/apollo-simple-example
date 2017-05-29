import React, { Component } from 'react'
import Users from './Users'
import Posts from './Posts'

export default class App extends Component {
  state = {
    tab: 'Users'
  }

  setTab = tab => () => {
    this.setState({ tab })
  }

  render () {
    return (
      <div>
        <div className='container' style={{ padding: '1rem' }}>
          <ul className='nav nav-tabs'>
            <li className='nav-item'>
              <a
                className={`nav-link ${this.state.tab === 'Users' ? 'active' : ''}`}
                onClick={this.setTab('Users')}>
                Users
              </a>
            </li>
            <li className='nav-item'>
              <a
                className={`nav-link ${this.state.tab === 'Posts' ? 'active' : ''}`}
                onClick={this.setTab('Posts')}>
                Posts
              </a>
            </li>
          </ul>
        </div>

        {this.state.tab === 'Users' && <Users />}
        {this.state.tab === 'Posts' && <Posts />}
      </div>
    )
  }
}
