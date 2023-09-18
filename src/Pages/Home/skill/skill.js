import React from "react";
import style from "./style.module.css";

const Skill = ({ skill }) => {
  const { id, title, img, desc, rating } = skill;

  return (
    <div className="card w-auto bg-base-100 shadow-xl h-auto transition-transform transform hover:scale-110 cursor-pointer">
      <figure className="px-10 pt-10">
        <div className="avatar">
          <div className="w-36 rounded-full">
            <img src={img} alt={title} />
          </div>
        </div>
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{title}</h2>
        <p>{desc}</p>
        <div className="card-actions">
          <button className="btn btn-primary">Rating: {rating}</button>
        </div>
      </div>
    </div>
  );
};

export default Skill;
