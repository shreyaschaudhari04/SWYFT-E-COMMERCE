import React from "react";
import "./Footer.scss";
import { FaLocationArrow, FaMobileAlt, FaEnvelope } from "react-icons/fa";
import Payment from "../../assets/payments.png";
const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-content">
                <div className="col">
                    <div className="title">About</div>
                    <div className="text">
                    Welcome to our sports ecommerce website, where your athletic dreams become a reality! At SWYFT SPORTS, we are passionate about sports and committed to bringing you a seamless shopping experience that caters to all your sporting needs. Whether you're a professional athlete, a weekend warrior, or simply someone who enjoys an active lifestyle, we've got you covered.
                    </div>
                </div>
                <div className="col">
                    <div className="title">Contact</div>
                    <div className="c-item">
                        <FaLocationArrow />
                        <div className="text">
                           Terna Engineering College, Nerul, Navi Mumbai-Maharashtra
                        </div>
                    </div>
                    <div className="c-item">
                        <FaMobileAlt />
                        <div className="text">Phone: 9323871954</div>
                    </div>
                    <div className="c-item">
                        <FaEnvelope />
                        <div className="text">Email: shreyasrchaudhari@gmail.com</div>
                    </div>
                </div>
                <div className="col">
                    <div className="title">Categories</div>
              <span className="text">Tshirts</span> 
            <span className="text">Trousers</span> 
            <span className="text">Shirts</span> 
            <span className="text">Shoes</span> 
            <span className="text">Sunglasses</span> 
            <span className="text">Sports Equipments</span>
                </div>
                <div className="col">
                    <div className="title">Pages</div>
                    <span className="text">Home</span>
                    <span className="text">About</span>
                    <span className="text">Privacy Policy</span>
                    <span className="text">Returns</span>
                    <span className="text">Terms & Conditions</span>
                    <span className="text">Contact Us</span>
                </div>
            </div>
            <div className="bottom-bar">
                <div className="bottom-bar-content">
                    <span className="text">
                        SWYFT STORE 2023 CREATED BY SHREYAS AND YASH. PREMIUM SPORTSWEAR AND EQUIPMENTS SOLUTIONS.
                    </span>
                    <img src={Payment} />
                </div>
            </div>
        </div>
    );
};

export default Footer;