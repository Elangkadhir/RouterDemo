import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const handleClick = (route) => {
    navigate(route);
  };


  return (
    <>
      <div ><button onClick={ () => handleClick("/exit")}>Exit</button></div>

      <div ><button onClick={() => navigate("/about")}>About</button></div>
    </>
  );
};

export default Home;
