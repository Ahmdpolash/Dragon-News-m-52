import React from "react";
import Header from "../shared/Header/Header";
import RightSideNav from "../shared/RightSideNav/RightSideNav";
import { useLoaderData, useParams } from "react-router-dom";
import Navbar from "../shared/Navbar/Navbar";

const CardDetails = () => {
    const {id} = useParams()
    console.log(id);
  return (
    <div>
      <Header></Header>
      <Navbar></Navbar>

      <div className="grid grid-cols-1 md:grid-cols-4 ">
        <div className="col-span-3 border">
          <h2 className="font-semibold">Dragon News {id} </h2>
        </div>

        <RightSideNav></RightSideNav>
      </div>
    </div>
  );
};

export default CardDetails;
