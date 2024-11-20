import React from "react";
import './New folder/style.css'
import { Container } from "react-bootstrap";
import { FaArrowAltCircleLeft, FaArrowAltCircleRight} from "react-icons/fa";
import { VscDeviceCamera, VscGame, VscVm, VscWatch } from "react-icons/vsc";
import { IoPhonePortraitOutline } from "react-icons/io5";
import { CiHeadphones } from "react-icons/ci";

function Info() {
    return (
    <Container className="mt-4 info">
    <div className="d-flex ">
       <div className="rect"></div>
        <p className="rectcontent">categories</p>
    </div>
    <div className="d-flex browser">
       <h2> Browser By Category</h2>
       <div className="d-flex"> 
         <FaArrowAltCircleLeft></FaArrowAltCircleLeft>
         <FaArrowAltCircleRight></FaArrowAltCircleRight>
      </div>
    </div>
    <div className="d-flex icons1">
         <div>
            <IoPhonePortraitOutline />
            <p>Phones</p>
        </div>
            <div>
                <VscVm></VscVm>
                <p>Computers</p>
            </div>
            <div>
                <VscWatch></VscWatch>
                <p>SmartWatches</p>
            </div>
            <div>
                <VscDeviceCamera></VscDeviceCamera>
                <p>Camera</p>
            </div>
           <div>
                <CiHeadphones />
                <p>Headphons</p>
            </div>
            <div>
                <VscGame />
                <p>Gaming</p>
            </div>

    </div>
        </Container>
    
    )
}
export default Info;