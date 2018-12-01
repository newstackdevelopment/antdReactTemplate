import React, { Component } from "react";
import { connect } from "react-redux";
import { WithStoreAndRouter, WrapperActions } from "dw-app-wrapper";
import "./App.css";
class Home extends Component {
  render() {
    console.log(this);
    return <div>test</div>;
  }
}
const ConnectedHome = connect(
  state => state,
  dispatch => ({})
)(Home);
const ConnectedApp = WithStoreAndRouter();
class App extends Component {
  render() {
    return (
      <ConnectedApp hasDrawer={true}>
        <ConnectedHome />
      </ConnectedApp>
    );
  }
}

export default App;
