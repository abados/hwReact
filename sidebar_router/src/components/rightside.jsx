import React from "react";
import "./rightside.css";
import { Link } from "react-router-dom";

export const Rightside = (props) => {
  return (
    <div className="wrapLeft">
      <Link to="/" className="alink"></Link>
      <Link to="/aboutpage" className="alink"></Link>
      <Link to="/contact" className="alink"></Link>
      <Link to="/movies" className="alink"></Link>
      <Link to="/games" className="alink"></Link>
    </div>
  );
};
