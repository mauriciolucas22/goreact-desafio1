import React from 'react';
import PropTypes from 'prop-types';

const PostHeader = props => (
  <div className="postHeaderContainer">
    <img className="avatar" src={props.data.avatar} alt="avatar" />
    <div className="contentHeader">
      <h1 className="postTitle">{props.data.title}</h1>
      <h1 className="postCreatedAt">há {props.data.createdAt} min</h1>
    </div>
  </div>
);

PostHeader.propTypes = {
  data: PropTypes.shape({
    avatar: PropTypes.string,
    title: PropTypes.string,
    createdAt: PropTypes.string,
  }).isRequired,
};

export default PostHeader;
