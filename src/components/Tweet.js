import React from "react";
import { connect } from "react-redux";
import { formatTweet } from "../utils/helpers";

const Tweet = ({ authedUser, tweet }) => {
  return <div className="tweet"></div>;
};

const mapStateToProps = ({ authedUser, users, tweets }, { id }) => {
  const tweet = tweets[id];
  return {
    authedUser,
    tweet: formatTweet(tweet, users[tweet.author], authedUser),
  };
};

export default connect(mapStateToProps)(Tweet);
