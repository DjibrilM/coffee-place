import React from "react";
import classes from "../../../style/experience.module.css"
import image from "../../../assets/images/pngwing.com (3).png"
import Bean from "../../../assets/images/coffee-beans (3).png"


const Experience = () => {
    return <section className={classes.experience}>
        <img className={classes.cup} src={image} alt="" />
        <div className={classes.Box}>
            <h1 className={classes.title}>Enjoy great coffee</h1>
            <p>See how we put 140 year of roasting experience into every cup</p>
            <img src={Bean} className={classes.Bean} alt="" />
            <div className={classes.transparent}>
            </div>
        </div>
    </section>;
};

export default Experience;
