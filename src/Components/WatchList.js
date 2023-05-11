import React, { useEffect, useState } from "react";
import WatchItem from "./WatchItem";
import Manufacturers from "./Manufacturers";

function WatchList({addToCart}) {
  const [watchData, setWatchData] = useState([]);
  const [selectedManufacturer, setSelectedManufacturer] = useState(null);

  function handleSelectedManufacturer(manufacturer) {
    setSelectedManufacturer(manufacturer);
  }

  const filteredWatches = selectedManufacturer
    ? watchData.filter((watch) => watch.manufacturer === selectedManufacturer)
    : watchData;

  useEffect(() => {
    fetch("https://prestige-time-pieces.onrender.com/watches")
      .then((resp) => resp.json())
      .then((data) => setWatchData(data))
      .catch((err) => console.error(err));
  }, []);

  function cartFn(watch){
    addToCart(watch)
  }

  return (
    <section id="shoppingSection">
      <header id="shopHeader">
        <h2>Prestige Time Pieces</h2>
        <h4>Crafted to Perfection, Timelessly Elegant</h4>
      </header>
      <div id="Manufacturers">
        <Manufacturers watchData={watchData} onManufacturerSelect={handleSelectedManufacturer} />
      </div>
      <div id="WatchList">
        {filteredWatches.map((watch) => {
          return <WatchItem watch={watch} key={watch.id} cf={cartFn}/>;
        })}
      </div>
      
    </section>
  );
}

export default WatchList;
