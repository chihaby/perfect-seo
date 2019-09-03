import React from 'react'
import styled from 'styled-components'

const Title = styled.h3`
    font-size: 3.5em;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    text-align: center;
    color: black;
    background-color: bisque;
    padding: 20px 70px;

`;

export default function Header() {
    return (
        <Title> Perfect SEO </Title>
    )
}
