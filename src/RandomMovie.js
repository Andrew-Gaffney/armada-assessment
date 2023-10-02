import React, {useState,useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const RandomButton = styled.button`
    font-family: Roboto;
    background-color: #00B2FF;
    color: white;
    font-weight: bold;
    border: none;
    padding: 8px;
    cursor: pointer;
    margin-left: 20px;
`;

const TitleContainer = styled.div`
    font-weight: 100;
    display: flex;
    flex-direction: row;
    margin-bottom: 0px;
    padding-bottom: 0px;
    width: 35vw;
    h3:nth-child(1) {
        font-family: Roboto;
        font-weight: 700;
        font-size: 22px;
        margin-right: 20px;
    }
    h3:nth-child(2) {
        font-family: Roboto;
        font-weight: 400;
        font-size: 22px;
    }
`;

const StyledImage = styled.img`
    max-width: 95vw;
    max-width: 50vh;
    cursor: pointer;
    object-fit: cover;
`;

const MovieContainer = styled.div`
    margin-left: 20px;
`

export default function RandomMovie({moviesData, movie}) {
    const navigate = useNavigate();
    const [randomMovie, setRandomMovie] = useState(movie);
    function handleClickImage() {
        navigate(`/movie/${movie.id}`)
    }
    useEffect(() => {
        setRandomMovie(movie);
    }, [movie]);
    function handleClickRandomMovie() {
        setRandomMovie(moviesData[Math.floor(Math.random() * (100 - 1) + 1)]);
    }
    return (
        <>
            <RandomButton onClick={handleClickRandomMovie}>PICK A RANDOM MOVIE</RandomButton>
            <MovieContainer>
                {randomMovie && <TitleContainer>
                    <h3>{randomMovie.title.toUpperCase()}</h3>
                    <h3>{randomMovie.year}</h3>
                </TitleContainer>}
                <StyledImage onClick={handleClickImage} src={randomMovie.image} />
            </MovieContainer>
            </>
    );
}