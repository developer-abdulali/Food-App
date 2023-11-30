import React from "react";
import { AiFillStar } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/slices/CartSlice";

const FoodCard = ({ id, name, price, desc, img, rating, handleToast }) => {
  const dispatch = useDispatch();
  return (
    <div className="font-bold w-[250px] bg-white p-5 flex flex-col rounded-lg gap-2">
      <img
        src={img}
        alt="burger pic"
        className="w-auto h-[130px] hover:scale-110 cursor-grab transition-all duration-500 ease-in-out"
      />
      <div className="text-sm flex items-center justify-between">
        <h2>{name}</h2>
        <span className="text-primary">Rs:{price}</span>
      </div>
      <p className="text-sm font-normal">{desc.slice(0, 50)}...</p>
      <div className="flex justify-between">
        <span className="flex items-center justify-center">
          <AiFillStar className="mr-1 text-secondary" />
          {rating}
        </span>
        <button
          onClick={()=> { handleToast(name)
            dispatch(addToCart({ id, name, price, rating, img, qty: 1 })) 
          }}
          
          className="p-1 text-white bg-primary hover:bg-green-600 rounded-lg text-sm"
        >
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default FoodCard;
