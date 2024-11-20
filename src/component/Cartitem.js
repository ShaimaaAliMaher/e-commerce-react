import { useState , useContext } from 'react'
import  './New folder/cart.css'
import { FaMinus, FaPlus, FaRemoveFormat } from 'react-icons/fa'
import { CiCircleRemove } from "react-icons/ci";
import { shopContext } from "../Context/shopcontext";

function CartItem ({item}){
    const {RemoveFromCart } = useContext(shopContext)

    const {id , title , image , price ,amount} =item
    const [number , setNumber] =useState( amount)
    if (number == 0) {
       RemoveFromCart(id);
    }
    return(
        <>
        <tr>
                <td><img className='myimg' src={image}/>{title}</td>
                <td >{price}$</td>
                <td><div className='numcart'>
                    <div onClick={() => setNumber(number - 1)}><FaMinus /></div>
                    <div min="0"> {number}</div>
                    <div onClick={() => setNumber(number + 1)}><FaPlus /></div>
                </div></td>
                <td >{price * number} </td>
                <td> <CiCircleRemove onClick={()=>{RemoveFromCart(id)}}/></td>
        </tr>
        </>
    )
}
export default CartItem