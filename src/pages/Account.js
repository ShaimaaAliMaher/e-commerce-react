import { Container } from "react-bootstrap"
import '../component/New folder/cart.css'
function Account (){
    const fname = localStorage.getItem('fname')
    const lname = localStorage.getItem('lname')
    const email = localStorage.getItem('email')
    
    return(
        <Container className="account">
            <div className="top">
            <p>Home / My Account</p>
            <p>welcom :{fname}</p>
            </div>
            <div className="content">
            <div className="left">
               <h4>Manage My Account</h4>
               <div>
                <p style={{ color: "rgb(224, 45, 45)" }}> My Profile</p>
                <p style={{ color: "gray" }}>Address Book</p>
                <p style={{ color: "gray" }}>My Payment Options</p>
               </div>
                <h4> My order</h4>
                <div>
                    <p style={{ color: "gray" }}>My Retumes</p>
                    <p style={{ color: "gray" }}>My Cancelation</p>
                </div>
                <h4> My WishList</h4>
            </div>
            <div className="right ">
                <h3>Edit My Profile</h3>
                <div className="d-flex">
                    <div style={{width: "50%"}}>
                        <label>First Name</label> <br></br>
                            <input type="text" placeholder={ fname }  />
                    </div>
                    <div style={{ width: "50%" }}>
                        <label>Last Name</label> <br></br>
                            <input type="text" placeholder={ lname }/> 
                    </div>
                </div>
                <div className="d-flex">
                    <div style={{ width: "50%" }}>
                        <label>Email</label> <br></br>
                            <input type="text" placeholder={ email }  />
                    </div>
                    <div style={{ width: "50%" }}>
                        <label>Address</label> <br></br>
                        <input type="text" placeholder="street 1"/>
                    </div>
                </div>
                    <div style={{ width: "100%" }}>
                        <label>Password Change</label> <br></br>
                        <input type="text" placeholder=" current password"  />
                        <input type="text" placeholder=" New password"  />
                        <input type="text" placeholder=" conferm new password" />
                    </div>
                <div className="g">
                    <button className="btn1"> cancel</button>
                    <button className="btn2"> save changes</button>
                </div>
                    
            </div>
            </div>
        </Container>
    )
}
export default Account