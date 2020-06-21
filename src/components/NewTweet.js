import React, { useState } from "react";
import { connect } from "react-redux";
import { handleAddTweet } from "../actions/tweets";
import { Redirect } from "react-router-dom";

const NewTweet = ({ dispatch, id }) => {
  const [text, setText] = useState("");
  const [toHome, setToHome] = useState(false);

  const tweetLeft = 280 - text.length;

  if (toHome) {
    return <Redirect to="/" />;
  }

  return (
    <div>
      <h3 className="center">Compose new Tweet</h3>
      <form
        className="new-tweet"
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(handleAddTweet(text, id));
          setText("");
        }}
      >
        <textarea
          placeholder="What's happening?"
          value={text}
          onChange={(e) => {
            setText(e.target.value);
            if (id) {
              setToHome(false);
            } else {
              setToHome(true);
            }
          }}
          className="textarea"
          maxLength={280}
        />
        {tweetLeft <= 100 && <div className="tweet-length">{tweetLeft}</div>}
        <button className="btn" type="submit" disabled={text === ""}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default connect()(NewTweet);
