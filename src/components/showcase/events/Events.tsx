import React from "react";
import classes from "../../../style/event.module.css"

const Events = () => {
    return <section className={classes.Event}>
        <h1 className={classes.Heading}>Events</h1>
        <h1 className={classes.Desc}>UPCOMING EVENT</h1>
        <div className={classes.contentsContainer}>
            <div className="">
                <h2 className={classes.contentsIntroduction}>
                    ENJOY a Free Coffee & Tea cup
                </h2>
                <p>tuesday 15/12/22, 6:00am</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit, numquam!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit, numquam!</p>
            </div>
        </div>

        <div className={classes.eventTime}>
            <div className={classes.Indicator}>
                <div className={classes.timeIndicator}>
                    <h1>18</h1>
                </div>
                <p>Days</p>
            </div>

            <div className={classes.Indicator}>
                <div className={classes.Hours}>
                    <h1>8</h1>
                </div>
                <p>Hour</p>
            </div>

            <div className={classes.Indicator}>
                <div className={classes.timeIndicator}>
                    <h1>38</h1>
                </div>
                <p>Minutes</p>
            </div>
        </div>
        <button className={classes.submitBtn}>RESERVATION NOW</button>
    </section>;
};

export default Events;
