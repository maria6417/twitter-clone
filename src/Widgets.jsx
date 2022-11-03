import React from 'react';
import PropTypes from 'prop-types';
import { TwitterTimelineEmbed, TwitterShareButton, TwitterFollowButton, TwitterHashtagButton, TwitterMentionButton, TwitterTweetEmbed, TwitterMomentShare, TwitterDMButton, TwitterVideoEmbed, TwitterOnAirButton } from 'react-twitter-embed';
import './Widgets.css';
import SearchIcon from '@mui/icons-material/Search';

function Widgets(props) {
  return (
    <div className="widgets">
      <div className="widgets__input">
        <SearchIcon className="widgets__searchIcon" />
        <input placeholder="Search Twitter" type="text" />
      </div>

      <div className="widgets__widgetContainer">
        <h2>What's happening?</h2>
        <TwitterTweetEmbed tweetId={"1579747335743176705"} />
        <TwitterTimelineEmbed
          sourceType="profile"
          screenName="elonmusk"
          options={{ height: 400 }}
        />

        <TwitterShareButton
          url={"https://github.com/maria6417"}
          options={{ text:"#reactjs is awesome", via: "maria"}}
        />
      </div>
    </div>
  )
}

Widgets.propTypes = {}

export default Widgets
