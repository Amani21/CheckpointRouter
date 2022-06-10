import React from 'react'
import ReactStars from 'react-rating-stars-component'
import { useParams } from 'react-router-dom';

function Trailer({movies}) {
    const params= useParams();
    const movie=movies.filter((el)=>el.name == params.name)[0];
  return (
    <div>

<div className="card">
        <img src={movie.posterurl} />

        <div className="descriptions">
            <h1>{movie.name}</h1>
            <p> {movie.description}</p>
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

    </div>
  )
}

export default Trailer