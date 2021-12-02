import React, { useState, useCallback } from 'react'
import styled from 'styled-components'
import { Heading, Card, CardBody, Button,Flex } from '@pancakeswap-libs/uikit'
import { useWallet } from '@binance-chain/bsc-use-wallet'
import { motion } from 'framer-motion'
import BigNumber from 'bignumber.js'
import useI18n from 'hooks/useI18n'
import { useAllHarvest } from 'hooks/useHarvest'
import useFarmsWithBalance from 'hooks/useFarmsWithBalance'
import UnlockButton from 'components/UnlockButton'
import CakeHarvestBalance from './CakeHarvestBalance'
import CakeWalletBalance from './CakeWalletBalance'
import { usePriceCakeBusd } from '../../../state/hooks'
import useTokenBalance from '../../../hooks/useTokenBalance'
import { getCakeAddress } from '../../../utils/addressHelpers'
import useAllEarnings from '../../../hooks/useAllEarnings'
import { getBalanceNumber } from '../../../utils/formatBalance'

const StyledFarmStakingCard = styled(Card)`
  background-image: url('/images/Muft/2a.png');
  background-repeat: no-repeat;
  background-position: top right;
  min-height: 376px;
`

const Block = styled.div`
  margin-bottom: 16px;
`

const CardImage = styled.img`
  margin-bottom: 16px;
`

const Label = styled.div`
  color: ${({ theme }) => theme.colors.text};
  font-size: 1.3rem;
`

const Actions = styled.div`
  // margin-top: 24px;
`
const Container  = styled(Flex)`
  
background-color: #FFF;
  
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
  padding:1.5rem 1rem;
    width: 31rem;
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    border-radius: 10px;
    align-items: center;
    margin: 0 0 2rem 0;
  }
  @media only screen and (max-width: 768px) {
    width: 99%;
   }
`

const Row = styled.div`
   display: flex;
   justify-content: space-around;
   width: 100%;
   @media only screen and (max-width: 500px) {
    flex-direction: column;
    align-items center;
    
   }
`

const FarmedStakingCard = () => {
  const [pendingTx, setPendingTx] = useState(false)
  const { account } = useWallet()
  const TranslateString = useI18n()
  const farmsWithBalance = useFarmsWithBalance()
  const cakeBalance = getBalanceNumber(useTokenBalance(getCakeAddress()))
  const MuftPrice = usePriceCakeBusd().toNumber()
  const allEarnings = useAllEarnings()
  const earningsSum = allEarnings.reduce((accum, earning) => {
    return accum + new BigNumber(earning).div(new BigNumber(10).pow(18)).toNumber()
  }, 0)
  const balancesWithValue = farmsWithBalance.filter((balanceType) => balanceType.balance.toNumber() > 0)

  const { onReward } = useAllHarvest(balancesWithValue.map((farmWithBalance) => farmWithBalance.pid))

  const harvestAllFarms = useCallback(async () => {
    setPendingTx(true)
    try {
      await onReward()
    } catch (error) {
      // TODO: find a way to handle when the user rejects transaction or it fails
    } finally {
      setPendingTx(false)
    }
  }, [onReward])

  return (
    // <StyledFarmStakingCard>
    //   <CardBody>
    //     <Heading size="xl" mb="24px">
    //       {TranslateString(542, 'Farms & Staking')}
    //     </Heading>
    //     <motion.div
    //         animate={{ rotate: 360 }}
    //         transition={{ ease: "linear", duration: 2.5, repeat: Infinity ,delay: 5}}
            
    //    style={{width:"4rem"}} >
    //       <CardImage src="/images/Muft/2.png" alt="cake logo" width={64} height={64} />
    //     </motion.div>
    <Container>
      <Row>
        <Block>
          <Label>{TranslateString(544, 'Muft to Harvest')}</Label>
          <CakeHarvestBalance earningsSum={earningsSum}/>
          <Label>~${(MuftPrice * earningsSum).toFixed(2)}</Label>
        </Block>
        <Block>
          <Label>{TranslateString(546, 'Muft in Wallet')}</Label>
          <CakeWalletBalance cakeBalance={cakeBalance} />
          <Label>~${(MuftPrice * cakeBalance).toFixed(2)}</Label>
        </Block>
      </Row>
        <Actions>
          {account ? (
            <Button
              id="harvest-all"
              disabled={balancesWithValue.length <= 0 || pendingTx}
              onClick={harvestAllFarms}
              fullWidth
            >
              {pendingTx
                ? TranslateString(548, 'Collecting Muft')
                : TranslateString(999, `Harvest all (${balancesWithValue.length})`)}
            </Button>
          ) : (
            <UnlockButton fullWidth />
          )}
        </Actions>
        </Container>
    //   </CardBody>
    // </StyledFarmStakingCard>
  )
}

export default FarmedStakingCard
