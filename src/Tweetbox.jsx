import React from 'react'
import PropTypes from 'prop-types'
import './Tweetbox.css';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';

function Tweetbox(props) {
  return (
    <div className="tweetbox">
      <form>
        <div className="tweetbox__input">
          <Avatar src="https://res.cloudinary.com/dl9zxpaoq/image/upload/v1661311325/Screen_Shot_2022-08-23_at_23.21.52_rhjqss.png"></Avatar>
          <input placeholder="What's happening?" type="text" />
        </div>
        <input
          className="tweetbox__inputImage"
          placeholder="Optional: Enter image URL"
          type="text"
        />
        <Button className="tweetbox__tweetButton">Tweet</Button>
      </form>
    </div>
  )
}

Tweetbox.propTypes = {}

export default Tweetbox
