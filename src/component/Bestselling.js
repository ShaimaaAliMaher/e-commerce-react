import { useContext } from "react";
import { Container } from "react-bootstrap";
import './New folder/style-prouduct.css';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link  } from "react-router-dom";
import { shopContext } from "../Context/shopcontext";
import Card from './card';
function Bestselling() {
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
                <p className="rectcontent">This Month</p>
            </div>
            <div className="d-flex month">
                <h2>Best Selling Prouduct</h2>
                <Link to='/allproducts' className="btn">View All Product</Link>
            </div>
            <div className=" sale-pr mt-5">
                <Slider {...settings}>
                    {productsale.map((item) => {
                        if (!item.discount) {
                            return (
                                <Card item={item} key={item.id}/>
                                )
                        }
                    })}
                </Slider>
            </div>
        </Container>
    </>
    )
}
export default Bestselling;