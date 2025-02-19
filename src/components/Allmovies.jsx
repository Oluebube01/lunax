import React from 'react'
import { useEffect, useState } from 'react';

const Allmovies = () => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        const fetchMovies = async () => {
            const url = 'https://imdb236.p.rapidapi.com/imdb/most-popular-movies';
            const options = {
                method: 'GET',
                headers: {
                    'x-rapidapi-key': '004d0f3eb6msh3588e8bda95f32ep1b1d2fjsnf9b5534cb340',
                    'x-rapidapi-host': 'imdb236.p.rapidapi.com'
                }
            };
  
            try {
                const response = await fetch(url, options);
                const result = await response.json();
                console.log(result);
                const list = result;
                const movies = list.map((item) => ({
                    name: item.primaryTitle,
                    poster: item.primaryImage,
                    url: item.url
                }));
                setMovies(movies);
            } catch (error) {
                console.error(error);
            }
        };
  
        fetchMovies();
    }, []);
  return (
    <>
    <section>
      <div className="heading">
        <h2 className="heading-title">All Movies</h2>
      </div>
    </section>
    <div className="movie-content">
    <div className="movie-box" id="allmovies"
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(5, 1fr)',
        marginLeft: '20px',
      }}
      >
        {movies.map((movie, index) => (
          <div 
            key={index} 
            className="box"
            style={{
              marginBottom: '20px',
              marginRight: '20px',
            }}
          >
            <img src={movie.poster} alt={movie.name} className='movie-box-img' />
            <div className="box-text" >
              <h2 className="movie-title" style={{
                color: 'Red',
              }}>{movie.name}</h2>
              <a href={movie.url} className="watch-btn play-btn" target='_blank'>
                <box-icon name="right-arrow" color="#f2f3f3" className="bx"></box-icon>
              </a>
            </div>
          </div>
        ))}
      </div> 
    </div>
    </>
  )
}

export default Allmovies