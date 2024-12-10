import React from 'react'
import { FaSearch } from "react-icons/fa";
import { FaRegUserCircle } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import {Link} from "react-router-dom"
const Navbar = () => {
  return (
    <header className="h-16 shadow-md bg-white">
      <div className="h-full container mx-auto flex items-center px-4 justify-between">
        <Link to="/">
          <div className=" cursor-pointer">Logo</div>
        </Link>
        <div className="hidden lg:flex items-center w-full justify-between max-w-sm border rounded-full focus-within:shadow pl-2">
          <input
            className="w-full outline-none"
            type="text"
            placeholder="Search Product"
          />
          <div className="text-lg w-13  min-w-[50px] h-8 bg-yellow-600 flex items-center justify-center rounded-r-full ">
            <FaSearch />
          </div>
        </div>
        <div className="flex items-center gap-5">
          <div className="text-2xl cursor-pointer">
            <FaRegUserCircle />
          </div>
          <div className="text-xl relative">
            <span>
              <FaShoppingCart />
            </span>
            <div className="bg-red-300 text-white h-4 w-4 p-1 flex items-center justify-center rounded-full absolute  -top-2 left-3">
              <p className="text-sm">0</p>
            </div>
          </div>
          <div>
            <Link to='/login' className="bg-yellow-600 px-3 py-1 rounded-full text-white hover:bg-yellow-700">
              Login
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar