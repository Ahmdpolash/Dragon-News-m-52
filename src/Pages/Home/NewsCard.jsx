import React from "react";
import { Link } from "react-router-dom";

const NewsCard = ({ news }) => {
  const { name,details, title,_id, published_date, img, image_url,thumbnail_url } = news || {};
  return (
    <div>
      <div className="card card-compact  bg-base-100 shadow-md mb-16">
        <figure>
          <img
            src={image_url}
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
        
        {
            details.length > 200 ? 
            <p>{details.slice(0,200)} <Link to={`/news/${_id}`} className="text-blue-600 font-bold underline">Read More</Link> </p>:
            <p>{details}</p>
        }
         
        </div>
      </div>

    </div>
  );
};

export default NewsCard;
