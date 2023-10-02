import React, {useState, useEffect} from 'react';

import MostPopularRow from './MostPopularRow';

export default function MostPopular({moviesData}) {
    const [mostPopularMovies, setMostPopularMovies] = useState("");
    useEffect(() => {
        setMostPopularMovies(moviesData);
    }, [moviesData]);

    return (
        <>
        {
            mostPopularMovies && mostPopularMovies.map((movie => {
                return (
                <li style={{listStyle: "none"}} key={movie.rank}>
                    <MostPopularRow
                        id={movie.id} 
                        title={movie.title}
                        year={movie.year}
                        rating={movie.imDbRating}
                        rank={movie.rank}
                        image={movie.image} 
                    />
                <hr style={{borderTop: "3px solid #bbb"}} />
                </li>
                );
            }))
        }
        </>
    );
}