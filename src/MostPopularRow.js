import React from 'react';
import {useNavigate} from 'react-router-dom';
import styled from 'styled-components';

const RowContainer = styled.div`
    display: flex;
    height: 15%;
    margin-bottom: 10px;
    width: 90%;
`;

const ImageContainer = styled.img`
    object-fit: cover;
    width: 384px;
    height: 216px;
`;

const TitleYearContainer = styled.div`
    display: flex;
    flex-direction: column;
    font-family: Roboto;
    flex-basis: 20%;
    justify-content: center;
    margin: 0 5% 0 5%;
    h2 {
        cursor: pointer;
        font-size: 30px;
        font-weight: 900;
        margin: 0 0 10px 0;
    }
    h3 {
        margin: 0;
        font-weight: 400;
        font-size: 30px;
    }
`;

const RatingContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
    font-family: Roboto;
    flex-basis: 15%;
    font-size: 16px;
    h2 {
        margin: 3px;
    }
`;

const RatingSubContainer = styled.div`
    display: flex;
    justify-content: flex-start;
    img {
        margin: 3px 10px 0 0;
    }
    h2 {
        font-size: 30px;
    }
`;

const RankContainer = styled.div`
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
    font-family: Roboto;
    margin: 0 5% 0 5%;
    flex-basis: 15%;
    h2:nth-child(1) { 
        margin: 3px;
        padding: 0px;
    }
    h2:nth-child(2) {
        margin: 3px;
        padding: 0px;
        font-size: 30px;
    }
`;


export default function MostPopularRow({id, title, year, rating, rank, image}) {
    const navigate = useNavigate();
    function handleTitleClick() {
        navigate(`/movie/${id}`)
    }
    return (
        <RowContainer key={rank}>
            <ImageContainer src={image} />
                <TitleYearContainer>
                    <h2 onClick={handleTitleClick}>{title.toUpperCase()}</h2>
                    <h3>{year}</h3>
                </TitleYearContainer>
                <RatingContainer>
                    <h2>IMDb RATING</h2>
                    <RatingSubContainer>
                        <img src="/images/star.png" height="33px" width="33px" alt=""/>
                        <h2>{rating ? `${parseFloat(rating).toPrecision(2)} / 10` : `Not yet rated`}</h2>
                    </RatingSubContainer>
                </RatingContainer>
                <RankContainer>
                    <h2>Rank</h2>
                    <h2>{rank}</h2>
                </RankContainer>
        </RowContainer>
    );
}