import React, { Fragment } from "react";

import Text from "common/components/Text";
import Heading from "common/components/Heading";
import NextImage from "common/components/NextImage";
import Container from "common/components/UI/ContainerTwo";
import {
  Accordion,
  AccordionItem,
  AccordionTitle,
  AccordionBody,
  IconWrapper,
  OpenIcon,
  CloseIcon,
} from "common/components/Accordion";
import { Icon } from "react-icons-kit";
import { thinDown } from "react-icons-kit/entypo/thinDown";
import { thinRight } from "react-icons-kit/entypo/thinRight";
import SectionWrapper, {
  ContentWrapper,
} from "../../AgencyModern/Features/features.style";
import feature from "common/assets/image/bolt/cashback2.png";
import data from "common/data/AgencyModern";

const Features = () => {
  return (
    <SectionWrapper id="feature">
      <Container>
        <ContentWrapper className="boltcontainer">
          <div className="boltImage">
            <NextImage
              className="boltImage2"
              src={feature}
              alt="Feature Image"
            />
          </div>
          <div className="content">
            <h2
              className="boltHeading"
              content="Como funciona o CashBack para restaurantes?"
            >Como funciona o CashBack para restaurantes?</h2>
            <Text
              className="textBolt"
              content="O BoltBank Cashback oferece uma plataforma gratuita que permite a bares, restaurantes do Rio Grande do Norte, criar seu próprio programa de fidelização com cashback."
            />
            <Accordion preExpanded={[0]}>
              <Fragment>
                {data.accordion.map((item, index) => (
                  <AccordionItem key={index} uuid={index}>
                    <Fragment>
                      <AccordionTitle>
                        <Fragment>
                          <Heading as="h4" content={item.title} />
                          <IconWrapper>
                            <OpenIcon>
                              <Icon icon={thinRight} size={18} />
                            </OpenIcon>
                            <CloseIcon>
                              <Icon icon={thinDown} size={18} />
                            </CloseIcon>
                          </IconWrapper>
                        </Fragment>
                      </AccordionTitle>
                      <AccordionBody>
                        <Text content={item.description} />
                      </AccordionBody>
                    </Fragment>
                  </AccordionItem>
                ))}
              </Fragment>
            </Accordion>
          </div>
        </ContentWrapper>
      </Container>
    </SectionWrapper>
  );
};

export default Features;
