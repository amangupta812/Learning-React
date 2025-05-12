import React from "react";
import FoodItems from "./components/FoodItems";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import ErrorMessage from "./components/ErrorMessage";

function App() {
  
  // let foodItems = [];
  let foodItems = ["Dal", "Green Vegitables", "Roti", "Salad", "Milk","Ghee"];

  return (
    <>
      <h1 className="food-heading">Healthy Food</h1>
      <ErrorMessage items={foodItems}></ErrorMessage>
      <FoodItems items={foodItems}></FoodItems>
    </>
  );
}

export default App;
