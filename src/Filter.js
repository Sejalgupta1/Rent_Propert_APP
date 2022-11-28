import React, { useState } from "react";
import "./Filter.css";

function Filter(props) {
  const {
    // setFilterCity,
    // setFilterProperty,
    // setFilterPrice,
    // setFilterDate,
    handleFilterSubmit
  } = props;
  const [city, setCity] = useState("");
  const [date, setDate] = useState("");
  const [property, setProperty] = useState("");
  const [price, setPrice] = useState("");
  function handleSubmit(e) {
    handleFilterSubmit(e, { city, price, date, property });
  }

  return (
    <>
      <form className="filterContainer">
        <div className="filterBox">
          <label className="date" htmlFor="filterLocation">
            Location:
          </label>
          <select
            name="filterLocation"
            className="filterValue"
            id="filterLocation"
            onChange={(e) => setCity(e.target.value)}
          >
            <option value="">Select</option>
            <option value="Mumbai">Mumbai</option>
            <option value="Noida">Noida</option>
            <option value="Hyderabad">Hyderabad</option>
            <option value="Delhi">Delhi</option>
            <option value="Goa">Goa</option>
            <option value="Pune">Pune</option>
          </select>
        </div>
        <div className="filterBox">
          <label className="date" htmlFor="filterDate">
            Date:
          </label>
          <input
            type="date"
            name="filterDate"
            className="dated"
            id="filterDate"
            onChange={(e) => setDate(e.target.value)}
          />
        </div>
        <div className="filterBox">
          <label className="date" htmlFor="filterPrice">
            Price
          </label>
          <select
            name="filterPrice"
            className="filterValue"
            id="filterPrice"
            onChange={(e) => setPrice(e.target.value)}
          >
            <option value="">Select Price:</option>
            <option value="52000">52000</option>
            <option value="57000">57000</option>
            <option value="65000">65000</option>
            <option value="25000">25000</option>
            <option value="50000">50000</option>
            <option value="51000">51000</option>
          </select>
        </div>
        <div className="filterBox">
          <label className="date" htmlFor="filterPropType">
            Property Type:
          </label>
          <select
            name="filterPrice"
            className="filterValue"
            id="filterPropType"
            onChange={(e) => setProperty(e.target.value)}
          >
            <option value="House">House</option>
            <option value="Flat">Flats</option>
          </select>
        </div>
        <div className="filterBox">
          <button id="filterBtn" onClick={(e) => handleSubmit(e)}>
            Submit
          </button>
        </div>
      </form>
    </>
  );
}

export default Filter;
