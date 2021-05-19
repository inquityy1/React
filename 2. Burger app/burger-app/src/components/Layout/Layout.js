import React, { Component } from "react";

import Auxiliary from "../../hoc/Auxiliary";
import classes from "./Layout.css";
import Toolbar from "../Navigation/Toolbar/Toolbar";
import SideDrawer from "../Navigation/SideDrawer/SideDrawer";

class Layout extends Component {
  state = {
    showsideDrawer: true,
  };

  sideDrawerClosedHandler = () => {
    this.setState({ showsideDrawer: false });
  };

  render() {
    return (
      <Auxiliary>
        <Toolbar />
        <SideDrawer
          open={this.state.showsideDrawer}
          closed={this.sideDrawerClosedHandler}
        />
        <main className={"Content"}>{this.props.children}</main>
      </Auxiliary>
    );
  }
}

export default Layout;
