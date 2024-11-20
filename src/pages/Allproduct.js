import { useContext} from "react";
import { Container } from "react-bootstrap";
import '../component/New folder/style-prouduct.css';
import Card from "../component/card";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
 import {  shopContext } from "../Context/shopcontext";
import { Link } from "react-router-dom";

 
function ALLproducts() {
   const {productsale,   datasearch}=useContext( shopContext)
   
    return (<>     
        <Container className="sale">
            {!datasearch? <><div className="d-flex ">
                <div className="rect"></div>
                <p className="rectcontent">All Products</p>
            </div>
            <div className=" sale-pr mt-5 ourprodct">
                
                {productsale.map((item) => {
                    return (
                    <Card item={item} key={item.id}/>)
                }
                )}
            </div>  
                </>
             : <>
                    <div className=" sale-pr mt-5 ourprodct">
            {datasearch.map((item) => { return (<Card item={item} key={item.id}/>)})}
            </div>
            </> } 
            <div className="tope">
           <a href="#" className="top">Back to top</a></div>
        </Container>
    </>
    )
}
export default ALLproducts
    ;