import { FaFacebook, FaGift, FaHome, FaInstagram, FaMoneyBill, FaTwitter } from "react-icons/fa";
import '../component/New folder/About.css'
import image6 from '../component/images/images (3).png'
import image5 from '../component/images/images (2).png'
import image1 from '../component/images/images.png'
import image2 from '../component/images/images (1).png'
import image4 from '../component/images/download.png'
import End from "../component/end";
import image3 from '../component/images/man-face-emotive-icon-smiling-male-character-in-blue-shirt-flat-illustration-isolated-on-white-happy-human-psychological-portrait-positive-emotions-user-avatar-fo.jpg'
import { FaMoneyBillTrendUp } from "react-icons/fa6";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
function About (){
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots:true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
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
    return(
       <div className="container About" >
        <p>Home / About</p>
        <div className="sec1">
            <div className="left" >
                <h2>Our Story</h2>
               <p>Launced in 2015, Exclusive is South Asia’s premier online shopping makterplace with an active presense in Bangladesh. Supported by wide range of tailored marketing, data and service solutions, Exclusive has 10,500 sallers and 300 brands and serves 3 millioons customers across the region. </p>
                <p>Exclusive has more than 1 Million products to offer, growing at a very fast. Exclusive offers a diverse assotment in categories ranging  from consumer.</p>
            </div>
            <img src={image1} alt="image"/>
        </div>
        <div className="sec2">
            <div>
                <FaHome/>
                <h2>10.5K</h2>
                <p>Sallers active our site</p>
            </div>
            <div>
                <FaMoneyBill />
                <h2>33K</h2>
                <p>Mopnthly Produduct Sale</p>
            </div>
            <div>
                <FaGift />
                <h2>45.5K</h2>
                <p>Customer active in our site</p>
            </div>
            <div>
                <FaMoneyBillTrendUp />
                <h2>25K</h2>
                <p>Anual gross sale in our site</p>
            </div>     
        </div>
        <div className="sec3">
        <Slider {...settings}>
            <div>
                <img src={image5} alt="r"/>
                <h4>Tom Cruise</h4>
                <p>Founder & Chairman</p>
                <div className="icons ">
                    <FaFacebook/> <FaTwitter/> <FaInstagram/>
                </div>
            </div>
            <div>
                <img src={image3} alt="r" />
                <h4>Emma Watson</h4>
                <p>Managing Director</p>
                <div className="icons ">
                    <FaFacebook /> <FaTwitter /> <FaInstagram />
                </div>
            </div>
            <div>
                <img src={image4} alt="r" />
                <h4>Will Smith</h4>
                <p>Product Designer</p>
                <div className="icons ">
                    <FaFacebook /> <FaTwitter /> <FaInstagram />
                </div>
            </div>
            <div>
                <img src={image2} alt="r" />
                <h4>Colar Palmer</h4>
                <p>Banker Engineer</p>
                <div className="icons ">
                    <FaFacebook /> <FaTwitter /> <FaInstagram />
                </div>
            </div>
            <div>
                <img src={image6} alt="r" />
                <h4>Edris Elba</h4>
                <p>FrontEnd Engineer</p>
                <div className="icons ">
                    <FaFacebook /> <FaTwitter /> <FaInstagram />
                </div>
            </div>
        </Slider>
           
        </div>
        <End/>
       </div>
    )
}
export default About;