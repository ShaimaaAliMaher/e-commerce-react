import { Container } from "react-bootstrap"
import { shopContext } from "../Context/shopcontext";
import { useContext } from "react";
import CartItem from "../component/Cartitem";
import Table from 'react-bootstrap/Table';
import { Link } from "react-router-dom";
function Cart(){
    const { cartItem, ubdatecart, total, amountcart }= useContext(shopContext)
    return(
      <Container>
        <p className="catrtop">Home | Cart</p>
            {amountcart ? <><div>
                <Table hover>
                    <thead>
                        <tr>
                            <th>Product</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Subtoal</th>
                        </tr>
                    </thead>
                    <tbody>
                        {cartItem.map((item) => {
                            return (
                                <CartItem item={item} key={item.id}>
                                </CartItem>
                            )
                        })}
                    
                    </tbody>
                    </Table>
                <div className="coupon">
                <Link to='/allproducts' className="back"> Return To Shop</Link>
                    <button className="btn" onClick={() => { ubdatecart()}}>Update cart</button>
                </div>
                <div className="coupon">
                    <div className="left">
                        <input type=" text" placeholder="coupon code"/>
                        <button> Apply coupon</button>
                    </div>
                    <div className="right">
                        <h3>Cart Total</h3> 
                        <h5>Subtotal : {total} $ </h5><hr></hr>
                        <h5>Shipping : free</h5><hr></hr>
                        <h5 >Total : {total} $</h5>
                        <Link to='/chekout'><button>  Process to ckeckout</button></Link>
                    </div>
                </div>     
        </div></> :
        <>
        <h2 className="empty"> your catr is empty</h2>
        </>}
        
      </Container>
      
    )
}
export default Cart




       
            
      
   

