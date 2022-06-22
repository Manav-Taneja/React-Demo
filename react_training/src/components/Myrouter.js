import {BrowserRouter, MemoryRouter, Routes} from 'react-router-dom'
import Login from './Login'
import { Route } from 'react-router-dom'
import Home from './Home'
import Signup from './Signup'
import cakeList from './CakeList'
import Search from './Search'
import PageNotFound from './PageNotFound'
import Navbar from './Navbar'
import Loader from './Loader'
import { useState } from 'react'
import CakeDetails from './CakeDetails'
import Cart from './Cart'
import Checkout from './Checkout'
import Address from './Address'
import Addcakes from './Addcakes'
function Myrouter(){
    const [logedIn,setLogedIn]=useState(false);
    const [logout,setLogOut]=useState(true);
    function logedInFn(){
        console.log("hello")
        setLogedIn(!logedIn);
        setLogOut(!logout)
    }
    return (
        <>
        
        <BrowserRouter>
        <Navbar logedIn={logedIn}></Navbar>
        <Routes>
        <Route path="" element={<Home></Home>}></Route>
        <Route path="signup" element={<Signup></Signup>}></Route>
        <Route path="login" element={<Login logedInFn={logedInFn}></Login>}></Route>
        <Route path="search" element={<Search></Search>}></Route>
        <Route path="*" element={<PageNotFound></PageNotFound>}></Route>
        <Route path="loader" element={<Loader></Loader>}></Route>
        <Route path="details/:cakeid" element={<CakeDetails/>}></Route>
        <Route path="cart" element={<Cart></Cart>}></Route>
        <Route path="checkout" element={<Checkout></Checkout>}>
            <Route path="address" element={<Address></Address>}></Route>
        </Route>
        <Route path="addcakes" element={<Addcakes></Addcakes>}></Route>
        <Route path="edit/:cakeid" element={<Addcakes></Addcakes>}></Route>
        </Routes>
        </BrowserRouter>
        </>
    )
}

export default Myrouter