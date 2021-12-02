import React from 'react'
import { Card, CardBody, Heading, Text, Flex } from '@pancakeswap-libs/uikit'
import BigNumber from 'bignumber.js/bignumber'
import styled from 'styled-components'
import { getBalanceNumber } from 'utils/formatBalance'
import { useTotalSupply, useBurnedBalance } from 'hooks/useTokenBalance'
import useI18n from 'hooks/useI18n'
import { getCakeAddress } from 'utils/addressHelpers'
import CardValue from './CardValue'
import { useFarms, usePriceCakeBusd } from '../../../state/hooks'

const StyledCakeStats = styled(Card)`
  margin-left: auto;
  margin-right: auto;
  width: 100%;
`

const Row = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  margin: 0 1rem;
  font-size: 14px;
  justify-content: space-between;
 
`
export const Container  = styled(Flex)` 
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
    background-color: #FFF;
    display: flex;
    width: 31rem;
    justify-content: space-around;
    border-radius: 10px;
    align-items: center;
    padding: 1.7rem 1rem;
    @media only screen and (max-width: 1100px) {
      margin: 1rem 0 ;
    }
    @media only screen and (max-width: 768px) {
      width: 99%;
     }
     @media only screen and (max-width: 768px) {
      flex-direction: column;
     }
`
export const Stats = styled(Flex)`
  width: 100%;
  justify-content: space-evenly;
  
  @media only screen and (max-width: 1300px) {
    justify-content: space-evenly;
  }
  @media only screen and (max-width: 1100px) {
    flex-direction: column;
    align-items: center;
  }
  `

const CakeStats = () => {
  const TranslateString = useI18n()
  const totalSupply = useTotalSupply()
  const burnedBalance = useBurnedBalance(getCakeAddress())
  const farms = useFarms();
  const MuftPrice = usePriceCakeBusd();
  const circSupply = totalSupply ? totalSupply.minus(burnedBalance) : new BigNumber(0);
  const cakeSupply = getBalanceNumber(circSupply);
  const marketCap = MuftPrice.times(circSupply);

  let MuftPerBlock = 0;
  if(farms && farms[0] && farms[0].MuftPerBlock){
    MuftPerBlock = new BigNumber(farms[0].MuftPerBlock).div(new BigNumber(10).pow(18)).toNumber();
  }

  return (
   
        <Stats>
          <Container>
            <Row>
              <Text fontSize="1.3rem" style={{margin:"0",padding:"0"}}><span style={{color:"rgb(199, 1, 1)"}}>MSWAP</span> Price</Text>
              <CardValue fontSize="1.7rem"  value={getBalanceNumber(marketCap)} decimals={0} prefix="$" />
            </Row>
            <Row>
              <Text fontSize="1.3rem" style={{margin:"0"}}><span style={{color:"rgb(199, 1, 1)"}}>MSWAP</span> Market Cap</Text>
              {totalSupply && <CardValue fontSize="1.7rem"  value={getBalanceNumber(totalSupply)} decimals={0} />}
            </Row>
          </Container>
          <Container>
            <Row>
              <Text fontSize="1.3rem"><span style={{color:"rgb(199, 1, 1)"}}>MSWAP</span> in Circulation</Text>
              <CardValue fontSize="1.7rem" value={getBalanceNumber(burnedBalance)} decimals={0} />
            </Row>
            <Row>
              <Text fontSize="1.3rem"><span style={{color:"rgb(199, 1, 1)"}}>MSWAP</span> Total Supply</Text>
              {cakeSupply && <CardValue fontSize="1.7rem"  value={cakeSupply} decimals={0} />}
            </Row>
          </Container>
        </Stats>
        
        //  <Row>
        //   <Text fontSize="14px">{TranslateString(540, 'New Muft/block')}</Text>
        //   <Text bold fontSize="14px">{MuftPerBlock}</Text>
        // </Row> 
       
  )
}

export default CakeStats
