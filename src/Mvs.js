import { Counter } from './Counter';
import { useState } from 'react';
import Button from '@mui/material/Button';

export function Mvs({ movies }) {
  const [show,setShow] = useState(true)

  const styles = {
    color: movies.rating < 8 ? "crimson" : "green",fontWeight:"bold"
  };
  const summarystyles = {
    display: show ? "block" : "none"
  };


  return (
    <div className="movie-div">
      <h1 className="movie-title"> {movies.title} </h1>
      <img className="movie-picture" src={movies.picture} alt={movies.title} />
      <h3 className="movie-rating" style={styles}> 🌟: {movies.rating} </h3>
      <Button onClick={()=>setShow(!show)} variant="outlined">{show ? "Hide" : "Show"} Description</Button>
      <p style={summarystyles}> {movies.summary} </p>
      <Counter/>

    </div>
  );
}
