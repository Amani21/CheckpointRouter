import React from 'react'
import MovieCard from './MovieCard'

function MovieList({movies}) {
  console.log(movies)
  return (
    <div style={{display: 'flex', flexDirection:'row', flexWrap:"wrap", justifyContent:'space-between', marginTop:"60px"}}>

   {movies.map((el)=> <MovieCard movie={el} />)}




    </div>
  )
}

export default MovieList
