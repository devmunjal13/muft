import React from 'react'
import styled from 'styled-components'

import Custom from './Custom'
import TotalValueLockedCard from './TotalValueLockedCard'

const Stats = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-evenly !important;
    margin: 2rem   0;
    @media only screen and (max-width: 1100px) {
        flex-direction: column;
        align-items: center;
        margin: 0.5rem   0;
      }
`

const TwoCards = () => {
    return (
        <Stats>
            <Custom/>
            <TotalValueLockedCard />
        </Stats>
    )
}

export default TwoCards
