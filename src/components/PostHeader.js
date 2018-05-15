import React from 'react';

const PostHeader = props => (
  <div className="postHeaderContainer">
    <img className="avatar" src={props.data.avatar} />
    <div className="contentHeader">
      <h1 className="postTitle">{props.data.title}</h1>
      <h1 className="postCreatedAt">há {props.data.createdAt} min</h1>
    </div>
  </div>
);

export default PostHeader;
