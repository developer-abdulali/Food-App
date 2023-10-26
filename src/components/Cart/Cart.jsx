import React from "react";
import { IoMdClose } from "react-icons/io";
import ItemCard from "../ItemCard/ItemCard";

const Cart = () => {
  return (
    <div className="bg-white fixed top-0 right-0 p-5 w-full h-full lg:w-[20vw]">
      <div className="flex justify-between items-center my-2">
        <span className="text-xl font-bold text-gray-800">My Orders</span>
        <IoMdClose className="border-2 border-gray-600 text-gray-600 font-bold p-1 text-xl rounded-md hover:text-red-300 hover:border-red-300 cursor-pointer" />
      </div>
      <ItemCard />
      <ItemCard />
      <ItemCard />
      <ItemCard />
      <ItemCard />
      <div className="absolute bottom-0">
        <h3 className="font-bold text-gray-800">Items : </h3>
        <h3 className="font-bold text-gray-800">Total Amount : </h3>
        <hr className="my-2 w-[90vw] lg:w-[18vw]" />
        <button className="bg-green-500 font-bold px-3 text-white py-2 rounded-lg w-[90vw] lg:w-[18vw] mb-2">
          Checkout
        </button>
      </div>
    </div>
  );
};

export default Cart;
