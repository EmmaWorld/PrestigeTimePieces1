import React, { useEffect, useState } from "react";

function Admin(){
    const [watchData, setWatchData] = useState([]);
    const [optionWatch, setSelectedWatch] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3000/watches")
          .then((resp) => resp.json())
          .then((data) => {
            setWatchData(data)
            setSelectedWatch(data[0])
          })
          .catch((err) => console.error(err));
      }, []);

      const options = watchData.map((watch) => {
        return (<option value={watch.id} key={watch.id}>
          {watch.name}
        </option>);
      });
      function handleWatchSelect(e) {
        const watchId = e.target.value;
        const selectedWatch = watchData.find((watch) => watch.id === watchId);
        setSelectedWatch(selectedWatch);
    }


      const [formData, setFormData] = useState([{
        name: "",
        image: "",
        description: "",
        price: 0,
        manufacturer: "",
        quantity: 0,
        rating: '',
      }]);
      function handleInputChange(e){
        setFormData([{...formData, [e.target.name]:e.target.value}])
      }
      function handleSubmit(e){
        e.preventDefault();
        fetch("https://prestige-time-pieces.onrender.com/watches", {
            method: "POST",
            headers: {
            "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
        })
      .then((response) => response.json())
      .then((data) => {
        setWatchData([...watchData, data]);
        setFormData([{
          name: "",
          image: "",
          description: "",
          price: 0,
          manufacturer: "",
          quantity: 0,
          rating: 0,
        }]);
      })
      .catch((error) => console.error(error));
      }

      function handleEditChange(e) {
        const { name, value } = e.target;
        setSelectedWatch((prevWatch) => ({ ...prevWatch, [name]: value }));
      }
      function handleEditProduct(e) {
        e.preventDefault();
        fetch(`https://prestige-time-pieces.onrender.com/watches/${optionWatch.id}`, {
          method: "PATCH",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(optionWatch),
        })
          .then((resp) => resp.json())
          .then((updatedWatch) => {
            const updatedWatchData = watchData.map((watch) =>
              watch.id === updatedWatch.id ? updatedWatch : watch
            );
            setWatchData(updatedWatchData);
            setSelectedWatch(updatedWatch);
          })
          .catch((err) => console.error(err));
      }
      
      function handleDelete(e){
        e.preventDefault()
        fetch(`https://prestige-time-pieces.onrender.com/watches/${optionWatch.id}`, {method: "DELETE"})
        .then(resp=>resp.json()).then(alert(`${optionWatch.name} has been deleted`))
        .catch(err=>alert(err))
      } 

      return(
        <section id="forms-section">
        <div id="addWatchForm-div">
            <form onSubmit={handleSubmit}>
                <h3>Add Watch Form</h3>
                <label htmlFor="watchName">Watch Name</label>
                <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Enter watch name"
                />
                <label htmlFor="watchImage">Watch Image</label>
                <input
                    type="text"
                    name="image"
                    value={formData.image}
                    onChange={handleInputChange}
                    placeholder="Enter image URL"
                />
                <label htmlFor="watchDescription">Watch Description</label>
                <input
                    type="text"
                    name="description"
                    value={formData.description}
                    onChange={handleInputChange}
                    placeholder="Enter watch description"
                />
                <label htmlFor="watchPrice">Watch Price</label>
                <input
                    type="number"
                    name="price"
                    value={formData.price}
                    onChange={handleInputChange}
                    placeholder="Enter watch price"
                />
                <label htmlFor="watchManufacturer">Watch Manufacturer</label>
                <input
                    type="text"
                    name="manufacturer"
                    value={formData.manufacturer}
                    onChange={handleInputChange}
                    placeholder="Enter watch manufacturer"
                />
                <label htmlFor="watchQuantity">Watch Quantity</label>
                <input 
                    type="number"
                    name="quantity"
                    value={formData.quantity}
                    onChange={handleInputChange}
                    placeholder="Enter quantity in stock"
                />
                <label htmlFor="watchRating">Watch Rating</label>
                <input 
                type="text"
                name="rating"
                value={formData.rating}
                onChange={handleInputChange}
                placeholder="Enter watch rating"
                />
                <button type="submit">Add Product</button>
            </form>
        </div>
        <div id="editWatchForm-div">
          <form id="edit-watch-form" onSubmit={handleEditProduct}>
            <h3>Edit watch form</h3>
            <select
              name="selectedWatchName"
              value={optionWatch.id}
              onChange={handleWatchSelect}
            >
            <option value="" disabled>
            Select a watch to edit
            </option>
            {options}
            </select>
            <label htmlFor="watchImage">Watch image</label>
            <input 
              type="text"
              name="watchImage"
              value={optionWatch.image}
              onChange={handleEditChange}
              />
              <label htmlFor="watchDescription">Watch description</label>
              <input 
                type="text"
                name="watchDescription"
                value={optionWatch.description}
                onChange={handleEditChange}
              />
              <label htmlFor="watchPrice">Watch price</label>
              <input 
              type="number"
              name="watchPrice"
              value={optionWatch.price}
              onChange={handleEditChange}
              />
              <label htmlFor="watchManufacturer">Watch manufacturer</label>
              <input
                type="text"
                name="watchManufacturer"
                value={optionWatch.manufacturer}
                onChange={handleEditChange}
              />
              <label htmlFor="watchQuantity">Watch quantity</label>
              <input 
                type="number"
                name="watchQuantity"
                value={optionWatch.quantity}
                onChange={handleEditChange}
              />
              <label htmlFor="watchRating">Watch rating</label>
              <input 
                type="text"
                name="watchRating"
                value={optionWatch.rating}
                onChange={handleEditChange}
              />
              <button type="submit">Confirm edit</button>
          </form>
        </div>
        <div id="deleteWatchForm-div">
            <form onSubmit={handleDelete}>
              <h3>Delete watch form</h3>
              <select
                name="selectedWatchName"
                value={optionWatch.id}
                onChange={handleWatchSelect}
              >
              <option value="" disabled>
              Select a watch to delete
              </option>
              {options}
             </select>
              <button type="submit">Delete watch</button>
            </form>
        </div>
        </section>
        
      );
}

export default Admin; 