import React from 'react';
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

Post.propTypes = {
  data: PropTypes.shape({
    header: PropTypes.object,
    content: PropTypes.string,
  }).isRequired,
};

export default Post;
