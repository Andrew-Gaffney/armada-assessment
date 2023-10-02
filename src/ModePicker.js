import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import { useNavigate, useLocation } from 'react-router-dom';

const PickerContainer = styled.div`
    display: flex;
    flex-direction: row;
    h3 {
        font-family: Roboto;
        font-weight: 400;
        cursor: pointer;
        margin-right: 25px;
    }
`

const underlined = {
    textDecoration: 'underline',
    textDecorationColor: '#00B2FF', 
    textDecorationThickness: "3px", 
    textUnderlineOffset: '5px'
};

export default function ModePicker() {
    const [isSelected, setSelected] = useState({random: false, mostP: false});
    const navigate = useNavigate();
    const location = useLocation();
    useEffect(() => {
        if(location.pathname === "/random") {
            setSelected({random: true, mostP: false});
        }
        else if(location.pathname === "/most-popular") {
            setSelected({random: false, mostP: true});
        }
    }, [])
    function onSelect(event) {
        if(event.target.textContent === "Random") {
            setSelected({random: true, mostP: false});
            navigate("/random");
         } 
         else {
            setSelected({random: false, mostP: true});
            navigate("/most-popular");
         }
    }
    return (
        <PickerContainer>
            <h3 onClick={onSelect} style={isSelected["random"] ? underlined : {}}>
                 Random
            </h3>
            <h3 onClick={onSelect} style={isSelected["mostP"] ? underlined : {}}>
                Most Popular
            </h3>
        </PickerContainer>
    )
}