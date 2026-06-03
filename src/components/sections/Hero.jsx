import React from 'react';
import styled, { keyframes } from 'styled-components';
import ScrollReveal from '../ui/ScrollReveal';

const bounce = keyframes`
  0%, 100% {
    transform: translate(-50%, 0);
  }

  50% {
    transform: translate(-50%, -25%);
  }
`;

const HeroSection = styled.section`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  overflow: hidden;
`;

const Overlay = styled.div`
  position: absolute;
  z-index: 10;
  inset: 0;
  background: rgba(15, 23, 42, 0.62);
`;

const Background = styled.div`
  position: absolute;
  inset: 0;
  background-image: url('https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&q=80&w=2000');
  background-position: center;
  background-size: cover;
  transition: transform 10s ease;

  ${HeroSection}:hover & {
    transform: scale(1.1);
  }
`;

const Content = styled.div`
  position: relative;
  z-index: 20;
  max-width: 66rem;
  margin: 0 auto;
  padding: 0 1rem;
  text-align: center;
`;

const Title = styled.h1`
  margin: 0 0 1.5rem;
  color: ${({ theme }) => theme.colors.white};
  font-size: clamp(2.5rem, 8vw, 4.5rem);
  font-weight: 700;
  letter-spacing: -0.02em;
  line-height: 1.05;
`;

const Accent = styled.span`
  color: ${({ theme }) => theme.colors.orange500};
`;

const Description = styled.p`
  max-width: 50rem;
  margin: 0 auto 2.5rem;
  color: ${({ theme }) => theme.colors.slate200};
  font-size: clamp(1.125rem, 2vw, 1.25rem);
  font-weight: 300;
  line-height: 1.75;
`;

const Actions = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;

  @media (min-width: 640px) {
    flex-direction: row;
  }
`;

const Button = styled.button`
  border-radius: 0.375rem;
  padding: 1rem 2rem;
  font-size: 1.125rem;
  font-weight: 700;
  transition: background 0.2s ease, color 0.2s ease, box-shadow 0.2s ease;
`;

const PrimaryButton = styled(Button)`
  border: 0;
  color: ${({ theme }) => theme.colors.white};
  background: ${({ theme }) => theme.colors.orange600};
  box-shadow: 0 10px 25px rgba(15, 23, 42, 0.2);

  &:hover {
    background: ${({ theme }) => theme.colors.orange700};
    box-shadow: 0 10px 28px rgba(234, 88, 12, 0.3);
  }
`;

const SecondaryButton = styled(Button)`
  border: 2px solid ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.white};
  background: transparent;

  &:hover {
    color: ${({ theme }) => theme.colors.slate900};
    background: ${({ theme }) => theme.colors.white};
  }
`;

const ScrollIndicator = styled.div`
  position: absolute;
  z-index: 20;
  bottom: 2.5rem;
  left: 50%;
  color: rgba(255, 255, 255, 0.5);
  animation: ${bounce} 1s infinite;

  svg {
    width: 1.5rem;
    height: 1.5rem;
  }
`;

const Hero = () => {
  return (
    <HeroSection>
      <Overlay />
      <Background />

      <Content>
        <ScrollReveal delay={0.2}>
          <Title>
            Caldeiraria Industrial com <br />
            <Accent>Precisão, Prazo e Robustez</Accent>
          </Title>
        </ScrollReveal>
        <ScrollReveal delay={0.4}>
          <Description>
            Há 50 anos desenvolvendo, fabricando e montando estruturas, tanques, tubulações e equipamentos
            metálicos para operações industriais que exigem engenharia confiável.
          </Description>
        </ScrollReveal>
        <ScrollReveal delay={0.6}>
          <Actions>
            <PrimaryButton type="button">Conhecer Soluções</PrimaryButton>
            <SecondaryButton type="button">Solicitar Proposta</SecondaryButton>
          </Actions>
        </ScrollReveal>
      </Content>

      <ScrollIndicator aria-hidden="true">
        <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </ScrollIndicator>
    </HeroSection>
  );
};

export default Hero;
