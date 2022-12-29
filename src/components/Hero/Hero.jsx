import React from 'react'
import css from "./hero.module.css";
import HeroImg from "../../assets/h2.png";
import {RiShoppingBagFill} from "react-icons/ri";
import {BsArrowRight} from "react-icons/bs";
import {motion} from "framer-motion"

const Hero = () => {
    const transition = {duration:3,type:"spring"}
  return (
    <div className={css.container}>
        {/**left side */}
        <div className={css.h_sides}>
            <span className={css.text1}>Skin protection cream</span>
            <div className={css.text2}>
                <span>Trendy Collection</span>
                <span>
                    {" "}
                   Lorem ipsum dolor sit amet consectetur adipisicing elit

                    <br/>
                </span>
            </div>
        </div>
         {/**middle */}
        <div className={css.wrapper}>
            <motion.div
             initial={{bottom:"-2rem"}}
             whileInView={{bottom:"0rem"}}
             className={css.blue}
             transition={transition}
             ></motion.div>
                <motion.img
                 transition={transition}
                 initial={{bottom:"2rem"}}
                 whileInView={{bottom:"0rem"}}
                 src={HeroImg} alt="Hero" width={700} />
                <motion.div
                 transition={transition}
                 initial={{right:"4%"}}
                whileInView={{right:"1%"}}
                 className={css.cart2}>
                    <RiShoppingBagFill/>
                    <div className={css.signup}>
                        <span>Best Signup Offers</span>
                        <div>
                            <BsArrowRight/>
                        </div>
                    </div>
                </motion.div>
            
        </div>
            {/**right side */}
        <div className={css.h_sides}>
            <div className={css.traffic}>
                <span>1.5m</span>
                <span>Montly Traffic</span>
            </div>
            <div className={css.customers}>
                <span>100k</span>
                <span>Happy Customers</span>
            </div>
        </div>

    </div>
  )
}

export default Hero