import React from "react";
import { useDispatch } from "react-redux";
import { setSearch } from "../../redux/slices/SearchSlice";

const Navbar = () => {
  const dispatch = useDispatch();
  return (
    <nav className="flex flex-col lg:flex-row justify-between py-3 mx-6 mb-10">
      <div>
        <h3 className="text-xl font-bold text-gray-600">
          {new Date().toUTCString().slice(0, 16)}
        </h3>
        <h1 className="text-2xl font-bold">Pizza Hut</h1>
      </div>

      {/* search input div */}
      <div>
        <input
          type="text"
          name="search"
          id=""
          autoComplete="off"
          placeholder="Search here"
          onChange={(e) => dispatch(setSearch(e.target.value))}
          className="p-3 border border-gray-400 text-sm w-full lg:w-[25vw] rounded-lg outline-none"
        />
      </div>
    </nav>
  );
};

export default Navbar;
