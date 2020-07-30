import React from "react";
import styled from "styled-components"

const MainDiv = styled.div`
    background-color: #F08080;
    width: 500px;
    line-height: 3rem;
    justify-content: center;
    height: 1200px;
    padding: 2%;
    font-size: 1.5rem;

    h3 {
        font-family: "Holtwood One SC", serif;
        color: #000000;
    }
    `;

const About = () => {
    return (
        <MainDiv>
            <h3>
                The Game of Life, also known simply as Life, is a cellular automaton
                devised by the British mathematician John Horton Conway in 1970.[1] It
                is a zero-player game, meaning that its evolution is determined by its
                initial state, requiring no further input. One interacts with the Game
                of Life by creating an initial configuration and observing how it
                evolves. It is Turing complete and can simulate a universal constructor
                or any other Turing machine. 
            </h3>
        </MainDiv>
    );
};

export default About;

