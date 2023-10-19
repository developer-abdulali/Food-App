import React from "react";
import Navbar from "../components/Navbar/Navbar";
import CategoryMenu from "../components/CategoryMenu/CategoryMenu";
import FoodItems from "../components/FoodItems/FoodItems";

const Home = () => {
  return (
    <div>
      <Navbar />
      <CategoryMenu />
      <FoodItems />
    </div>
  );
};

export default Home;
