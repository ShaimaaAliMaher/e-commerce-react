import { shopContext } from "../Context/shopcontext";
import '../component/New folder/Detail.css'

import { useContext } from "react";
import { Link , useNavigate } from "react-router-dom";
import { FaHeart, FaStar } from "react-icons/fa";
import '../component/New folder/style-prouduct.css';
import LinesEllipsis from 'react-lines-ellipsis';
import { CiRead } from "react-icons/ci";

function Card({item}) {
    const { AddToCart ,AddToFav } = useContext(shopContext)
    const navigate = useNavigate()
    return (
        <>
            <div key={item.id} className="item">
                <div className="itemimg">
                    <Link to={`/product/${item.id}`} className="linkimg" >
                        <img src={item.image} alt="image" /> </Link>
                    <div className="icons">
                        <FaHeart style={{ color: `${item.liked === true ? "red" : "black"}` }} id="fav" 
                        onClick={() => {
                            if (localStorage.getItem('fname')) {
                                AddToFav(item, item.id);
                                item.liked = true;
                            }
                            else {
                                navigate('/register')
                            }
                        }} />
                        <Link to={`/product/${item.id}`}> <CiRead/></Link>

                    </div>
                </div>
                <div className="content">
                    <LinesEllipsis className="title" text={item.title} maxLine='1' trimRight basedOn='letters' />
                    <p>${item.price}</p>
                    <FaStar /><FaStar /> <FaStar /><FaStar /><FaStar /> <span>({ 20 + item.price})</span>
                </div>
                {item.discount ? <> <div className="discount">-{item.discount}%</div> </> : <> <div className="discount new">new</div></>}
                <div className="add" onClick={() => {
                    if (localStorage.getItem('fname')) {
                        AddToCart(item, item.id)
                    } else {
                        navigate('/register')
                    }
                }}>Add To Cart</div>

            </div>
        </>
    )
}
export default Card









