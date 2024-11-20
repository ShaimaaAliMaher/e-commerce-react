import { createContext, useState  , useEffect} from "react";
 export const shopContext =createContext ();

let favor =document.getElementById('fav')

const ShopContextProvider =({children})=>{
 
      const [cartItem ,setCartItem]=useState([])
      const [amountcart , setAmountcart] =useState(0)
      const [total , setTotal] =useState(0)
      const [fav, setFav] = useState([])
      const [favcount , setFavcount] = useState(0)
      const [search , setSearch] =useState('')
      const [datasearch , setDatasearch] =useState('')
    const [productsale, setProuductsale] = useState([])
    useEffect(() => {
        fetch('https://fakestoreapi.in/api/products')
            .then((Response) => Response.json())
            .then((response) => setProuductsale(response.products))
            .catch((err) => console.log(err))
    }, [])
    const handelproduct = () => {
        const searchfilter = productsale.filter((x)=>{
          return  x.category === search
        })
        setDatasearch(searchfilter)
    }
    
      useEffect(()=>{
          const total = cartItem.reduce((accumulator, currentItem) => {
              return (accumulator + currentItem.price)
          }, 0); setTotal(total)
      },)
    useEffect(() => {
        if (fav) {
            const countfav = fav.reduce((accumulator, currentItem) => {
                return (accumulator + currentItem.amount)
            }, 0); setFavcount(countfav)
        }
    }, [fav])
      useEffect(()=>{
        if(cartItem){
            const count = cartItem.reduce((accumulator , currentItem)=>{
                return (accumulator + currentItem.amount)
            },0) ;setAmountcart(count)
        } 
      },[cartItem])
    
      const AddToFav =( item ,id)=>{
        const newfav ={...item , amount :1}
        //    console.log(newfav);
        const favitem = fav.find((item)=>{
                return item.id ===id 
         });
       if(favitem){
        const newItemsfav =[...fav].map(item=>{
            if(item.id === id){
                return {...item , amount: favitem.amount+1}
            }else{
                return item
            }
        }); setFav(newItemsfav)
        }else{
            setFav([...fav ,newfav])
        }
       }
    const RemoveFromFav = (id) => {
        const newfav = fav.filter((item) => {
            return item.id !== id
        })
        setFav(newfav)
    }    
      const AddToCart =(item , id)=>{
        const newItems ={...item ,amount:1}
        // console.log(newItems);
        // check if the item is already in the cart
        const itemincart = cartItem.find((item)=>{
            return item.id === id
        })
          // if the item is already in the cart
          if(itemincart){
            const newcart=[...cartItem].map((item)=>{
                if(item.id === id){
                    return{...item ,amount : itemincart.amount +1}
                }else{
                    return item;
                }
            })
            setCartItem(newcart)
          }else{
            setCartItem([...cartItem , newItems])
          }
      } 
      const RemoveFromCart=(id)=>{
        const newcart =cartItem.filter((item)=>{
          return item.id !== id
        })
        setCartItem(newcart)
      }
     const ubdatecart =()=>{
        setCartItem([])
     }
      
   return(
       <shopContext.Provider value={{ search, handelproduct, setSearch,datasearch,productsale, cartItem, AddToCart, RemoveFromCart, ubdatecart, amountcart , total , AddToFav , fav , RemoveFromFav , favcount}} >
            {children}
        </shopContext.Provider>
    )
}
export default ShopContextProvider;



