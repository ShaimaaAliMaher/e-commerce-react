import React from "react";
import './New folder/style.css'
import { Container } from "react-bootstrap";
import music from './images/Untitled.png'
function Enhance() {
    return (<>
    <Container className="Enhance">
        <div className="content-En">
            <p>Catrgories</p>
            <h2>Enhance Your Music Experience</h2>
            <div className="times d-flex">
                <div>
                    <h6>23</h6>
                    <p>Hours</p>
                </div>
                    <div>
                        <h6>05</h6>
                        <p>Days</p>
                    </div>
                    <div>
                        <h6>59</h6>
                        <p>Minuites</p>
                    </div>
                    <div>
                        <h6>35</h6>
                        <p>Swconds</p>
                    </div>
            </div>
            <button>Buy Now!</button>
        </div>
        <img src={music} alt="music"/>
    </Container>  
    </>
    )
}
export default Enhance;