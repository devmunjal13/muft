import React from 'react'
import styled from 'styled-components'
import { Card, CardBody, Heading, Skeleton, Text } from '@pancakeswap-libs/uikit'
import useI18n from 'hooks/useI18n'
import { useGetStats } from 'hooks/api'
import { useTotalValue } from '../../../state/hooks'
import CardValue from './CardValue'
import { Container } from './CakeStats'

const StyledTotalValueLockedCard = styled(Card)`
  align-items: center;
  display: flex;
  flex: 1;
`

// const Container  = styled.div`
// background-color: #FFF;
  
 
//   box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset !important;

//   padding: 1.2rem 1rem;
//   width: 31rem !important;
//     display: flex;
//     justify-content: center;
//     flex-direction column;
//     border-radius: 10px;
//     align-items: center;
//     @media only screen and (max-width: 1100px) {
//       margin: 2rem 0 0 0  ;

//     }
// `

const TotalValueLockedCard = () => {
  const TranslateString = useI18n()
  // const data = useGetStats()
  const totalValue = useTotalValue();
  // const tvl = totalValue.toFixed(2);

  return (
    // <StyledTotalValueLockedCard>
    //   <CardBody>
    //     
        <Container style={{flexDirection:"column"}}>
          {/* <Heading size="xl">{`$${tvl}`}</Heading> */}
          <Heading size="lg" mb="24px" style={{margin:"0"}}>
          {TranslateString(999, 'Total Value Locked (TVL)')}
         </Heading>
          {/* <Heading size="xl"> */}
            <CardValue value={totalValue.toNumber()} prefix="$" decimals={2}/>
          {/* </Heading> */}
          {/* <Text color="textSubtle">{TranslateString(999, 'Across all Farms and Pools')}</Text> */}
        </Container>
    //   </CardBody>
    // </StyledTotalValueLockedCard>
  )
}

export default TotalValueLockedCard
