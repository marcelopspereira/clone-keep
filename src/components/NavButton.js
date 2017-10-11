import React from "react";
import { withRouter } from "react-router-dom";
import Button from "./Button";

const NavButton = props => {
  const { history, children, to } = props;

  return <Button {...props} onClick={() => history.push(to)}>{ children }</Button>
}

export default withRouter(NavButton);
