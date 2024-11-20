import { useEffect, useState } from "react"
import { useContext } from "react"
import { Container } from "react-bootstrap"
import Card from "./card"
import { shopContext } from "../Context/shopcontext"
function RelaterItem({category , subcategory}) {
    const { productsale } = useContext(shopContext)
    const [related , setRelated] =useState([])
    useEffect(()=>{
     if(productsale.length > 0){
        let productCopy = productsale.slice()
        productCopy =productCopy.filter((item)=> category === item.category)
        productCopy = productCopy.filter((item) => subcategory === item.subcategory)
        setRelated(productCopy.slice(0,4));
        
     }
    } ,[productsale])
    return(<>
     <Container className="sale">
             <div className="d-flex ">
                 <div className="rect"></div>
                 <p className="rectcontent">Related items</p>
             </div>
           
             <div className=" sale-pr mt-5 related">
                     {related.map((item) => {
                             return (
                                 <Card item={item} key={item.id}/>
                                       )
                     })}
              
             </div>
           
         </Container>

</>)}
export default RelaterItem
