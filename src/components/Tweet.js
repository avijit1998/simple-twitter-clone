import React from "react";
import { connect } from "react-redux";
import { formatTweet } from "../utils/helpers";

const Tweet = ({ authedUser, tweet }) => {
  return <div className="tweet"></div>;
};

const mapStateToProps = ({ authedUser, users, tweets }, { id }) => {
  const tweet = tweets[id];
  const parentTweet = tweet ? tweets[tweet.replyingTo] : null;
  return {
    authedUser,
    tweet: tweet
      ? formatTweet(tweet, users[tweet.author], authedUser, parentTweet)
      : null,
  };
};

export default connect(mapStateToProps)(Tweet);
