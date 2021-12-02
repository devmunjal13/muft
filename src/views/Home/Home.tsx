import React from 'react'
import styled from 'styled-components'
import "react-alice-carousel/lib/alice-carousel.css";
import AliceCarousel from 'react-alice-carousel';
import ParticlesBg from 'particles-bg'
import { Heading, Text, BaseLayout,Button, Flex } from '@pancakeswap-libs/uikit'
import { motion } from 'framer-motion'
import useI18n from 'hooks/useI18n'
import Page from 'components/layout/Page'
import Title from 'views/Title/Title'
import FarmStakingCard from './components/FarmStakingCard'
import LotteryCard from './components/LotteryCard'
import CakeStats from './components/CakeStats'
import TotalValueLockedCard from './components/TotalValueLockedCard'
import TwitterCard from './components/TwitterCard'
import Custom from './components/Custom';
import CustomPage from './components/CustomPage';
import TwoCards from './components/TwoCards'

const Hero = styled.div`
  align-items: center;
  
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin: 10rem 0 2rem 0;
 
  text-align: center;

  ${({ theme }) => theme.mediaQueries.sm} {
    background-image: url('/images/left.png'), url('/images/right.png');
    padding-top: 0;
    margin: 15rem 0 2rem 0;
  }
`

const Cards = styled(BaseLayout)`
  align-items: stretch;
  justify-content: stretch;
  margin-bottom: 48px;
  width: 100%;

  // & > div {
  //   grid-column: span 6;
  //   width: 100%;
  // }

  // ${({ theme }) => theme.mediaQueries.sm} {
  //   & > div {
  //     grid-column: span 8;
  //   }
  // }

  // ${({ theme }) => theme.mediaQueries.lg} {
  //   & > div {
  //     grid-column: span 6;
  //   }
  // }
`
const Image = styled.div`
  height: 10rem;
   width: 10rem;
   margin: 2rem 0;
`
const Width = styled.div`
  width: 90vw;
  position: absolute;
`
const IconContainer = styled.div`
      width: 100%;
    background-color: rgb(242, 242, 242);
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 9rem;
    @media only screen and (max-width: 768px) {
      min-width: 99%;
     }
`
const Icon = styled.div`
  width: 4rem;
  height: 4rem;
  cursor: pointer;
  @media only screen and (max-width: 768px) {
    
    width: 2rem;
  height: 2rem;
   }
`
const RowStyle = styled.div`
   width: 100%;
  justify-content: space-evenly;
   align-items: center;
  @media only screen and (max-width: 1300px) {
    justify-content: space-evenly;
  }
  @media only screen and (max-width: 1100px) {
    flex-direction: column;
    align-items: center;
  }
`
const ButtonContainer = styled(Flex)`
@media only screen and (max-width: 768px) {
    flex-direction: column;
 }
`
const Gallery = styled.div`
  width: 100%;
  position: absolute;
  left: 0;
  top: 0;

`
const Img = styled.div`
  width: 100%;
  height: 15rem;
  @media only screen and (max-width: 768px) {
    height: 10rem;
 }
`

const Home: React.FC = () => {
  const TranslateString = useI18n()

  return (
    
    <Page style={{overflowX:"hidden"}} >
       <ParticlesBg type="cobweb" bg color="#FFFFFF" />
      <Gallery>
      <AliceCarousel
        
        autoPlay 
        infinite
        animationDuration={6000}
        disableButtonsControls
        disableDotsControls
        >
        <Img>
        <img src='https://www.teahub.io/photos/full/28-287160_abstract-red-4k-hd-desktop-wallpaper-for.jpg' alt="" style={{height:"100%",width:"100%"}} /></Img>
        <Img>
        <img src='https://1.bp.blogspot.com/-G2-TwZjTxDs/XvDBprTo2eI/AAAAAAAAVIY/avMDmYVvWW0avg_YjRJItrqMuRKOwy8agCK4BGAsYHg/s3840/ULTRA-WIDE-ROG-WALLPAPER-3840X1440.png' alt="" style={{height:"100%",width:"100%"}} /></Img>
        <Img>
        <img src='https://wallpapercave.com/wp/wp8606834.png' alt="" style={{height:"100%",width:"100%"}} /></Img>
      </AliceCarousel>
      </Gallery>
      <Hero>
        <Image>
          <img src="/logo.png" alt="" style={{width:"100%",height:'100%'}} />
        </Image>
        <Title />
        {/* <Text>{TranslateString(578, 'Top 3 best DEFI app on Binance Smart Chain.')}</Text> */}
        <Text fontSize="2.2rem" color="#FFF">MUFTSWAP is the best DEX + Sport NFT Marketplace on BSC!</Text>
        <ButtonContainer>
        <Button
          style={{background:"rgb(199, 1, 1)",height:"3.7rem",padding:"0 3rem",margin:"2rem 0"}}
         >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M21 18V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C3.89 21 3 20.1 3 19V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H19C19.5304 3 20.0391 3.21071 20.4142 3.58579C20.7893 3.96086 21 4.46957 21 5V6H12C10.89 6 10 6.9 10 8V16C10 16.5304 10.2107 17.0391 10.5858 17.4142C10.9609 17.7893 11.4696 18 12 18H21ZM12 16H22V8H12V16ZM16 13.5C15.6022 13.5 15.2206 13.342 14.9393 13.0607C14.658 12.7794 14.5 12.3978 14.5 12C14.5 11.6022 14.658 11.2206 14.9393 10.9393C15.2206 10.658 15.6022 10.5 16 10.5C16.3978 10.5 16.7794 10.658 17.0607 10.9393C17.342 11.2206 17.5 11.6022 17.5 12C17.5 12.3978 17.342 12.7794 17.0607 13.0607C16.7794 13.342 16.3978 13.5 16 13.5Z" fill="white"/>
        </svg>
        <div style={{margin:"0 0.5rem"}}/>
          Earn MSSWAP
        </Button>
        <div style={{margin:"0 1rem"}}/>
        <Button
          style={{background:"transparent",height:"3.7rem",padding:"0 3rem",border:"2px solid #FFFFFF",margin:"2rem 0"}}
         >
        <div style={{margin:"0 0.5rem"}}/>
          Stake MSWAP
        </Button>
        </ButtonContainer>
      </Hero>
      
    
        {/* <Cards /> */}
          
        
        <CakeStats />
        <TwoCards />
        <Flex style={{width:"100%"}} justifyContent="center">
          <FarmStakingCard />
        </Flex>
           
        
       
        {/* <IconContainer>
            <Icon>
              <img src="/1.png" alt="" style={{width:"100%",height:"100%"}} />
            </Icon>
            <Icon>
              <img src="/2.png" alt="" style={{width:"100%",height:"100%"}} />
            </Icon>
            <Icon>
              <img src="/3.png" alt="" style={{width:"100%",height:"100%"}} />
            </Icon>
            <Icon>
              <img src="/4.png" alt="" style={{width:"100%",height:"100%"}} />
            </Icon>
            <Icon>
              <img src="/5.webp" alt="" style={{width:"100%",height:"100%"}} />
            </Icon>
            <Icon>
              <img src="/6.png" alt="" style={{width:"100%",height:"100%"}} />
            </Icon>
            <Icon>
              <img src="/7.png" alt="" style={{width:"100%",height:"100%"}} />
            </Icon><Icon>
              <img src="/8.png" alt="" style={{width:"100%",height:"100%"}} />
            </Icon>
        </IconContainer> */}
          {/* <TwitterCard/> */}
          
      
      {/* <CustomPage /> */}
    </Page>
   
  )
}

export default Home
