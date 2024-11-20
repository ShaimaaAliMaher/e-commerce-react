import { FaHeart, FaSearch, FaShoppingCart, FaStar, FaUser  } from "react-icons/fa";
import { MdOutlineCancel } from "react-icons/md";
import { CiLogout } from "react-icons/ci";
import { BsMailbox } from "react-icons/bs";
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Home from '../pages/Home'
import { Link, useNavigate } from "react-router-dom";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './New folder/style.css'
import { useState , useContext } from "react";
import { shopContext } from "../Context/shopcontext";
function NavScrollExample() {
  const [menue, setMenue] = useState("")
  const [open , setOpen] = useState(false)
  const { amountcart, favcount, search, setSearch, handelproduct } = useContext(shopContext)
  const navigat = useNavigate( )
 function user(){
  if(localStorage.getItem('fname')){
    return(    <span className='count' id="count">{amountcart}</span>)
  }
 }
  function userf() {
    if (localStorage.getItem('fname')) {
      return (<span className='count'>{favcount}</span>)
    }
  }
  function useri(){
    if (localStorage.getItem('fname')) {
      return (<div className="user">
        <FaUser className="usericon" onClick={() => { setOpen(!open) }}></FaUser>
        <div className={`iconcontent ${open ? 'active' : 'inactive'}`}>
          <Link to={'/account'}><p><FaUser />Manage my account</p></Link>
          <Link to={'/cart'}><p><BsMailbox />My order</p></Link>
          <p><MdOutlineCancel />My Cancelations</p>
          <p><FaStar />My reviews</p>
          <Link to={'/'}><p onClick={()=>{localStorage.clear();
           navigat('/');
            window.location.reload()
          }}><CiLogout />Logout</p></Link>
        </div></div>)
    }
  }
  // const [productsale, setProuductsale] = useState([])
  // useEffect(() => {
  //   fetch('https://fakestoreapi.in/api/products')
  //     .then((Response) => Response.json())
  //     .then((response) => setProuductsale(response.products))
  //     .catch((err) => console.log(err))
  // }, [])
  // const handelproduct = () => {
  //   // console.log(search);
  //   const searchfilter = productsale.filter((x) => {
  //     const p = x.category === search
  //     if (p) { console.log(x.title); }
  //      navigat('/allproducts')
  //   })

  // }
  return (
    <Navbar expand="lg">
      <Container >
        <Navbar.Brand href="#" style={{fontSize:26 ,
          width: 200
        }}>Exclusive</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0 "
            style={{ maxHeight: '200px' }}
            navbarScroll
          >
            <Link to="/" onClick={()=>setMenue("Home")} >Home{menue=== "Home"?<hr/> :<></> }</Link>
            <Link to="/contact" onClick={() => setMenue("Contact")}>Contact {menue === "Contact" ? <hr /> : <></>}</Link>
            <Link to="/about" onClick={() => setMenue("About")}>About {menue === "About" ? <hr /> : <></>}</Link>
            <Link to="/register" onClick={() => setMenue("Sign up")} >Sign up {menue === "Sign up" ? <hr /> : <></>}</Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              value={search}
              placeholder="What are you looking for?"
              className="me-2"
              aria-label="Search"
              onChange={(e)=> setSearch(e.target.value)}
             />
            <FaSearch onClick={()=> {
              navigat('/allproducts')
              handelproduct()}}></FaSearch>
          </Form>
          <div style={{position:'relative'}}>
            <Link to="/wishlist">
              <FaHeart ></FaHeart>
              {userf()}
              </Link></div>
            <div style={{position:'relative'}}>
            <Link to="/cart">
              <FaShoppingCart ></FaShoppingCart>
              {user()}
              </Link></div>
         {useri()}
             
        </Navbar.Collapse>
      </Container>
    </Navbar>

  );
}

export default NavScrollExample;