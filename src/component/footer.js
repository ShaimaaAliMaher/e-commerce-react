import { Container } from 'react-bootstrap';
import { LuSendHorizonal } from "react-icons/lu";
import QR from './images/qrcode.svg';
import store from './images/appstore.svg';
import google from './images/googleplay.svg'
import './New folder/style.css'
import {  FaFacebook, FaInstagram, FaLinkedinIn, FaTwitter } from 'react-icons/fa';
function Footer() {
    return (<>
    <div className='footer'>
        <Container className='d-flex'>
            <div className='content'>
                <h3>Exclusive</h3>
                <h4>Subscribe</h4>
                <p>Get 10% off for your first order</p>
                <form >
                    <input placeholder='Enter your Email'/>
                    <LuSendHorizonal />
                </form>
            </div>
            <div className='content'>
                <h4>Support</h4>
                <p>111 Bijoy sarani, Dhaka,  DH 1515, Bangladesh.</p>
                <p>exclusive@gmail.com</p>
                <p>+88015-88888-9999</p>
            </div>
            <div className='content'>
                <h4>Account</h4>
                <p>My Account</p>
                <p>Login/register</p>
                <p>Cart</p>
                <p>Wishlist</p>
                <p>Shop</p>
            </div>
            <div className='content'>
                <h4>Quick Link</h4>
                <p>Privacy / policy</p>
                <p>Term of us</p>
                <p>FAQ</p>
                <p>Contact</p>
            </div>
            <div className='content'>
                <h4>Download App</h4>
                <p>Save $3 with App New User Only</p>
                <div className='d-flex Qr1'>
                    <img src={QR} alt='qrcode'/>
                    <div>
                        <img src={store} alt='store' />
                        <img src={google} alt='google' />
                    </div>
                </div>
                <div className='d-flex icons'>
                    <FaFacebook></FaFacebook>
                    <FaInstagram></FaInstagram>
                    <FaTwitter></FaTwitter>
                    <FaLinkedinIn></FaLinkedinIn>
                </div>
            </div>
        </Container>
        <div className='footerend' >
                <p>&copy;Copyright Rimel 2022. All right reserved</p>
        </div>
    </div>
   
    </>
    )
}
export default Footer;