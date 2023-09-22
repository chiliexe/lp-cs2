import React from "react";

import Container from "common/components/UI/ContainerTwo";
import CheckBox from "common/components/Checkbox";
import Heading from "common/components/Heading";
import Button from "common/components/Button";
import Input from "common/components/Input";
import Text from "common/components/Text";

import SectionWrapper, {
  FooterInner,
  Content,
  SubscriptionForm,
} from "./subscribe.style";

import bg1 from "common/assets/image/agencyModern/cta/1.png";
import bg2 from "common/assets/image/agencyModern/cta/2.png";
import bg3 from "common/assets/image/agencyModern/cta/3.png";
import bg4 from "common/assets/image/agencyModern/cta/4.png";
import bg5 from "common/assets/image/agencyModern/cta/5.png";
import bg6 from "common/assets/image/agencyModern/bg/bg.png"

const Subscribe = () => {
  return (
    <SectionWrapper>
      <Container>
        <FooterInner>
          <Content>
            <Heading as="h3" content="Quer participar de tudo isso?" />
            <Text content="💥 Não espere mais. Junte-se a nós na jornada do sucesso e da satisfação do cliente! 💥" />
          </Content>
          <SubscriptionForm>
            <div>
              <Input
                inputType="email"
                placeholder="Insira sua forma de contato"
                iconPosition="left"
                aria-label="email"
              />
              <Button title="ENVIAR" type="submit" />
            </div>
            <CheckBox
              id="remember"
              htmlFor="remember"
              labelText="Quero receber uma proposta!"
            />
          </SubscriptionForm>
        </FooterInner>
      </Container>
      <img src={bg6?.src} alt="bg1" className="illustration bg6" />
      {/* <img src={bg1?.src} alt="bg1" className="illustration bg1" />
      <img src={bg2?.src} alt="bg2" className="illustration bg2" />
      <img src={bg3?.src} alt="bg3" className="illustration bg3" />
      <img src={bg4?.src} alt="bg4" className="illustration bg4" />
      <img src={bg5?.src} alt="bg5" className="illustration bg5" /> */}
    </SectionWrapper>
  );
};

export default Subscribe;
