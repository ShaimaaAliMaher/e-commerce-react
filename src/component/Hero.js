import React from "react";
import "./New folder/style.css"
import { Container } from "react-bootstrap";
import { FaApple,  FaArrowRight,  FaCircle, FaGreaterThan } from "react-icons/fa";
import HeroImage from'./images/202211251218-main.cropped_1669360267.jpg'
import { Link } from "react-router-dom";
function Hero() {
    return (<>
    <Container className="d-flex rt">
        <div className="category">
            <ul>
                <li className="d-flex">Woman's Fashion <FaGreaterThan></FaGreaterThan> </li>
                    <li className="d-flex">Men's Fashion <FaGreaterThan></FaGreaterThan> </li>
                <li>Electronics </li>
                <li>HOME & Lifestyle </li>
                <li>Medicine </li>
                <li>Sports & Outdoors</li>
                <li>Baby's& Toys</li>
                <li>Grocereis & Pets</li>
                <li>Health & Beauty</li>
            </ul>
        </div>
        <div className="hero">
            <div className="content">
                <FaApple></FaApple><span> iphone 14 Series</span>
                <h2>Up to 10% off Voucher</h2>
                    <Link>Shop Now</Link> <FaArrowRight style={{fontSize:"30px"}}></FaArrowRight> 
            </div>
            <img src={HeroImage} alt="iphone"/>
            <div className="d-flex circle">
                <FaCircle></FaCircle>
                <FaCircle></FaCircle>
                <FaCircle className="on"></FaCircle>
                <FaCircle></FaCircle>
                <FaCircle></FaCircle>
            </div>
        </div>
    </Container>
    </>
    )
}
export default Hero;