import React from "react";
import classes from "../../../style/menuList.module.css"

interface MenuType {
    name: string,
    description: string,
    price: number,
    imageurl: string
}

const Menu: MenuType[] = [
    {
        name: "Regular",
        description: "Coffe with vanilla",
        price: 20.05,
        imageurl: "https://www.drinkscouts.com/wp-content/uploads/2020/10/cup-of-coffee-on-table.jpg"
    },
    {
        name: "Americano",
        description: "Coffe with vanilla",
        price: 10.03,
        imageurl: "https://coffeeaffection.com/wp-content/uploads/2021/02/does-a-cappuccino-have-caffeine.jpg"
    },
    {
        name: "Capuccino",
        description: "Coffe with vanilla",
        price: 17.05,
        imageurl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQp5e5fZlja-9LpqxLmo3YKwaDQS463rmBWw&usqp=CAU"
    },
    {
        name: "Vanilla late",
        description: "Coffe with vanilla",
        price: 7.09,
        imageurl: "https://www.perfectbrew.com/wp-content/uploads/2021/07/hot-vanilla-latte-coffee-recipe-XS.jpg"
    }
]

const MenuList = () => {
    return <table className={classes.MenuTable}>
        <thead>
            <td>
                <h1 className={classes.title}>Coffee</h1>
            </td>
            <td>
                <p>price</p>
            </td>
        </thead>
        <tbody>
            {Menu.map(({ name, description, imageurl, price }: MenuType) => {
                return (
                    <tr className={classes.Item}>
                        <td className={classes.MenuHead} >
                            <div className="">
                                <img src={imageurl} alt="" />
                            </div>

                            <div className="">
                                <h1 className={classes.itemName}>{name}</h1>
                                <p className={classes.description}>{description}</p>
                            </div>
                        </td>

                        <td className={classes.price}>$ {price}</td>
                    </tr>
                )
            })
            }
        </tbody>
    </table >;
};

export default MenuList;
