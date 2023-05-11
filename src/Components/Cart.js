import React, { useEffect, useState} from "react";

function Cart({addedWatches}){

    let [count, setCount] = useState(1)

    function handleCount(e){
        if(e.target.textContent === "+"){
            setCount(count+=1);
        }else{
            if(count>0){
            setCount(count-=1)
            }
        }
    }

    let [subtotal, setSubtotal] = useState(0)

    useEffect(() => {
        let newSubtotal = 0;
        addedWatches.forEach((watch) => {
          newSubtotal += watch.price * count;
        });
        setSubtotal(newSubtotal);
      }, [addedWatches, count]);

      function handleCheckout(){
        alert('Thank you for your purchase')
      }

    return (
        <div id="cart-div">
            <div id="cart-list">
                <h3 id="cartHeader">Shopping Cart</h3>
                {addedWatches.map((watch)=>{
                    return (<div className="cart-item" key={watch.id}>
                        <section className="cart-image">
                            <img src={watch.image} alt="cart item" />
                        </section>
                        <p className="cart-details">
                            {watch.name} <br />
                            {watch.price} <br />
                        </p>
                        <button onClick={handleCount}>-</button>{count} <button onClick={handleCount}>+</button>
                    </div>);
                })}
            </div>
            <section id="subtotals-div">
                <h3> Subtotal : {subtotal}</h3>
            </section>
            <section id="checkout">
                <button onClick={handleCheckout}>Checkout</button>
            </section>
        </div>
    );

}

export default Cart;