import { Container } from "react-bootstrap";
import './New folder/style.css'
import { FaCar, FaHeadphones } from "react-icons/fa";
import { RiVerifiedBadgeFill } from "react-icons/ri";
function End() {
    return (<>
     <Container className="end">
        <div>
            <FaCar></FaCar>
            <h4>FREE AND FAST DELIVERY</h4>
            <p>Free delivery for all orders over $140</p>
        </div>
            <div>
                <FaHeadphones></FaHeadphones>
                <h4>24/7 CUSTOMER SERVICE</h4>
                <p>Friendly 24/7 customer support</p>
            </div>
            <div>
                <RiVerifiedBadgeFill />
                <h4>MONEY BACK GUARANTEE</h4>
                <p>We reurn money within 30 days</p>
            </div>
     </Container>
    </>
    )
}
export default End;