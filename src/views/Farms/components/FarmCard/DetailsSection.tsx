import React,{ useState } from 'react'
import useI18n from 'hooks/useI18n'
import styled from 'styled-components'
import BigNumber from 'bignumber.js'
import { NoFeeTag } from 'components/Tags'
import { Text, Flex, Link, LinkExternal, BackgroundImage, Tag, Skeleton} from '@pancakeswap-libs/uikit'
import getLiquidityUrlPathParts from 'utils/getLiquidityUrlPathParts'
import { Address } from 'config/constants/types'
import { provider } from 'web3-core'
import { Farm } from 'state/types'
import CardActionsContainer from './CardActionsContainer'
import ApyButton from './ApyButton'

const Mobile = styled.div`
    display: flex;
  
      width: 100%;
      flex-direction: column;
   
    ${({ theme }) => theme.mediaQueries.sm}{
      display: none;
    }
`;
const Left = styled.div`
${({ theme }) => theme.mediaQueries.sm}{
  width: 55%;
}
width:100%;`

const Right = styled.div`
${({ theme }) => theme.mediaQueries.sm}{
  width: 45%;
}
width: 100%;`

export interface FarmWithStakedValue extends Farm {
  apy?: BigNumber
}

export interface ExpandableSectionProps {
  isTokenOnly?: boolean
  bscScanAddress?: string
  removed?: boolean
  totalValueFormated?: string
  lpLabel?: string
  quoteTokenAdresses?: Address
  quoteTokenSymbol?: string
  tokenAddresses: Address
  farm: FarmWithStakedValue
  ethereum?: provider
  account?: string
  multiplier?: string
  risk?: number
  depositFee?: number
  list?: any
  card?: any
  setList?: any
  setCard?: any
  cakePrice?: BigNumber
}

const Wrapper = styled.div`
  margin-top: 24px;
`
const WrapperU = styled.div`
${({ theme }) => theme.mediaQueries.sm}{
  flex-direction: row;
  }
  display: flex;
  justify-content: space-between;
  width: 100%;
  flex-direction: column-reverse;
  
  height: auto;
  `

const StyledLinkExternal = styled(LinkExternal)`
  text-decoration: none;
  font-weight: normal;
  color: ${({ theme }) => theme.colors.text};
  display: flex;
  align-items: center;

  svg {
    padding-left: 4px;
    height: 18px;
    width: auto;
    fill: ${({ theme }) => theme.colors.primary};
  }
`
const Box = styled.div`
  width: 75%;
`;

const NoFee = styled.div`

   display: flex;
   flex-direction: column;
   align-items: flex-start;
   justify-content: space-between;
`;



const MultiplierTag = styled(Tag)`
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Margin = styled.div`
${({ theme }) => theme.mediaQueries.sm}{
  margin-top: 0rem;
}
    margin-top: 0.5rem;   
`;

const DetailsSection: React.FC<ExpandableSectionProps> = ({
  list,
  card,
  setList,
  setCard,
  isTokenOnly,
  bscScanAddress,
  removed,
  totalValueFormated,
  lpLabel,
  quoteTokenAdresses,
  quoteTokenSymbol,
  tokenAddresses,
  farm,
  ethereum,
  account,
  multiplier,
  depositFee,
  cakePrice,
}) => {
  const TranslateString = useI18n()
  const liquidityUrlPathParts = getLiquidityUrlPathParts({ quoteTokenAdresses, quoteTokenSymbol, tokenAddresses })




  if(list){

    const farmAPY = farm.apy && farm.apy.times(new BigNumber(100)).toNumber().toLocaleString(undefined, {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    })
  

  return (

    <WrapperU>
    <NoFee>

     
      <Margin>
      <StyledLinkExternal href={
        isTokenOnly ?
          `https://exchange.goosedefi.com/#/swap/${tokenAddresses[process.env.REACT_APP_CHAIN_ID]}`
          :
        `https://exchange.goosedefi.com/#/add/${liquidityUrlPathParts}`
      }>
        {lpLabel}
      </StyledLinkExternal>
      </Margin>
   
   
    <Margin>
      <Link external href={bscScanAddress} bold={false}>
        {TranslateString(356, 'View on BscScan')}
      </Link>
      </Margin>

    <Margin>  
    {depositFee === 0 ? <NoFeeTag /> : null}
    </Margin>

    <Mobile>
    {!removed && (
      <Flex style={{marginTop:"0.5rem"}} justifyContent="space-between">
        <Text>{TranslateString(352, 'APR')}</Text>
        <Text bold style={{ display: 'flex' , alignItems:"center"}}>
          {farm.apy ? (
            <>
              {farmAPY}%
             
              <ApyButton
                lpLabel={lpLabel}
                quoteTokenAdresses={quoteTokenAdresses}
                quoteTokenSymbol={quoteTokenSymbol}
                tokenAddresses={tokenAddresses}
                cakePrice={cakePrice}
                apy={farm.apy}
              />
             
            </>
          ) : (
            <Skeleton height={24} width={80} />
          )}
        </Text>
      </Flex>
    )}
    {!removed && (
      <Flex  justifyContent="space-between">
        <Text>{TranslateString(23, 'Liquidity')}</Text>
        <Text bold>{totalValueFormated}</Text>
      </Flex>
    )}
  
    <Flex style={{marginTop:"0.5rem"}} justifyContent="space-between" >
        <Text>Multiplier</Text>
        <MultiplierTag >{multiplier}</MultiplierTag>
      </Flex>
    </Mobile>
    </NoFee>
    <Box>
      <CardActionsContainer list={list} farm={farm} ethereum={ethereum} account={account} /> 
    </Box>
  </WrapperU>
   
  )
          }
    
          
    return(
      <Wrapper>
      <Flex justifyContent="space-between">
        <Text>{TranslateString(316, 'Stake')}:</Text>
        <StyledLinkExternal href={
          isTokenOnly ?
            `https://exchange.goosedefi.com/#/swap/${tokenAddresses[process.env.REACT_APP_CHAIN_ID]}`
            :
          `https://exchange.goosedefi.com/#/add/${liquidityUrlPathParts}`
        }>
          {lpLabel}
        </StyledLinkExternal>
      </Flex>
      {!removed && (
        <Flex justifyContent="space-between">
          <Text>{TranslateString(23, 'Total Liquidity')}:</Text>
          <Text>{totalValueFormated}</Text>
        </Flex>
      )}
      <Flex justifyContent="flex-start">
        <Link external href={bscScanAddress} bold={false}>
          {TranslateString(356, 'View on BscScan')}
        </Link>
      </Flex>
    </Wrapper>
    )  
       
}

export default DetailsSection
