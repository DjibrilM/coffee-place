import React from "react";
import classes from "../../../style/footer.module.css"
import { AiOutlineAmazon } from "react-icons/ai"
import { SiUbereats, SiKfc, SiStripe } from "react-icons/si"
import { FaCcMastercard, FaLongArrowAltRight } from "react-icons/fa"
import { MdLocationOn, MdPhone, MdOutlineMail } from "react-icons/md"
import { BsTwitter, BsFacebook, BsInstagram, BsPinterest, BsGoogle, BsLinkedin } from "react-icons/bs"


const Footer = () => {
  return <>
    <div className={classes.partenerIcons}>
      <AiOutlineAmazon className={classes.icon} />
      <SiUbereats className={classes.icon} />
      <SiKfc className={classes.icon} />
      <SiStripe className={classes.icon} />
      <FaCcMastercard className={classes.icon} />
    </div>
    <footer className={classes.footer}>
      <h1 className={classes.Heading}>
        ChaiFresh
      </h1>
      <div className={classes.emailContainer}>
        <FaLongArrowAltRight className={classes.emailArrow} />
        <input type="text" placeholder="subscribe in our newsletter" />
      </div>

      <div className={classes.FooterContents}>
        <div className={classes.footerRow}>
          <ul>
            <h2>Contact</h2>
            <li> <MdLocationOn className={classes.footerIcon} /> 132, My street Kingston, New york</li>
            <li><MdPhone className={classes.footerIcon} /> 333-333-3334</li>
            <li><MdOutlineMail className={classes.footerIcon} />test@.com</li>
          </ul>
        </div>

        <div className={classes.footerRow}>

          <ul>
            <h2>Our service</h2>
            <li>Social media monitoring</li>
            <li>web & App solution</li>
            <li>Creative Process</li>
            <li>Software development</li>
          </ul>
        </div>

        <div className={classes.footerRow}>
          <h2>Twitter widget</h2>
          <p>Lorem ipsum dolor sit amet <br /> lorem10   Lorem ipsum dolor sit amet.</p>

          <p className={classes.Date}><BsTwitter /> 01 DAY AGO</p>

          <p>Lorem ipsum dolor sit amet <br /> lorem10   Lorem ipsum dolor sit amet.</p>

          <p className={classes.Date}> <BsTwitter /> 08 DAYS AGO</p>
        </div>


      </div>
      <div className={classes.footerBar}>
        <p>&copy; Designed By Djibril mugisho</p>
        <div className={classes.socialIcons}>
          <BsFacebook className={classes.socialIcon} />
          <BsGoogle className={classes.socialIcon} />
          <BsInstagram className={classes.socialIcon} />
          <BsTwitter className={classes.socialIcon} />
          <BsPinterest className={classes.socialIcon} />
        </div>
      </div>
    </footer>
  </>
    ;
};

export default Footer;
