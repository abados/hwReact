import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import CallIcon from "@mui/icons-material/Call";
import MovieCreationIcon from "@mui/icons-material/MovieCreation";
import SmartToyIcon from "@mui/icons-material/SmartToy";
import "./sidebar.css";
import { Link } from "react-router-dom";

export const Sidebar = (props) => {
  return (
    <div className="wrap">
      <div className="sub-container">
        <Link to="/" className="alink">
          <span className="Line">
            <HomeIcon className="icon"></HomeIcon>
            <span className="section-name">Home</span>
          </span>
        </Link>

        <Link to="/aboutpage" className="alink">
          <span className="Line">
            <InfoIcon className="icon"></InfoIcon>
            <span className="section-name">About</span>
          </span>
        </Link>
        <Link to="/contact" className="alink">
          <span className="Line">
            <CallIcon className="icon"></CallIcon>
            <span className="section-name">Contact Us</span>
          </span>
        </Link>
        <Link to="/movies" className="alink">
          <span className="Line">
            <MovieCreationIcon className="icon"></MovieCreationIcon>
            <span className="section-name">Movies</span>
          </span>
        </Link>
        <Link to="/games" className="alink">
          <span className="Line">
            <SmartToyIcon className="icon"></SmartToyIcon>
            <span className="section-name">Games</span>
          </span>
        </Link>
      </div>
    </div>
  );
};
