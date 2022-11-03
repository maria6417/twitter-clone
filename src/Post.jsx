import React from 'react'
import PropTypes from 'prop-types'
import './Post.css';
import Avatar from '@mui/material/Avatar';
import VerifiedIcon from '@mui/icons-material/Verified';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import RepeatIcon from '@mui/icons-material/Repeat';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import PublishIcon from '@mui/icons-material/Publish';

function Post({
  displayName,
  username,
  verified,
  text,
  image,
  avatar,
}) {
  return (
    <div className="post">
      <div className="post__avatar">
        <Avatar src="https://res.cloudinary.com/dl9zxpaoq/image/upload/v1661311474/Screen_Shot_2022-08-23_at_23.24.23_evggjc.png" />
      </div>
      <div className="post__body">
        <div className="post__header">
          <div className="post__headerText">
            <h3>
              Maria Hirai{" "}
              <span>
                <VerifiedIcon className="post__verified"/>
              </span>
              <span className="post__username">
                {" @mariah"}
              </span>
            </h3>
          </div>
          <div className="post__text">
            <p>Hi I am building a twitter clone!!!</p>
          </div>
        </div>
        <img src="https://res.cloudinary.com/dl9zxpaoq/image/upload/v1661193898/qcgavbjivgyl7w3atmjh.png" />
        <div className="post__footer">
          <ChatBubbleOutlineOutlinedIcon fontSize="small" />
          <RepeatIcon fontSize="small" />
          <FavoriteBorderIcon fontSize="small" />
          <PublishIcon fontSize="small" />
        </div>
      </div>
    </div>
  )
}

Post.propTypes = {}

export default Post
