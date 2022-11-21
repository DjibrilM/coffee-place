import React from "react";
import classes from "../../../style/coffeeType.module.css"
import Bean from "../UI/Bean";
import { SiBuymeacoffee } from "react-icons/si"
import { TbCoffee } from "react-icons/tb"
import capImage from "../../../assets/images/pngwing.com (2).png"


const CoffeeType = () => {
    return <section className={classes.coffeeType}>
        <div className={classes.introduction}>
            <h1>Special Coffee</h1>
            <h1>Our coffee type for you</h1>
            <Bean />
            <div className={classes.BTNcontainer}>
                <button> <i><TbCoffee /></i>  Hot Coffee</button>
                <button> <i><SiBuymeacoffee /></i> Cold Coffee</button>
            </div>
        </div>

        <div className="">
            <img className={classes.CapImg} src={capImage} alt="" />
        </div>

        <h1 className={classes.rotatedH1}>Just for you.</h1>
    </section>;
};

export default CoffeeType;
