import React from "react";
import classes from "../../../style/contactForm.module.css"
import coffeeLogo from "../../../assets/images/coffee-beans (3).png"
import { FaUserAlt } from "react-icons/fa"
import { MdEmail, MdDateRange, MdAccessTime } from "react-icons/md"
import { AiFillPhone } from "react-icons/ai"
import { FaUserPlus } from "react-icons/fa"


const ContactForm = () => {
    return <div className={classes.ContactForm}>
        <div className={classes.introduction}>
            <h1 className="">Reservation</h1>
            <h1>BOOK YOUR TABLE</h1>
            <div className={classes.introductionImage}>
                <img src={coffeeLogo} alt="" />
            </div>
        </div>

        <div className={classes.FormContainer}>
            <form className={classes.form}>
                <div className={classes.flexCol}>
                    <div className={classes.inputContainer}>
                        <input type="text" placeholder="Name" />
                        <i><FaUserAlt /></i>
                    </div>

                    <div className={classes.inputContainer}>
                        <input type="email" placeholder="Email" />
                        <i><MdEmail /></i>
                    </div>

                    <div className={classes.inputContainer}>
                        <input type="date" placeholder="Date" />
                        <i><MdDateRange /></i>
                    </div>
                </div>

                <div className={classes.flexCol}>
                    <div className={classes.inputContainer}>
                        <input type="tel" placeholder="Phone" />
                        <i><AiFillPhone /></i>
                    </div>

                    <div className={classes.inputContainer}>
                        <input type="number" placeholder="Number of people" />
                        <i><FaUserPlus /></i>
                    </div>

                    <div className={classes.inputContainer}>
                        <input type="time" placeholder="Time" />
                        <i><MdAccessTime /></i>
                    </div>
                </div>
            </form>

            <button className={classes.submitBtn}>RESERVATION NOW</button>
        </div>
    </div>;
};

export default ContactForm;
