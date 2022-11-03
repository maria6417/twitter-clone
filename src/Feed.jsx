import React from 'react'
import PropTypes from 'prop-types'
import './Feed.css';
import Tweetbox from './Tweetbox';
import Post from './Post';

function Feed(props) {
  return (
    <div className="feed">
      <div className="feed__header">
        <h2>
          Home
        </h2>
      </div>

      <Tweetbox />

      {/* Tweets */}
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />

    </div>
  )
}

Feed.propTypes = {}

export default Feed
