import React from "react";

const SingleBlog = ({ blog }) => {
  const { id, title, img, link } = blog;
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure className="px-10 pt-10">
        <img src={img} alt={title} className="rounded-xl" />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{title}</h2>
        <div className="card-actions">
          <a href={link} target="_blank" rel="noopener noreferrer">
            <button className="btn btn-primary">See Detail</button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default SingleBlog;
