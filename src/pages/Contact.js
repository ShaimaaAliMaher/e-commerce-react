import { FaPhone } from "react-icons/fa"
import { FaMessage } from "react-icons/fa6"
import '../component/New folder/content.css'

function Contact(){
    return(
        <div className="container content6">
            <div className="left">
               <div className="top">
                <FaPhone/>
                <span>Call Us</span>
                <p>We are available 24/7, 7 days a week</p>
                <p>Phone: +8801 6111 2222</p>
               </div>
               <hr></hr>
                <div className="bottom">
                    <FaMessage />
                    <span>Write To Us</span>
                    <p>Fill out our form and we will contact you within 24 hours</p>
                    <p>Email: customer@exclusive.com</p>
                    <p>Email: support@exclusive.com</p>
                </div>
            </div>
            <div className="right">
                <div className="top">
                    <input type="text" placeholder="your name" />
                    <input type="text" placeholder="your email" />
                    <input type="text" placeholder="your phone" />
                </div>
                <div className="bottom">
                   <textarea placeholder="your message"/>
                </div>
                <button>Send Message</button>
            </div>
        </div>
    )
}
export default Contact