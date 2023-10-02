import React from 'react';
import styled from 'styled-components';
import { Outlet } from 'react-router-dom';

import ModePicker from './ModePicker.js';

const StyledTitle = styled.h1`
  font-family: Roboto; 
  fontt-weight: 700;
  color: #00B2FF;
  margin-bottom: 0px;
  padding-bottom: 0px;
`;

export default function Header() {
    return (
        <>
            <StyledTitle>Random Movie Picker</StyledTitle>
            <ModePicker />
            <Outlet />
        </>
    )
}