import React from 'react'
import styled from 'styled-components'
import { useRouteMatch, Link } from 'react-router-dom'
import { ButtonMenu, ButtonMenuItem, Text, Toggle, ListViewIcon, CardViewIcon } from '@pancakeswap-libs/uikit'
import useI18n from 'hooks/useI18n'

const Icon = styled.div`

  `;

interface Btn {
  list?: any
  card?: any
  stakedOnly?: any
  setStakedOnly?: any
  setList?: any
  setCard?: any
}

const FarmTabButtons: React.FC<Btn> = ({ stakedOnly, setStakedOnly, list, card, setList, setCard }) => {
  const { url, isExact } = useRouteMatch()
  const TranslateString = useI18n()

  return (
    <Wrapper>
      <ToggleWrapper>
        <Toggle checked={stakedOnly} onChange={() => setStakedOnly(!stakedOnly)} />
        <Text style={{color:"#FFF"}}> {TranslateString(699, 'Staked only')}</Text>
      </ToggleWrapper>
      <Icon>
      <ListViewIcon width="2rem" color="#FFF" style={{cursor:"pointer"}} onClick={()=> {setList(true) ; setCard(false)} } />
      <CardViewIcon width="2.2rem" color="#FFF" style={{marginLeft:"1rem",cursor:"pointer"}} onClick={()=>{ setCard(true);setList(false)} }/>
      </Icon>

      {/* <ToggleWrapper style={{ width: "12rem", display: "flex", justifyContent: "space-between" }}>
        <Text> {TranslateString(699, 'Staked only')}</Text>
        <Toggle checked={stakedOnly} onChange={() => setStakedOnly(!stakedOnly)} />
      </ToggleWrapper> */}
      <ButtonMenu activeIndex={isExact ? 0 : 1} size="sm" >
        <ButtonMenuItem as={Link} to={`${url}`}>
          {console.log(url)}
          {TranslateString(698, 'Active')}
        </ButtonMenuItem>
        <ButtonMenuItem as={Link} to={`${url}/history`}>
          {TranslateString(700, 'Inactive')}
        </ButtonMenuItem>
      </ButtonMenu>
    </Wrapper>
  )
}

export default FarmTabButtons

const Wrapper = styled.div`
${({ theme }) => theme.mediaQueries.sm} {
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-bottom: 32px;
  width: 100%;
  flex-direction: row;
  height: auto;
  margin: 8rem  0 0 0;
}
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 10rem;
  margin-bottom: 32px;
`

const ToggleWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 32px;

  ${Text} {
    margin-left: 8px;
  }
`