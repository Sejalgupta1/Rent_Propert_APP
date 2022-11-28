import React, { useState } from "react";
import "./Home.css";
import Records from "./record.json";
import Filter from "./Filter";
import "./Filter.css";
function Home() {
  function handleFilterSubmit(e, { city, price, date, property }) {
    e.preventDefault();
    // console.log(filterCity);
    // console.log(filterPrice);
    // console.log(filterProperty);
    // console.log(filterDate);
    setFilterCity(city);
    setFilterDate(date);
    setFilterPrice(price);
    setFilterProperty(property);
  }
  const [filterCity, setFilterCity] = useState("");
  const [filterPrice, setFilterPrice] = useState("");
  const [filterProperty, setFilterProperty] = useState("");
  const [filterDate, setFilterDate] = useState("");

  return (
    <div className="App">
      <Filter
        // setFilterCity={setFilterCity}
        // setFilterProperty={setFilterProperty}
        // setFilterPrice={setFilterPrice}
        // setFilterDate={setFilterDate}
        handleFilterSubmit={handleFilterSubmit}
      />

      <h1 className="top">Search Property for rent</h1>
      <div className="row">
        {filterCity
          ? Records.filter((item) => item.location === filterCity)
              // .filter((item) => item.Available === true)
              // .filter((item) => item.price === filterPrice)
              // .filter((item) => item.PropertyType === filterProperty)
              .map((record) => {
                return (
                  <div className="column" key={record.id}>
                    <img src={record.image} />
                    <strong>Location: {record.location}</strong>
                    <h2>Price: ${record.price}</h2>
                    <button className="add_btn">Add to Favorite </button>
                  </div>
                );
              })
          : Records.map((record) => {
              return (
                <div className="column" key={record.id}>
                  <img src={record.image} />
                  <strong>Location: {record.location}</strong>
                  <h2>Price: ${record.price}</h2>

                  <button className="add_btn">Add to Favorite </button>
                </div>
              );
            })}
      </div>
    </div>
  );
}

export default Home;
