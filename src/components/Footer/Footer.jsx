import React from 'react'
import css from './footer.module.css'
import Logo from '../../assets/logo1.png'
import {
    InboxIcon,
    PhoneIcon,
    LocationMarkerIcon,
    LoginIcon,
    UserIcon,
    LinkIcon,
} from '@heroicons/react/outline'

const Footer = () => {
  return (
    <div className={css.cFooterWrapper}>
        <hr />
        <div className={css.cFooter}>
            <div className={css.logo}>
                <img src={Logo} alt="logo" />
                <span>Beauty</span>
            </div>
            <div className={css.block}>
                <div className={css.detail}>
                    <span>Contact us</span>
                    <span className={css.pngLine}>
                        <LocationMarkerIcon className={css.icon}/>
                        <span>Wesstrasse 12, 42109</span>
                    </span>
                    <span className={css.pngLine} >
                       {" "}
                       <PhoneIcon className={css.icon}/>
                       <a href="tel:049163285">+49 163-185-000</a>
                    </span>
                    <span className={css.pngLine}>
                        <InboxIcon className={css.icon}/>
                        <a href="mailto:profi.hadiszare@gmail.com">profi.hadiszare@gmail.com</a>
                    </span>

                </div>
            </div>
            <div className={css.block}>
                <div className={css.detail}>
                    <span>Account</span>
                    <span className={css.pngLine}>
                        <LoginIcon className={css.icon}/>
                       Sign In
                    </span>
                </div>
            </div>
            <div className={css.block}>
                <div className={css.detail}>
                    <span>Company</span>
                    <span className={css.pngLine}>
                        <UserIcon className={css.icon}/>
                        <a href="/about">
                            <p>About Us</p>
                        </a>
                    </span>
                </div>
            </div>
            <div className={css.block}>
                <div className={css.detail}>
                    <span>Resources</span>
                    <span className={css.pngLine}>
                        <LinkIcon className={css.icon}/>
                        
                            <p>safety Privacy & Terms</p>
                        
                    </span>
                </div>
            </div>
        </div>
        <div className={css.copyRight}>
            <span>Copyright @2022 by Hadis.Zare</span>
            <span>All Rights Reserved.</span>
        </div>
    </div>
  )
}

export default Footer