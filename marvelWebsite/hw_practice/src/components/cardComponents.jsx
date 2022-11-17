import React from "react";

export const CardComponents = ({ imageUrl, title, description }) => {
  return (
    <li class="list-item-container">
      <img class="list-image" src={imageUrl} alt="" srcset="" />
      <div class="content">
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    </li>
  );
};
