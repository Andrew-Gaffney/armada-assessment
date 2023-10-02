import React, {useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import WebFont from 'webfontloader';
import { Oval } from 'react-loader-spinner';


import apiKey from './apiKey.js';

const TitleContainer = styled.div`
    display: flex;
    h2:nth-child(1) {
        font-family: Roboto;
        font-weight: 700;
        font-size: 22px;
        margin-right: 15px;
    }
    h2:nth-child(2) {
        font-family: Roboto;
        font-weight: 400;
        font-size: 22px;
    }

`;

const BackButton = styled.p`
    font-family: Roboto;
    font-size: 18px;
    font-weight: 500;
    cursor: pointer;
`;

const MovieProfileContainer = styled.div`
    position: relative;
    float: none;
    width: 95%;
    margin: 0 auto;
    iframe {
        margin-bottom: 0;
    }
`;

const InfoContainer = styled.div`
    display: flex;
    width: 1280px;
    p {
        font-family: Roboto;
        font-size: 22px;
        font-weight: 500;
    }
`;
const GenreContainer = styled.span`
    border: 1px solid gray;
    padding: 5px;
    font-family: Roboto;
    font-size: 20px;
    margin: 10px;
    text-align: center;
    font-weight: 500;
`;

const GenresContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
`;

const PlotActorContainer = styled.div`
    display: flex;
    flex-direction: column;
    font-family: Roboto;
    margin-left: 25px;
    p {
        margin-bottom: 5px;
        font-size: 22px;
        font-weight: 400;
    }
    p:nth-child(2) {
        margin-top: 15px;
    }
`;

export default function MovieProfile() {
    const navigate = useNavigate();

    const { id } = useParams();
    const [movieData, setMovieData] = useState("");
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        WebFont.load({
            google: {
              families: ['Roboto:100,400,500,700']
            }
        });

        fetch(`https://imdb-api.com/en/API/Title/${apiKey}/${id}/Trailer,Wikipedia,`)
        .then(response => response.json())
        .then(data => {setMovieData(data);setIsLoading(false)});
    }, [id]);

    function handleClickBack() {
        navigate(-1);
    }

    return (
        <>
            {
                isLoading ? <Oval
                    height={80}
                    width={80}
                    color="#4fa94d"
                    wrapperStyle={{}}
                    wrapperClass=""
                    visible={true}
                    ariaLabel='oval-loading'
                    secondaryColor="#4fa94d"
                    strokeWidth={2}
                    strokeWidthSecondary={2}
                />
                :
                <div>
                    <BackButton onClick={handleClickBack}>&lt; BACK</BackButton>
                    <MovieProfileContainer>
                        <TitleContainer>
                            <h2>{movieData.title.toUpperCase()}</h2>
                            <h2>{movieData.year}</h2>
                        </TitleContainer>
                        <iframe
                            title="trailer" 
                            src={movieData.trailer.linkEmbed} width="1280" 
                            height="720" 
                            allowFullScreen="true" 
                            mozallowfullscreen="true" 
                            webkitallowfullscreen="true" 
                        ></iframe>
                        <InfoContainer>
                            <GenresContainer>
                            {
                                movieData.genres.split(",").map(genre => {
                                    return <GenreContainer>{genre}</GenreContainer>
                                })    
                            }
                            </GenresContainer>
                            <PlotActorContainer>
                                <p>{movieData.plot}</p>
                                <p>Starring: {movieData.stars}</p>
                            </PlotActorContainer>
                        </InfoContainer>
                    </MovieProfileContainer>
                </div>
            }
        </>
    );
}