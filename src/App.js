import { BrowserRouter , Routes , Route, useNavigate } from 'react-router-dom';
import NavScrollExample from './component/navbar';
import Home from './pages/Home'
import Footer from './component/footer';
import Register from './pages/register';
import Login from './pages/login';
import ALLproducts from './pages/Allproduct';
import Detail from './pages/productDetail';
import Error from './pages/error';
import Contact from './pages/Contact';
import About from './pages/About';
import ShopContextProvider from './Context/shopcontext';
import Cart from './pages/cart';
import WishList from './pages/WishList';
import Checkout from './pages/checkout';
import Account from './pages/Account';
 function App() {
 
  return (
    <div className="App">
      <ShopContextProvider>
     <BrowserRouter>
     <NavScrollExample   />
     <Routes>
      <Route path='/contact' element={<Contact />} />
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='product/:productId' element={<Detail />} />
      <Route path='/allproducts' element={<ALLproducts />} />
      <Route path='/register' element={<Register />} />
      <Route path='/login' element={<Login />} />
      <Route path='/cart' element={<Cart/>} />
      <Route path='/wishlist' element={<WishList />} />
      <Route path='/chekout' element={<Checkout />} />
      <Route path='/account' element={<Account />} />
      <Route path= '*' element={<Error />} />
     </Routes >
     <Footer/>
     </BrowserRouter>
      </ShopContextProvider>
    </div>
  );
}

export default App;
