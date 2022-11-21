import React from "react";
import Bean from "../UI/Bean";
import classes from "../../../style/about.module.css"
import aboutImage from "../../../assets/images/Drinking Coffee Outside Hero.jpg"
import coffeeSac from "../../../assets/images/NicePng_sack-png_755658.png"
import { RiDoubleQuotesR } from "react-icons/ri"
import ListLine from "../UI/ListLine";


const About = () => {
    return <section>
        <div className={classes.titleContainer}>
            <h1 className={classes.title}>About Us</h1>
            <h1 className={classes.salutation}>WELCOME TO CHAIFRESH</h1>
            <Bean />
        </div>

        <div className={classes.about}>

            <div className={classes.aboutContentContainer}>

                <div className={classes.AboutText}>
                    <div className={classes.aboutIntroduction}>
                        <RiDoubleQuotesR className={classes.quoteIcon} />
                        <h1> Coffee is a way of stealing time that should by <br />
                            right belong to your older self .
                        </h1>
                    </div>

                    <div className={classes.aboutParagrap}>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex ducimus sunt molestias, iusto tenetur distinctio omnis vitae unde hic alias?</p>
                        <p>consectetur adipisicing elit. Iure enim suscipit quia ab optio possimus officia quae voluptate perferendis quas? Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex ducimus sunt molestias, iusto tenetur distinctio omnis vitae unde hic alias?</p>

                        <div className={classes.ListParag}>
                            <ListLine />
                            <p className={classes.ListParag}>  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi, dicta.</p>
                        </div>

                        <div className={classes.ListParag}>
                            <ListLine />
                            <p className={classes.ListParag}>  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi, dicta.</p>
                        </div>

                        <div className={classes.ListParag}>
                            <ListLine />
                            <p className={classes.ListParag}>  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi, dicta.</p>
                        </div>
                    </div>

                    <div className={classes.aboutBtnContainer}>
                        <button>read more</button>
                        <button>purchase now</button>
                    </div>

                </div>

                <div className={classes.aboutImageContainer}>
                    <img src={coffeeSac} className={classes.sac} alt="" />
                    <div className={classes.aboutImage}>
                        <img src={aboutImage} alt="" />
                    </div>
                </div>


            </div>
        </div>
    </section>;
};

export default About;
