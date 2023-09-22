import React from 'react';
import Fade from 'react-reveal/Fade';

import Container from 'common/components/UI/ContainerTwo';
import Heading from 'common/components/Heading';
import NextImage from 'common/components/NextImage';
import Link from 'common/components/Link';
import Text from 'common/components/Text';

import FooterWrapper, {
  FooterInner,
  CopyrightInfo,
  FooterWidget,
  Nav,
} from './footer.style';
import LogoImage from 'common/assets/image/agencyModern/logo.png';

import data from 'common/data/AgencyModern';

const Footer = () => {
  return (
    <FooterWrapper>
      <Container>
        <FooterInner>
          <CopyrightInfo>
            <Fade up delay={100}>
              <div className="logo">
                <NextImage src={LogoImage} alt="Logo" />
              </div>
              <p>
                <Link href="https://bolt360.com.br">Maximize Seu Potencial Empresarial com a Bolt Assessoria </Link>{''} 
                <br></br>
                <Link href="https://bolt360.com.br">Aumente seu Lucro Líquido de Forma Estratégica e Sustentável!</Link>
              </p>
              <p></p>
            </Fade>
          </CopyrightInfo>

          <FooterWidget> 
          </FooterWidget>

          <FooterWidget>
            <Fade up delay={200}>
              <Heading as="h4" content="Sobre Nós" />
              <Nav>
                {data.aboutUs.map((item) => (
                  <Link key={item.id} href={item.link}>
                    {item.title}
                  </Link>
                ))}
              </Nav>
            </Fade>
          </FooterWidget>

          <FooterWidget>
            <Fade up delay={500}>
              <Heading as="h4" content="Redes Sociais" />
              <Nav>
                {data.social.map((item) => (
                  <Link key={item.id} href={item.link}>
                    <img src={item?.icon?.src} alt={item.title} />
                    {item.title}
                  </Link>
                ))}
              </Nav>
            </Fade>
          </FooterWidget>
        </FooterInner>
      </Container>
    </FooterWrapper>
  );
};

export default Footer;
