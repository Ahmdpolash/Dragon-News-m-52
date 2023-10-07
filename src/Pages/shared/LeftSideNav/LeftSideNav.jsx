import React, { useEffect, useState } from "react";
import {  NavLink } from "react-router-dom";
import './left.css'
import LeftCard from "./LeftCard";

const LeftSideNav = () => {
  const [categories, setCategory] = useState([]);

  useEffect(() => {
    fetch("categories.json")
      .then((res) => res.json())
      .then((data) => setCategory(data));
  }, []);

  return (
    <div className="p-4">
      <h2 className="text-2xl font-semibold">All Category </h2>
      <h2 className="text-lg font-semibold text-center my-3 bg-[#E7E7E7] py-2 text-[#403F3F] rounded-md">National News </h2>

      {
        categories.map(category => 
            <NavLink
              key={category.id}
    
              className="block py-3 active text-[#9F9F9F] text-[18px]"
    
              to={`/category/${category.id}`}
    
            >
              {category.name}
            
            </NavLink>
          )
      }

      <div>
        <LeftCard></LeftCard>
      </div>
    </div>
  );
};

export default LeftSideNav;
