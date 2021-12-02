import React from 'react'
import { Card, CardBody, Heading, Text } from '@pancakeswap-libs/uikit'
import BigNumber from 'bignumber.js/bignumber'
import styled from 'styled-components'
import { Timeline } from 'react-twitter-widgets'
import { getBalanceNumber } from 'utils/formatBalance'
import { useTotalSupply, useBurnedBalance } from 'hooks/useTokenBalance'
import useI18n from 'hooks/useI18n'
import { getCakeAddress } from 'utils/addressHelpers'
import CardValue from './CardValue'
import { useFarms } from '../../../state/hooks'

const StyledTwitterCard = styled(Card)`
  margin-left: auto;
  margin-right: auto;
  width: 26rem;
  padding: 0;
  @media only screen and (max-width: 768px) {
   width: 99%;
  }
`

const Row = styled.div`
  align-items: center;
  display: flex;
  font-size: 14px;
  justify-content: space-between;
  margin-bottom: 8px;
`
const Div = styled.div`
  width: 100%;
    height: 4rem;
    background: rgb(199, 1, 1);
    padding: 0.5rem  0 0 0;
`

const TwitterCard = () => {
  const TranslateString = useI18n()

  return (
    <StyledTwitterCard>
      <CardBody style={{padding:"0",display:"flex",flexDirection:"column",alignItems:"center"}}>
        <Div>
        <Heading size="xl"  style={{textAlign:"center"}}>
          {TranslateString(10003, 'Announcements')}
        </Heading>
        </Div>
        <Timeline
          dataSource={{
            sourceType: 'profile',
            screenName: 'dev'
          }}
          options={{
            height: '400',
            chrome: "noheader, nofooter",
            width: "90%"
          }}
        />
      </CardBody>
    </StyledTwitterCard>
  )
}

export default TwitterCard
