import React, { useState } from 'react'
import PropTypes from 'prop-types'
import './Tweetbox.css';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import db from './firebase';
import { addDoc, collection } from "firebase/firestore";

function Tweetbox(props) {
  const [text, setText] = useState('');
  const [url, setUrl] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    addDoc(collection(db, 'posts'), {
      avatar: 'https://res.cloudinary.com/dl9zxpaoq/image/upload/v1661193501/egbrodx7i8ulurcjnwnu.jpg',
      displayName: 'Cooper Hirai',
      image: url,
      text,
      username: 'c00perLuvsYou',
      verfied: true,
    })
    console.log('here')

    setText('');
    setUrl('');
  };

  return (
    <div className="tweetbox">
      <form>
        <div className="tweetbox__input">
          <Avatar src="https://res.cloudinary.com/dl9zxpaoq/image/upload/v1661311325/Screen_Shot_2022-08-23_at_23.21.52_rhjqss.png"></Avatar>
          <input placeholder="What's happening?" type="text" value={text} onChange={(e) => setText(e.target.value)}/>
        </div>
        <input
          className="tweetbox__inputImage"
          placeholder="Optional: Enter image URL"
          type="text"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
        />
        <Button className="tweetbox__tweetButton" onClick={handleSubmit}>Tweet</Button>
      </form>
    </div>
  )
}

Tweetbox.propTypes = {}

export default Tweetbox
