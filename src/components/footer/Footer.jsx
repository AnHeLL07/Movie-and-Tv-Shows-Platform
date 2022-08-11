import React from 'react';
import './footer.scss';
import bg from '../../assets/footer-bg.jpg';
import logo from '../../assets/hometv.png';

const Footer = () => {
    
    return (
        <div className="footer delay" style={{backgroundImage: `url(${bg})`}}>
            <div className="footer__content container delay">
                <div className="footer__content__logo">
                    <div className="logo">
                        <img src={logo} alt="" />
                        <div>Home TV</div>
                    </div>
                </div>
                <div className="footer__content__menus">
                    <div className="footer__content__menu">
                        <a href="/">Home</a>
                        <a href="/terms-and-conditions">Terms and Conditions</a>
                    </div>
                    <div className="footer__content__menu">
                        <a href="/privacy-policy">Privacy policy</a>
                        <a href="/about-us">About us</a>
                    </div>
                    <div className="footer__content__menu">
                        <a href="/recent-release">Recent release</a>
                        <a href="https://www.imdb.com/search/title/?groups=top_250&sort=user_rating" target="_blank" rel="noopener noreferrer">Top IMDB</a>
                    </div>
                </div>
                <div className="footer__content__contact">
                    <div className="logo">
                        <div>Contact Us</div>
                    </div>
                </div>
                <div className='center'>
                    <h3>Email: andreianghel97@ymail</h3>
                    <h3>Phone: +40753787589</h3>
                </div>
            </div>
        </div>
    );
}

export default Footer;
