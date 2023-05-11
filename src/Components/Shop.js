import WatchList from "./WatchList";
import NavBar from "./NavBar";
import { Route, Routes } from "react-router-dom"; 
import Cart from "./Cart";
import Admin from "./Admin";
import { useState } from "react";

function Shop(){

    const [addedWatch, setAddedWatch] = useState([]);
    function onAddToCart(watch){
        setAddedWatch([...addedWatch, watch])
    }

    return(
        <div id="mainShop">
            <NavBar />
            <Routes >
            <Route exact path="/" element={<WatchList addToCart={onAddToCart}/>} />
            <Route exact path="/cart" element={<Cart addedWatches={addedWatch}/>} />
            <Route exact path='/admin' element={<Admin />} />
            </Routes>
            
        </div>
    );
}

export default Shop;
