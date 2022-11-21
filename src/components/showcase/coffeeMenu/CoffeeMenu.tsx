import React from "react";
import classes from "../../../style/coffeeMenu.module.css"
import Bean from "../UI/Bean";
import MenuCarousel from "./MenuCarousel";
import MenuList from "./MenuList";


const CoffeeMenu = () => {
    return (
        <section>
            <h1 className={classes.Title}>Menu For Today</h1>
            <h1 className={classes.presentation}>OUR SPECIAL MENU.</h1>
            <div className={classes.BeanContainer}>
                <Bean />
            </div>
            <MenuCarousel />
            <MenuList />
        </section>
    );
};

export default CoffeeMenu;
