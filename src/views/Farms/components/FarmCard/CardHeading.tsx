import React from 'react'
import styled from 'styled-components'
import { Tag, Flex, Heading, Image, Text } from '@pancakeswap-libs/uikit'
import { CommunityTag, CoreTag, NoFeeTag, RiskTag } from 'components/Tags'

export interface ExpandableSectionProps {
  lpLabel?: string
  multiplier?: string
  risk?: number
  depositFee?: number
  farmImage?: string
  tokenSymbol?: string
  swap?:string
  tokenMode?:boolean
}

const Wrapper = styled(Flex)`
  svg {
    margin-right: 0.25rem;
  }
`

const MultiplierTag = styled(Tag)`
  margin-left: 4px;
`

const CardHeading: React.FC<ExpandableSectionProps> = ({
  lpLabel,
  multiplier,
  risk,
  farmImage,
  tokenSymbol,
  depositFee,
  swap,
  tokenMode
}) => {
  console.log(swap)
  return (
    <Wrapper justifyContent="space-between" alignItems="center" mb="12px">
      {console.log(tokenMode,"images")}
     <Image src={`/images/farms/${farmImage}.png`} alt={tokenSymbol} width={tokenMode ? 64 :95} height={64} />
      <Flex flexDirection="column" alignItems="center" style={{verticalAlign:"middle"}}>
        <Heading mb="4px">{lpLabel}{ /* {lpLabel} */ }</Heading>  
        <Flex justifyContent="center">
          {/* {depositFee === 0 ? <NoFeeTag /> : null} */}
          {/* {isCommunityFarm ? <CommunityTag /> : <CoreTag />} */}
          {/* <RiskTag risk={risk} /> */}
          {swap && <MultiplierTag variant="primary">{swap}</MultiplierTag>}

          <MultiplierTag variant="secondary">{multiplier}</MultiplierTag>
        </Flex>
      </Flex>
    </Wrapper>
  )
}

export default CardHeading
