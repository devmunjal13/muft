import React from 'react'
import styled from 'styled-components'
import "react-alice-carousel/lib/alice-carousel.css";
import AliceCarousel from 'react-alice-carousel';

const GalleryContainer = styled.div`
  width: 100%;
  margin: -3rem 0 0 0;
  @media only screen and (max-width: 1300px) {
    display: none;
 }
`
const Img = styled.div`
  width: 100%;
  height: 18rem;
  @media only screen and (max-width: 768px) {
    width: 10rem;
 }
`

const Gallery = () => {
    return (
        <GalleryContainer>
            <AliceCarousel
        // paddingLeft={12}
        autoPlay 
        infinite
        animationDuration={6000}
        disableButtonsControls
        disableDotsControls
        autoWidth
        >
        
        <img src='https://www.teahub.io/photos/full/28-287160_abstract-red-4k-hd-desktop-wallpaper-for.jpg' alt=""  />
       
        <img src='https://1.bp.blogspot.com/-G2-TwZjTxDs/XvDBprTo2eI/AAAAAAAAVIY/avMDmYVvWW0avg_YjRJItrqMuRKOwy8agCK4BGAsYHg/s3840/ULTRA-WIDE-ROG-WALLPAPER-3840X1440.png' alt=""  />
        
        <img src='https://wallpapercave.com/wp/wp8606834.png' alt=""  />
        </AliceCarousel>
        </GalleryContainer>
    )
}

export default Gallery
