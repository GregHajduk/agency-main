import React from 'react'
import styled from 'styled-components'

const MainTitle = styled.h1`
    font-size: 4rem;
    margin-bottom: 1rem;
    text-transform: capitalize;
`
const Title = ( {title, color} ) => {
    return (
        <MainTitle style={{color: `${color}`}}>
            {title}
        </MainTitle>
    )
}

export default Title
