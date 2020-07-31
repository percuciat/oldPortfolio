import React from "react";
import styled from 'styled-components';

const colorPrimary = 'orange';
const colorSecond = 'white';

export const Btn = styled.button`
      padding: 10px;
      text-align: center;
      background-color: ${colorPrimary};
      color: white;
      border: 1px solid ${colorPrimary};
      border-radius: 10px;
      transition: all 0.5s ease-in;
      animation: shadow 2s infinite linear;
      cursor: pointer;
      :hover {
            background-color: black;
        }
`;

export const FormBtn = styled(Btn)`
    grid-area: 3 / 1 / 4 / 2;
    align-self: flex-end;
    justify-self: start;
    display: block;
    margin-left: 15px;
`;

export const Title = styled.h2`
    position: relative;
    color: ${colorSecond};
    font-size: 1.8rem;
    text-shadow: 2px 2px 8px #EF5B2A;
    opacity: 0.9;
`;

export const TitleRight = styled(Title)`
    text-align: right;
`;

export const Label = styled.label`
    display: block;
    margin-bottom: 10px;
    font-size: 0.8rem;
    color: ${colorSecond};
`;

export const Input = styled.input`
    margin-left: 15px;
    padding: 10px;
    color: ${colorPrimary};
    background: transparent;
    border-top: none;
    border-right: none;
    border-left: none;
    border-bottom: 2px solid white;
    outline-color: orange;
`;

export const Textarea = styled.textarea`
    padding: 10px;
    resize: vertical;
    min-height: 150px;
    max-height: 300px;
    color: ${colorPrimary};
    border: 2px solid white;
    background: transparent;
`;
