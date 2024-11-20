import {   useContext } from "react";
import { Container } from "react-bootstrap";
import './New folder/style-prouduct.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";
import { shopContext } from "../Context/shopcontext";
import Card from './card'
function Ourprouducts() { 
    const { productsale } = useContext(shopContext) 
    return (<>
        <Container className="sale">
            <div className="d-flex ">
                <div className="rect"></div>
                <p className="rectcontent">Our Products</p>
            </div>
            <div className="d-flex ">
                <h2>Explore Our Products</h2> 
            </div>
            <div className=" sale-pr mt-5 ourprodct">
                    {
                    productsale.slice(20,30).map((item) => {

                            return (
                                <Card item={item} key={item.id} />
                                      )
                        }
                    )}
            </div>
            <Link to='/allproducts' className="btn">View All Product</Link>
        </Container>
    </>
    )
}
export default Ourprouducts
;