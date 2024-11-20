import { Container } from "react-bootstrap";
import image1 from './images/FnKhVp7XoAAW9Q0.jpg';
import image2 from './images/luxurious-golden-jewelry-with-sparkling-gems-dark-backdrop_653240-17449.avif';
import image3 from './images/speakers.png';
import image4 from './images/perf.png'
import { Link } from "react-router-dom";

function Arrival() {
    return (<>
      <Container >
        <div className="d-flex ">
            <div className="rect"></div>
            <p className="rectcontent">Featured</p>
        </div>
        <h3>Hew Arrival</h3>
          <div className="image-Arr">
             <div className="Arr-item fifty">
                <img src={image1} alt="image"/>
                <div className="content">
                    <h4>Playstation 5</h4>
                    <p>Black and White version of the PS5 coming out on sale.</p>
                    <Link>Shop Now</Link>
                </div>
             </div>
            <div className="fifty">
               <div className="Arr-item topr">
                        <img src={image2} alt="image" />
                        <div className="content">
                            <h4>Women’s Collections</h4>
                            <p>Featured woman collections that give you another vibe.</p>
                            <Link>Shop Now</Link>
                        </div>
               </div>
             <div className="d-flex botr">
                 <div className="Arr-item i3">
                        <img src={image3} alt="image" />
                        <div className="content">
                            <h4>speakers</h4>
                                <p>Amazon wireless speakers</p>
                            <Link>Shop Now</Link>
                        </div>
                    </div>
                    <div className="Arr-item i3">
                        <img src={image4} alt="image" />
                        <div className="content">
                                <h4>Perfume</h4>
                                <p>GUCCI INTENSE OUD EDP</p>
                            <Link>Shop Now</Link>
                        </div>
                    </div>
                    </div>
            </div>
        </div>
      </Container>
    </>
    )
}
export default Arrival;