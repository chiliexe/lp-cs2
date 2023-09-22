import React, { Fragment } from "react";
import Head from "next/head";
import { ThemeProvider } from "styled-components";
import { DrawerProvider } from "common/contexts/DrawerContext";
import Sticky from "react-stickynode";
import { foodDeliveryTheme } from "common/theme/foodDelivery";
import ResetCSS from "common/assets/css/style";
import {
  GlobalStyle,
  ContentWrapper,
} from "../containers/FoodDelivery/foodDelivery.style";

import Navbar from "../containers/FoodDelivery/Navbar";
import Banner from "../containers/FoodDelivery/Banner";
import AnalyticsTool from "../containers/WebAppCreative/AnalyticsTool";
import HowWorks from "../containers/FoodDelivery/HowWorks";
import RideOption from "../containers/Ride/RideOption";
import Subscribe from "../containers/AgencyModern/Subscribe";
import Footer from "../containers/AgencyModern/Footer";
import FaqSection from "containers/Agency/FaqSection";

const FoodDelivery = () => {
  return (
    <ThemeProvider theme={foodDeliveryTheme}>
      <Fragment>
        <Head>
          <title>Bolt 360 - Impulsione seu Negócio Online com Websites profissionais!</title>
          <meta name="application-name" content="Bolt 360 - Impulsione seu Negócio Online com Websites profissionais!" />
          <meta name="author" content="Bolt 360" />
          <meta name="keywords" content="Bolt 360 - Impulsione seu Negócio Online com Websites profissionais!" />
          <meta name="description"
            content="Explore uma coleção exclusiva de templates profissionais para websites disponíveis na Bolt 360.
             Nossos templates são projetados para impulsionar o seu negócio online, oferecendo designs atrativos e funcionais 
             para diversas finalidades. Seja você um empreendedor individual, uma startup ambiciosa ou uma empresa consolidada, 
             nossos templates são adaptáveis às suas necessidades. Aprimore a presença digital da sua marca com facilidade, através 
             de layouts modernos e responsivos que garantem uma experiência excepcional para os visitantes do seu site. Na Bolt 360, 
             estamos comprometidos em fornecer soluções que elevam o seu negócio ao próximo nível. Escolha o seu template hoje e 
             construa uma presença online impressionante com a Bolt 360 ao seu lado." />

          {/* Load google fonts */}
          <link
            href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,wght@0,400;0,500;0,700;1,400;1,500;1,700"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Work+Sans:wght@300;400;600&display=swap"
            rel="stylesheet"
          />
        </Head>
        <ResetCSS />
        <GlobalStyle />
        <ContentWrapper>
          <Sticky top={0} innerZ={9999} activeClass="sticky-nav-active">
            <DrawerProvider>
              <Navbar />
            </DrawerProvider>
          </Sticky>
          <Banner />
          <HowWorks />
          <AnalyticsTool />
          <RideOption />
          <FaqSection />
          <Subscribe />
          <Footer />
        </ContentWrapper>
      </Fragment>
    </ThemeProvider>
  );
};
export default FoodDelivery;