import React, { Component } from 'react';
import PropTypes from 'prop-types';

import PostHeader from './PostHeader';

import './style.scss';

const Post = props => (
  <div className="postContainer">
    <PostHeader data={props.data.header} />
    <hr />
    <h3>{props.data.content}</h3>
  </div>
);

export default Post;
