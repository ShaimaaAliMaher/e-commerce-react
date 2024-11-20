import React from "react";
import Hero from "../component/Hero";
import Info from "../component/info";
import Enhance from "../component/Enhance";
import Arrival from "../component/Arrival";
import End from '../component/end';
import Fetchsale from "../component/fetch-sale";
import Bestselling from "../component/Bestselling";
import Ourprouducts from "../component/ourprouduct";

 function Home(){
    return(<>
        <Hero/>
         <Fetchsale/>
        <Info/>
        <Bestselling/>
        <Enhance/>
        <Ourprouducts/>
        <Arrival/>
        <End/> 
        </>
    )
}
export default Home;