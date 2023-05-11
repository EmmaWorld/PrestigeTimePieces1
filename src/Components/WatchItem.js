import React from "react";

function WatchItem({watch, cf}){

    function handleCart(watch){
        cf(watch)
    }

    return (
        <div key={watch.id} className="watch-container">
            <section className="watch-image">
                <img src={watch.image} alt="Luxury watch pic" className="watch-image-img" />
            </section>
            <section className="watch-description">
                <h3>{watch.name}</h3>
                <p>
                    Description: {watch.description} <br />
                    price: ${watch.price} <br />
                    Quantity: {watch.quantity} <br />
                    Rating: {watch.rating} <br />
                </p>
                <button className="add-to-cart-btn" onClick={()=>handleCart(watch)}>Add to Cart</button>
            </section>
        </div>
    );
}

export default WatchItem;
