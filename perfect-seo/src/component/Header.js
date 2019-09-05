import React from 'react'
import styled from 'styled-components'

const Title = styled.h3`
    font-size: 3em;
    text-align: center;
    font-family: 'Sedgwick Ave', cursive;
    color: black;
    padding: 20px 70px;

`;

export default function Header() {
    return (
        <Title> Perfect <span style={{ color: 'gold', fontSize: '1.2em', fontWeight: 'bold' }}><em>SEO</em></span></Title>
    )
}
