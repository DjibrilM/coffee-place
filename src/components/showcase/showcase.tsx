import React from "react";
import classes from "../../style/showcase.module.css"
import { WiTime8 } from "react-icons/wi"
import { ImFacebook, ImLinkedin2 } from "react-icons/im"
import { BsTwitter } from "react-icons/bs"
import { TfiPinterest } from "react-icons/tfi"
import { AiOutlineGooglePlus, AiOutlineSearch } from "react-icons/ai"
import logopng from "../../assets/images/logo.png"
import { motion } from "framer-motion";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai"
import { useState } from "react";




const Showcase = (): JSX.Element => {
    const [menu, setMenu] = useState<boolean>(false);


    return <motion.section initial={{ opacity: 0 }} animate={{ opacity: 1 }} className={classes.showcase} transition={{ duration: 0.5 }}>

        <section className={classes.Backdrop} style={menu ? { width: "100%", } : {}} onClick={() => setMenu(false)}></section>

        <header className={classes.header}>
            <div className={classes.headerContainer}>
                <div className={classes.headerList}>
                    <ul>
                        <li><a href=""><span>Book Now</span></a></li>
                        <li><a href=""><span>Order Online</span></a> </li>
                        <div className={classes.programTime}>
                            <WiTime8 />

                            <span>07:30am - 11:00pm</span>
                        </div>
                    </ul>
                </div>
                <div className={classes.socialLinks}>
                    <ul>
                        <li><a href=""><ImFacebook /></a></li>
                        <li><a href=""><BsTwitter /></a></li>
                        <li><a href=""><TfiPinterest /></a></li>
                        <li><a href=""><AiOutlineGooglePlus /></a></li>
                        <li><a href=""><ImLinkedin2 /></a></li>
                    </ul>
                </div>
            </div>
        </header>

        <nav className={classes.navigationContainer} style={{ border: "none" }}>
            <div className={classes.logoContainer}>
                <h1 className="">ChaiFresh</h1>
            </div>

            <div className={classes.navigation}
                style={menu ? {
                    left: 0,
                } : {}}>
                <div className={classes.closeBtn} onClick={() => setMenu(false)}>
                    <AiOutlineClose className={classes.closeIcon} />
                </div>
                <ul>
                    <li ><a href="" style={{ color: "white", fontWeight: "bolder" }}>Home</a></li>
                    <li><a href="">About</a></li>
                    <li><a href="">Reservation</a></li>
                    <li><a href="">Menu</a></li>
                    <li><a href="">Event</a></li>
                    <li><a href="">Blog</a></li>
                    <p><AiOutlineSearch /></p>
                </ul>
            </div>

            <div className={classes.MenuBar} onClick={() => setMenu(true)}>
                <AiOutlineMenu className={classes.menuIcon} />
            </div>
        </nav>

        <div className={classes.showcaseContent}>
            <div className={classes.showcaseLogo}>
                <img src={logopng} alt="" />
            </div>
            <div className={classes.showcaseTitle}>
                <h1 >COFEE IS ALWAYS A GOOD IDEA</h1>
            </div>
            <h1 className={classes.showcaseMoto}>LIFE BEGIN AFTER COFFEE</h1>
            <button className={classes.centerBtn}>RESEVER NOW</button>
        </div>
    </motion.section>;
};

export default Showcase;
