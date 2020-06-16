import React, { useEffect } from "react";
import { connect } from "react-redux";
import { handleInitialData } from "../actions/shared";
import Dashboard from "./Dashboard";

function App({ loading, dispatch }) {
  useEffect(() => {
    dispatch(handleInitialData());
  });
  return loading ? (
    <h1>loading...</h1>
  ) : (
    <div>
      <Dashboard />
    </div>
  );
}

const mapStateToProps = ({ authedUser }) => {
  return {
    loading: authedUser === null ? true : false,
  };
};

export default connect(mapStateToProps)(App);
