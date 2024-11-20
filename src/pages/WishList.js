import { Container } from "react-bootstrap";
import LinesEllipsis from 'react-lines-ellipsis';
import { shopContext } from "../Context/shopcontext";
import { useContext } from "react";
import { HiArchiveBox } from "react-icons/hi2";
import '../component/New folder/cart.css'
import JustForYou from "../component/justfor you";
function WishList (){
  const { fav, AddToCart, RemoveFromFav ,favcount } = useContext(shopContext)
    return(
        <Container className="wishlist">
          <p> WishList</p>
          {favcount? <>
          <div className="wish">
            {fav.map(item => {
              let id = item.id
              function found() {
                if (item.discount) {
                  return (<div className="discount">-{item.discount}%</div>)
                } else {
                  return (<div className="discount new">new</div>)
                }
              }
              return (
                <div className="itemw">
                  <div className="img">
                    <img src={item.image} alt="p" />
                    <HiArchiveBox onClick={() => { RemoveFromFav(id) }} />
                    <div className="add" onClick={() => { AddToCart(item, item.id) }}>Add To Cart</div>
                    {found()}
                  </div>
                  <div className="content">
                    <LinesEllipsis className="title" text={item.title} maxLine='1' trimRight basedOn='letters' />
                    <p>${item.price}</p>
                  </div>
                </div>
              )
            })}
          </div>
          </> :<>
          <h2 className="empty">you don't choose any product in your WishList</h2>
          </>}
          

          <div>
            <JustForYou/>
            </div>
           

        </Container>
    )
}
export default WishList