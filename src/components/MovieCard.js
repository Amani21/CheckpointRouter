import React from 'react';
import '../App.css';
import ReactStars from "react-rating-stars-component";
import { Link } from 'react-router-dom';


function MovieCard({movie}) {
  return (
    
      <div className="wrapper">
      <Link to={`/trailer/${movie.name}`}>
        <div className="card">
        <img src={movie.posterurl} />

        <div className="descriptions">
            <h1>{movie.name}</h1>
            <p>{movie.description}            </p>
            <ReactStars
  
    count={5}
     value={movie.rating}
    size={24}
    activeColor="#ffd700"
    edit={false}
  />,
          
            <button>
              <i className="fab fa-youtube" />
              Play trailer on YouTube
            </button>
          </div>
        </div>
        </Link>
          </div>



  )
}

export default MovieCard