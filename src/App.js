import React, { Component, Fragment } from 'react';
import { render } from 'react-dom';

import Header from './Header';
import Post from './components/Post';

import './style.scss';

class App extends Component {
  state = {
    posts: [
      {
        id: 0,
        header: {
          avatar: 'https://avatars1.githubusercontent.com/u/20993303?s=460&v=4',
          title: 'Jesus Christ',
          createdAt: '7',
        },
        content: 'Jesus loves you!',
      },

      {
        id: 1,
        header: {
          avatar: 'https://avatars1.githubusercontent.com/u/20993303?s=460&v=4',
          title: 'God',
          createdAt: '7',
        },
        content: 'God loves you!',
      },
    ],
  };

  render() {
    return (
      <Fragment>
        <Header />
        { this.state.posts.map(post => <Post key={post.id} data={post} />) }
      </Fragment>
    );
  }
}

render(<App />, document.getElementById('app'));
