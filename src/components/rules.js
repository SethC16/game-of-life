import React from 'react';
import styled from 'styled-components';

const MainDiv = styled.div`
    background-color: #F08080;
    width: 500px;
    line-height: 3rem;
    justify-content: center;
    text-align: center;
    height: 1200px;
    padding: 2%;

    h3 {
        font-family: "Holtwood One SC", serif;
        color: #000000;
        font-size: 1.5rem;
    }
`;

const Rules = () => {
    return (
        <MainDiv>
            <h2>Rules of the Game:</h2>
            <h3>
                1. Any live cell with fewer than 2 live neighbors dies, as if by
                underpopulation. 
            </h3>
            <h3>
                2. Any live cell with 2 or 3 live neighbors lives on to the next
                generation.
            </h3>
            <h3>
                3. Any live cell with more than 3 live neighbors dies, as if by
                overpopulation.
            </h3>
            <h3>
                4. Any dead cell with exactly 3 live neighbors becomes a live cell, as
                if by reproduction. 
            </h3>
        </MainDiv>
    );
};

export default Rules;