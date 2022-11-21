import React from "react";
import classes from "../../../style/team.module.css"
import Member1 from "../../../assets/images/Meet Chef Tam __ Underground Cafe_JPG.webp"
import Member2 from "../../../assets/images/istockphoto-1192003808-612x612.jpg";
import Member3 from "../../../assets/images/YipjqgjQ.jpg";


const Team = () => {
    return <section className={classes.Team}>
        <h1 className={classes.Heading}>Our Team</h1>
        <h1 className={classes.Introduction}>Meet Our Team</h1>

        <div className={classes.TeamContainer}>

            <div className={classes.member}>
                <div className={classes.MemberCercle}>
                    <img src={Member1} alt="" />
                </div>
                <h2>Marta Morgan</h2>
                <p>Waiter Manager</p>
            </div>

            <div className={classes.member}>
                <div className={classes.MemberCercle}>
                    <img src={Member2} alt="" />
                </div>
                <h2>Franck Monoa</h2>
                <p>Master Chef</p>
            </div>

            <div className={classes.member}>
                <div className={classes.MemberCercle}>
                    <img src={Member3} alt="" />
                </div>
                <h2>Alex Maharhaj</h2>
                <p>Ceo-Founder</p>
            </div>
        </div>
    </section>
};

export default Team;
