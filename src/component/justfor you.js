import './New folder/style-prouduct.css';
import Card from './card'
import {useContext } from "react";
import { Container } from "react-bootstrap";
import { shopContext } from "../Context/shopcontext";
function JustForYou() {
    const { productsale} = useContext(shopContext)
    return (<>
        <Container className="sale">
            <div className="d-flex ">
                <div className="rect"></div>
                <p className="rectcontent">JustForYou</p>
            </div>
            <div className=" sale-pr mt-5 related">
                {productsale.slice(5,12).map((item) => {
                    return (
                    <Card item={item} key={item.id}/>)
                })}

            </div>

        </Container>
    </>
    )
}
export default JustForYou;