import React from "react";
import FoodCard from "../FoodCard/FoodCard";
import FoodData from "../../Data/FoodData";
import toast, { Toaster } from "react-hot-toast";
import { useSelector } from "react-redux";

const FoodItems = () => {
  const handleToast = (name) => toast.success(`Added ${name} to cart`);
  const category = useSelector((state) => state.category.category);
  const search = useSelector((state) => state.search.search);
  console.log(search);
  return (
    <>
      <Toaster position="top-center" reverseOrder="false" />
      <div className="flex flex-wrap gap-10 justify-center lg:justify-start mx-6 my-10">
        {/*filtering and maping all food data */}
        {FoodData.filter((food) => {
          if (category === "All") {
            return food.name
              .toLocaleLowerCase()
              .includes(search.toLocaleLowerCase());
          } else {
            return (
              category === food.category &&
              food.name.toLocaleLowerCase().includes(search.toLocaleLowerCase())
            );
          }
        }).map((food) => (
          <FoodCard
            key={food.id}
            id={food.id}
            name={food.name}
            price={food.price}
            img={food.img}
            rating={food.rating}
            desc={food.desc}
            handleToast={handleToast}
          />
        ))}
      </div>
    </>
  );
};

export default FoodItems;
