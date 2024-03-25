import React from "react";


const IMG_API = "https://image.tmdb.org/t/p/w1280";

const setVoteClass = (vote) => {
    if (vote >= 7) {
      return 'tag-green';
    } else if (vote >= 4) {
      return 'tag-orange';
    } else {
      return 'tag-red';
    }
  };
  

const Movie = ({ title, poster_path, overview, 
    vote_average }) => (
    <div className="movie">
        <div className="movie-header">
        <img src={IMG_API + poster_path} alt = {title} />
        <div className="movie-info">
            <h3>
                {title}
            </h3>
           <span className={`tag ${setVoteClass(vote_average)}`}>{vote_average}</span>
            

            <div className="movie-over">
                <h2>Overview</h2>
                <p>{overview}</p>

            </div>

        </div>
        

        </div>
        
    </div>
);

export default Movie;