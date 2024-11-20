import { useEffect, useState, useContext } from "react";
import { Container } from "react-bootstrap";
import './New folder/style-prouduct.css';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";
import Timer from "./Timer";
import { shopContext} from "../Context/shopcontext";
import Card from '../component/card'
function Fetchsale() {
    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 4.5,
        slidesToScroll: 1.5,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1.5,
                    infinite: false,
                    dots: false
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1.5,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    const { productsale } = useContext(shopContext)

    return (<>
        <Container className="sale">
            <div className="d-flex ">
                <div className="rect"></div>
                <p className="rectcontent">Todey's</p>
            </div>
            <div className="d-flex ">
                <h2>Flash sale</h2>
               <h2 className="timer">
                <Timer duration ={2 * 24 * 60 *60 *1000}/></h2>
            </div>
            <div className=" sale-pr mt-5">
                <Slider {...settings}>
              {productsale.map((item)=>{
                  if (item.discount){
                    return(
                    <Card item={item}  key={item.id}/>)
                    }   
                 
                     
              })}
                </Slider>
            </div>
            <Link to='/allproducts' className="btn">View All Product</Link>
        </Container>
    </>
    )
}
export default Fetchsale;