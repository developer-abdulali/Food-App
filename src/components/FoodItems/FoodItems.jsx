import React from "react";
import FoodCard from "../FoodCard/FoodCard";
import FoodData from "../../Data/FoodData";

const FoodItems = () => {
  return (
    <div className="flex flex-wrap gap-10 justify-center lg:justify-start mx-6 my-10">
      {/* maping all food data */}
      {FoodData.map((food) => {
        return (
          <FoodCard
            key={food.id}
            id={food.id}
            name={food.name}
            price={food.price}
            img={food.img}
            rating={food.rating}
            desc={food.desc}
          />
        );
      })}
    </div>
  );
};

export default FoodItems;
