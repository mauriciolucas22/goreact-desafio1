import React, { Component, Fragment } from 'react';
import { render } from 'react-dom';

import Header from './Header';
import Post from './components/Post';

import './style.scss';

class App extends Component {
  state = {
    posts: [
      {
        title: 'Jesus Christ',
        createdAt: '7',
        content: 'Jesus loves you!',
      },

      {
        title: 'God',
        createdAt: '7',
        content: 'God loves you!',
      },
    ],
  };

  render() {
    return (
      <Fragment>
        <Header />
        <Post />
      </Fragment>
    );
  }
}

render(<App />, document.getElementById('app'));
