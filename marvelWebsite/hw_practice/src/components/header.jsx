import React from "react";

export const Header = ({ imageUrl, title, description }) => {
  return (
    <>
      <header>
        <img className="image-main" src={imageUrl} alt="" />
        <h1 className="header-main">Lorem ipsum dolor sit</h1>
      </header>
      <main className="header-main">
        <h2>{title}</h2>
        <p>{description}</p>
      </main>
    </>
  );
};
