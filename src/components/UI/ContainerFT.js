import React from "react";
import classes from "../UI/ContainerFT.module.css";

const ContainerFT = (props) => {
  return <div className={classes.container}>{props.children}</div>;
};

export default ContainerFT;
