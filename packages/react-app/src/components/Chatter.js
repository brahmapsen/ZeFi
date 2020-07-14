import React from 'react';
import { Comment, Avatar } from 'antd';

const Chatter = ({ children }) => (
  <Comment
    actions={[<span key="comment-nested-reply-to">Reply to</span>]}
    author={<a>Han Solo</a>}
    avatar={
      <Avatar
        src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
        alt="Han Solo"
      />
    }
    content={
      <p>
        We protect user data with good design
        resources (<i>decentralize finance</i>).
      </p>
    }
  >
    {children}
  </Comment>
);

export default Chatter