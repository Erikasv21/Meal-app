import React from "react";
import Spinner from "../assets/spinner.gif";
import "../styles/loadingscree.css";

const LoadingScreen = () => {
  return (
    <>
      <div className="loading-container">
        <img src={Spinner} alt="spinner" className="spinner-img" />
      </div>
    </>
  );
};

export default LoadingScreen;
