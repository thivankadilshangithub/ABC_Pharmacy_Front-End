import React from "react";
import "../App.css";

const Home = () => {
  return (
    <div>
      <div className="container">
        <div className="cover">
          <h1 
          style={{marginBottom:"1.5rem",fontFamily:"'Montserrat', sans-serif;",fontSize:"2.2rem"}}>
            Welcome to the ABC Service !</h1>
          <form className="flex-form">
            <label htmlFor="from">
              <i className="ion-location"></i>
            </label>
            <input type="search" placeholder="Find Items here ..." />
            <input type="submit" value="Search" />
          </form>
        </div>
      </div> 
    </div>   
  );
};

export default Home;
