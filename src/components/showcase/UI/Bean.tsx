import React from "react";
import classes from "../../../style/bean.module.css"
import beanPng from "../../../assets/images/coffee-beans .png"

const Bean = () => {
    return <div className={classes.container}>
        <div className={classes.rightBar}>
            <div className={classes.LeftBeanShortBar}></div>
            <div className={classes.LeftBeanLongBar}></div>
        </div>

        <div className={classes.beanImage}>
            <img src={beanPng} alt="bean" />
        </div>

        <div className={classes.leftBar}>
            <span className={classes.RightbeanShort}></span>
            <span className={classes.RightbeanLongBar}></span>
        </div>
    </div>;
};

export default Bean;
