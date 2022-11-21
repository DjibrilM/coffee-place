import React from "react";
import classes from "../../../style/listLine.module.css"

const ListLine = () => {
  return <div className={classes.lineContainer}>
    <div className={classes.lineShort}></div>
    <div className={classes.lineLong}></div>
  </div>;
};

export default ListLine;
