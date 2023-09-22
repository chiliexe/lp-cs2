import React, { useEffect } from 'react';

import Container from 'common/components/UI/Container';
import Heading from 'common/components/Heading';
import Text from 'common/components/Text';
import NextImage from 'common/components/NextImage';
import Box from 'common/components/Box';
import mapPin from 'common/assets/image/foodDelivery/banner-map-pin.svg';
import arrowIcon from 'common/assets/image/foodDelivery/banner-arrow.svg';
import BannerWrapper from './banner.style';
import ParticlesComponent from '../../App/particles';
import { BANNER_DATA } from 'common/data/FoodDelivery';

const Banner = () => {
  const { sectionImage, title, text, tagLine, buttons } = BANNER_DATA;

  useEffect(() => {
    const elements = document.querySelectorAll('.btnbb');

    elements.forEach(btnbb => {
      btnbb.addEventListener('mousemove', (e) => {
        let x = e.offsetX;
        let y = e.offsetY;
        let btnWidth = btnbb.clientWidth;
        let btnHeight = btnbb.clientHeight;
        let transX = (x - btnWidth / 2);
        let transY = (y - btnHeight / 2);
        btnbb.style.transition = 'transform 0.5s ease'; // Adicione a transição aqui
        btnbb.style.transform = `translateX(${transX}px) translateY(${transY}px)`;
      });

      btnbb.addEventListener('mouseleave', () => {
        btnbb.style.transition = 'transform 0.5s ease'; // Adicione a transição aqui
        btnbb.style.transform = 'translateX(0px) translateY(0px)';
      });

      return () => {
        btnbb.removeEventListener('mousemove', () => {});
        btnbb.removeEventListener('mouseleave', () => {});
      };
    });
  }, []);

  return (
    <BannerWrapper id="banner_section">
      <ParticlesComponent />
      <Container>
        <Box className="content">
          <Heading as="h2" content={title} />
          <Text as="p" className="paragraph" content={text} />
          <form action="#" className="bannerForm">
            <label htmlFor="location" className="sr-only">
              Your Address
            </label>
            <img className="mapPin" src={mapPin?.src} alt={title} />
            <input type="text" placeholder="Digite o seu Whatsapp.." />
            <button type="submit" className="bannerBtn">
              <img src={arrowIcon?.src} alt="banner button" />
            </button>
          </form>
          <Text as="p" className="tagLine" content={tagLine} />
          <Box className="buttonWrap">
            <a href='https://api.whatsapp.com/send?phone=558431901700&text=Oi!%20quero%20cashback%20para%20minha%20empresa' className='btnbb'>
              <span>
                Crie Seu Programa de CashBack
              </span>
            </a>
          </Box>
        </Box>
        <Box className="image"> 
            <NextImage src={sectionImage} alt={title} />
        </Box>
      </Container>
    </BannerWrapper>
  );
};

export default Banner;