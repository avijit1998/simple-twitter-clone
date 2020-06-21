import React, { useEffect, Fragment } from "react";
import { connect } from "react-redux";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { handleInitialData } from "../actions/shared";
import Dashboard from "./Dashboard";
import LoadingBar from "react-redux-loading";
import NewTweet from "./NewTweet";
import TweetPage from "./TweetPage";
import Nav from "./Nav";

function App({ loading, dispatch }) {
  useEffect(() => {
    dispatch(handleInitialData());
  });

  return (
    <Router>
      <Fragment>
        <LoadingBar />
        <div className="container">
          <Nav />
          {loading === true ? null : (
            <div>
              <Route path="/" exact component={Dashboard} />
              <Route path="/tweet/:id" component={TweetPage} />
              <Route path="/new" component={NewTweet} />
            </div>
          )}
        </div>
      </Fragment>
    </Router>
  );
}

const mapStateToProps = ({ authedUser }) => {
  return {
    loading: authedUser === null ? true : false,
  };
};

export default connect(mapStateToProps)(App);
