import React, { useState } from "react";
import { IoMdClose } from "react-icons/io";
import ItemCard from "../ItemCard/ItemCard";
import { useSelector } from "react-redux";
import { FaShoppingCart } from "react-icons/fa";

const Cart = () => {
  const [activeCart, setActiveCart] = useState(true);
  const cartItems = useSelector((state) => state.cart.cart);
  return (
    <>
      <div
        className={`bg-white fixed top-0 right-0 p-5 w-full h-full lg:w-[20vw] transition-all duration-500 z-50 ${
          activeCart ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center my-2">
          <span className="text-xl font-bold text-gray-800">My Orders</span>
          <IoMdClose
            onClick={() => setActiveCart(!activeCart)}
            className="border-2 border-gray-600 text-gray-600 font-bold p-1 text-xl rounded-md hover:text-red-300 hover:border-red-300 cursor-pointer"
          />
        </div>
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
      <FaShoppingCart
        onClick={() => setActiveCart(!activeCart)}
        className="rounded-full bg-white text-5xl shadow-md p-3 fixed bottom-4 right-4 cursor-pointer"
      />
    </>
  );
};

export default Cart;
