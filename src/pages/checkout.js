import { Container } from "react-bootstrap";
import '../component/New folder/cart.css';
import LinesEllipsis from 'react-lines-ellipsis';
import { shopContext } from "../Context/shopcontext";
import { useContext } from "react";
import image1 from '../component/images/300px-BKash.png'
import image2 from '../component/images/visa-512.webp'
import image3 from '../component/images/pngimg.com - mastercard_PNG11.png'
import image4 from '../component/images/nagad.jpg'
function Checkout() {
    const { total, cartItem } = useContext(shopContext)

    return (
        <Container className="Check">
            <p>Account / My Acoount / Product / View Cart / Checkout</p>
            <div className="content">
                <div className="left">
                    <h2>Billing Details</h2>
                    <label>First Name</label> <br></br>
                    <input type="text" /> <br></br>
                    <label>Company Name</label> <br></br>
                    <input type="text" /> <br></br>
                    <label>Street Adress</label> <br></br>
                    <input type="text" /> <br></br>
                    <label>Appartment, floor, etc (optional)</label> <br></br>
                    <input type="text" /> <br></br>
                    <label>Towen /City</label> <br></br>
                    <input type="text" /> <br></br>
                    <label>Phone Number</label> <br></br>
                    <input type="text" /> <br></br>
                    <label>Email Adress</label> <br></br>
                    <input type="text" /> <br></br>
                    <input type="checkbox" /> <span>Save this information for faster check-out next time</span>
                </div>
                <div className="right">
                    <div className=" r1">
                        {cartItem.map((item) => {
                            return (
                              <div className="d-flex">
                                <img src={item.image} alt="p"/>
                                    <LinesEllipsis className="title" text={item.title} maxLine='1' trimRight basedOn='letters' />

                                <p>{item.price * item.amount}$</p>
                              </div>
                            )
                        })}
                    </div>
                    <div className="right r2">
                        <h5>Subtotal : {total} $ </h5><hr></hr>
                        <h5>Shipping : free</h5><hr></hr>
                        <h5 >Total : {total} $</h5>
                    </div>
                    <div className="r3">
                        <input type="radio" name="dd" /> Bank
                        <img src={image1} alt="p" />
                        <img src={image2} alt="p" />
                        <img src={image3} alt="p" />
                        <img src={image4} alt="p" /> <br></br>
                        <input type="radio" name="dd" /> Cash on delivery
                    </div>
                    <div className="r4">
                        <input type=" text" placeholder="coupon code" />
                        <button className="btn"> Apply coupon</button>
                    </div>
                    <button className="btn"> place Order</button>
                </div>
            </div>
        </Container>
    )
}
export default Checkout