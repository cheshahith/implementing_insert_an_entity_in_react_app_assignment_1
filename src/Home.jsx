import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div>
      <h1>Book Library</h1>
      <button onClick={() => navigate("/add-book")} className="btn btn-primary">
        Add Book
      </button>
      {/* Render list of books here */}
    </div>
  );
};

export default Home;
