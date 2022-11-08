import React, { useState, useEffect } from 'react'
import { onSnapshot, collection, query, orderBy } from "firebase/firestore";
import PropTypes from 'prop-types'
import './Feed.css';
import Tweetbox from './Tweetbox';
import Post from './Post';
import db from './firebase';
import FlipMove from 'react-flip-move';

function Feed(props) {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const q = query(collection(db, 'posts'), orderBy('created', 'desc'));
    onSnapshot(q, (s) => {
      setPosts(s.docs.map((doc) => doc.data()))
    })
  }, [])

  useEffect(() => {
    console.log(posts);
  }, [posts])

  return (
    <div className="feed">
      <div className="feed__header">
        <h2>
          Home
        </h2>
      </div>

      <Tweetbox />
      <FlipMove>
        {posts.map((p) => (
          <Post
            displayName={p.displayName}
            username={p.username}
            verified={p.verified}
            text={p.text}
            image={p.image}
            avatar={p.avatar}
            key={p.text}
          />
        ))}
      </FlipMove>
    </div>
  )
}

Feed.propTypes = {}

export default Feed
