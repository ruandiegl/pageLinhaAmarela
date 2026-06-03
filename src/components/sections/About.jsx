import React from 'react';
import styled from 'styled-components';
import ScrollReveal from '../ui/ScrollReveal';

const Section = styled.section`
  overflow: hidden;
  padding: 6rem 0;
  background: ${({ theme }) => theme.colors.white};
`;

const Container = styled.div`
  max-width: ${({ theme }) => theme.layout.container};
  margin: 0 auto;
  padding: 0 1rem;

  @media (min-width: 640px) {
    padding: 0 1.5rem;
  }

  @media (min-width: 1024px) {
    padding: 0 2rem;
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 4rem;
  align-items: center;

  @media (min-width: 1024px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
`;

const ImageReveal = styled(ScrollReveal)`
  order: 2;

  @media (min-width: 1024px) {
    order: 1;
  }
`;

const TextColumn = styled.div`
  order: 1;

  @media (min-width: 1024px) {
    order: 2;
  }
`;

const ImageFrame = styled.div`
  position: relative;
`;

const Image = styled.img`
  position: relative;
  z-index: 10;
  max-width: 100%;
  border-radius: 0.5rem;
  box-shadow: ${({ theme }) => theme.shadows.strong};
`;

const ImageBlock = styled.div`
  position: absolute;
  right: -1.5rem;
  bottom: -1.5rem;
  z-index: 0;
  display: none;
  width: 16rem;
  height: 16rem;
  border-radius: 0.5rem;
  background: ${({ theme }) => theme.colors.orange100};

  @media (min-width: 768px) {
    display: block;
  }
`;

const ExperienceBadge = styled.div`
  position: absolute;
  z-index: 20;
  top: 50%;
  left: -2rem;
  display: none;
  border-radius: 0.5rem;
  padding: 2rem;
  color: ${({ theme }) => theme.colors.white};
  background: ${({ theme }) => theme.colors.orange600};
  box-shadow: 0 20px 35px rgba(15, 23, 42, 0.25);
  transform: translateY(-50%);

  @media (min-width: 768px) {
    display: block;
  }
`;

const BadgeNumber = styled.p`
  margin: 0 0 0.25rem;
  font-size: 2.25rem;
  font-weight: 900;
`;

const BadgeText = styled.p`
  margin: 0;
  font-size: 0.875rem;
  font-weight: 700;
  letter-spacing: 0.14em;
  line-height: 1.4;
  text-transform: uppercase;
`;

const Eyebrow = styled.h2`
  margin: 0 0 1rem;
  color: ${({ theme }) => theme.colors.orange600};
  font-size: 0.875rem;
  font-weight: 700;
  letter-spacing: 0.18em;
  text-transform: uppercase;
`;

const Title = styled.h3`
  margin: 0 0 1.5rem;
  color: ${({ theme }) => theme.colors.slate900};
  font-size: clamp(1.875rem, 4vw, 2.25rem);
  font-weight: 700;
  line-height: 1.18;
`;

const Lead = styled.p`
  margin: 0 0 2rem;
  color: ${({ theme }) => theme.colors.slate600};
  font-size: 1.125rem;
  line-height: 1.7;
`;

const FeatureList = styled.div`
  display: grid;
  gap: 1.5rem;
`;

const Feature = styled.div`
  display: flex;
  align-items: flex-start;
`;

const IconWrap = styled.div`
  flex-shrink: 0;
  margin-top: 0.25rem;
`;

const IconCircle = styled.div`
  border-radius: 999px;
  padding: 0.5rem;
  color: ${({ theme }) => theme.colors.orange600};
  background: ${({ theme }) => theme.colors.orange100};

  svg {
    width: 1.25rem;
    height: 1.25rem;
  }
`;

const FeatureText = styled.div`
  margin-left: 1rem;
`;

const FeatureTitle = styled.h4`
  margin: 0;
  color: ${({ theme }) => theme.colors.slate900};
  font-size: 1.125rem;
  font-weight: 700;
`;

const FeatureDescription = styled.p`
  margin: 0.25rem 0 0;
  color: ${({ theme }) => theme.colors.slate500};
  line-height: 1.55;
`;

const TextButton = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  margin-top: 2.5rem;
  border: 0;
  padding: 0;
  color: ${({ theme }) => theme.colors.slate900};
  background: transparent;
  font-weight: 700;
  transition: color 0.2s ease;

  &:hover {
    color: ${({ theme }) => theme.colors.orange600};
  }

  svg {
    width: 1.25rem;
    height: 1.25rem;
  }
`;

const CheckIcon = () => (
  <svg fill="currentColor" viewBox="0 0 20 20">
    <path
      fillRule="evenodd"
      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
      clipRule="evenodd"
    />
  </svg>
);

const About = () => {
  return (
    <Section>
      <Container>
        <Grid>
          <ImageReveal direction="left" duration={0.8} distance={50}>
            <ImageFrame>
              <Image
                src="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&q=80&w=1000"
                alt="Fabricação de caldeiraria industrial"
              />
              <ImageBlock />
              <ExperienceBadge>
                <BadgeNumber>50</BadgeNumber>
                <BadgeText>
                  Anos de <br /> Experiência
                </BadgeText>
              </ExperienceBadge>
            </ImageFrame>
          </ImageReveal>

          <TextColumn>
            <ScrollReveal direction="right" delay={0.2}>
              <Eyebrow>Sobre a Vulcano</Eyebrow>
              <Title>Uma história construída em metal, engenharia e compromisso com a entrega.</Title>
            </ScrollReveal>
            <ScrollReveal direction="right" delay={0.4}>
              <Lead>
                Desde 1974, a Metalúrgica Vulcano Ltda atua em projetos especiais de engenharia,
                fabricação e montagem industrial. Essa trajetória sustenta uma operação preparada para
                entregar caldeiraria leve, média e pesada com controle técnico, segurança e rastreabilidade.
              </Lead>
            </ScrollReveal>
            <FeatureList>
              <Feature>
                <IconWrap>
                  <IconCircle><CheckIcon /></IconCircle>
                </IconWrap>
                <FeatureText>
                  <FeatureTitle>Projeto, fabricação e montagem</FeatureTitle>
                  <FeatureDescription>
                    Integramos leitura técnica, planejamento de produção, soldagem, acabamento e apoio em campo.
                  </FeatureDescription>
                </FeatureText>
              </Feature>
              <Feature>
                <IconWrap>
                  <IconCircle><CheckIcon /></IconCircle>
                </IconWrap>
                <FeatureText>
                  <FeatureTitle>Qualidade para ambientes críticos</FeatureTitle>
                  <FeatureDescription>
                    Processos orientados por inspeção, documentação e padrões de segurança exigidos pela indústria.
                  </FeatureDescription>
                </FeatureText>
              </Feature>
            </FeatureList>
            <TextButton type="button">
              Conheça nossa trajetória completa
              <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </TextButton>
          </TextColumn>
        </Grid>
      </Container>
    </Section>
  );
};

export default About;
