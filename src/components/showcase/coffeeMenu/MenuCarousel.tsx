import React, { useState } from "react";
import classes from "../../../style/menuCarousel.module.css"
import cup from "../../../assets/images/imgbin_magic-mug-personalization-printing-coffee-cup-png.png"
import Bean from "../UI/Bean";

const carouselText: { text: string }[] = [
  {
    text: "et a facilis, maxime nihil cupiditate, reprehenderit quas corrupti voluptates reiciendis, veritatis tempora debitis"
  },
  {
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, non."
  },
  {
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perferendis"
  }
]


const MenuCarousel = () => {
  const [selectedText, setSelectedText] = useState<number>(0);
  return <div className={classes.container}>
    <div className={classes.CarouselRectangle}>
      <div className={classes.carouselContents}>
        <img src={cup} alt="" className={classes.cup} />
        <div className="">
          <h1>Hot beverage</h1>
          <p>{carouselText[selectedText].text}</p>
        </div>
      </div>
      <div className={classes.Controllers}>
        {
          carouselText.map((text, index) => {

            console.log(index)

            return (
              <div className={classes.cercle} style={index === selectedText ? { border: "2px solid #ccc", } : { border: "1px solid transparent", }} onClick={() => setSelectedText(index)}>
                <div className={classes.indicator}></div>
              </div>
            )
          })

        }
      </div>
    </div>
  </div>;
};

export default MenuCarousel;
