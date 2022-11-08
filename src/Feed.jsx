import React, { useState, useEffect } from 'react'
import { doc, onSnapshot, collection, query, where } from "firebase/firestore";
import PropTypes from 'prop-types'
import './Feed.css';
import Tweetbox from './Tweetbox';
import Post from './Post';
import db from './firebase';

function Feed(props) {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const q = query(collection(db, 'posts'));
    onSnapshot(q, (s) => {
      setPosts(s.docs.map((doc) => doc.data()))
    })
  }, [])

  return (
    <div className="feed">
      <div className="feed__header">
        <h2>
          Home
        </h2>
      </div>

      <Tweetbox />

      {posts.map((p) => (
        <Post
          displayName={p.displayName}
          username={p.username}
          verified={p.verified}
          text={p.text}
          image={p.image}
          avatar={p.avatar}
        />
      ))}
    </div>
  )
}

Feed.propTypes = {}

export default Feed
