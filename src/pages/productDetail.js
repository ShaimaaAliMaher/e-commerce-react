 import { useNavigate, useParams } from 'react-router-dom';
 import '../component/New folder/Detail.css'
 import {  useEffect, useState , useContext } from 'react';
 import { FaCar, FaHeart, FaMinus, FaPlus, FaStar } from 'react-icons/fa';
 import { IoReturnDownBackOutline } from "react-icons/io5";
 import RelaterItem from '../component/relateditem';
 import { shopContext } from "../Context/shopcontext";

 function Detail() {
    const navigate =useNavigate()
    const api ="https://fakestoreapi.in/api/products";
    const [product , setProduct] = useState({})
//     const [item, setItem] = useState([])
// //     // const [numder , setNumber] = useState(1)
    const params =useParams()
    useEffect(() => {
    fetch(`${api}/${params.productId}`)
        .then((Response) => Response.json())
        .then((response) => setProduct(response.product))
        .catch((err) => console.log(err))
    },[])
   const { AddToCart  , AddToFav } = useContext(shopContext)
  return (     
       <div className='container Details' > 
            Account / {product.category} /{product.title}
           
          <div className='topDetails'>
              <div className='imges'>
                  <div className='mini'>
                      <img src={product.image} alt='img' />
                      <img src={product.image} alt='img' />
                      <img src={product.image} alt='img' />
                      <img src={product.image} alt='img' />
                  </div>
                  <div className='main'>
                      <img src={product.image} alt='img' />
                  </div>
              </div>
               <div className='rightside'>
                  <h3>{product.title}</h3>
                  <FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaStar />
                  <span> (122 Reviwes) |</span>
                  <span className='stok'> in stock</span>
                  <p>{product.describtion}</p> <hr></hr>
                  <div className='sizes'>
                      <h3>sizes</h3>
                      <div > Xs</div>
                      <div> S</div>
                      <div className='active'> M</div>
                      <div> L</div>
                      <div>XL</div>
                  </div>
                  <div className='num'>
                      {/* <div className='numcart'>
                            <div onClick={()=>setNumber(numder-1)}><FaMinus/></div>
                            <div min="0"> {numder}</div>
                            <div onClick={()=>setNumber(numder+1)}><FaPlus/></div>
                        </div> */}
                      <button onClick={() => {
                          if (localStorage.getItem('fname')) {
                              AddToCart(product, product.id)
                          } else {
                              navigate('/register')
                          }
                      }}>Buy Now</button>
                      <FaHeart className='heart' style={{ color: `${product.liked === true ? "red" : "black"}` }} id="fav"
                       onClick={() => {
                           if (localStorage.getItem('fname')){
                          AddToFav(product, product.id);
                          product.liked = true;}
                           else {
                               navigate('/register')
                           }
                      }} />
                  </div>
                  <div className='deliver'>
                      <div><FaCar /></div>
                      <div>
                          <h5>Free Delivery</h5>
                          <p>Enter your postal code for Delivery Availability</p>
                      </div>
                  </div>

                  <div className='deliver'>
                      <div><IoReturnDownBackOutline /></div>
                      <div>
                          <h5>Return Delivery</h5>
                          <p>Free 30 Days Delivery Returns. Details</p>
                      </div>
                  </div>

              </div> 
          </div>
         <RelaterItem category={product.category} subcategory={product.subcategory}/>
        </div>      
   );
 }

 export default Detail;





