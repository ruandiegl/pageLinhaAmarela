import React from 'react';
import styled from 'styled-components';
import ScrollReveal from '../ui/ScrollReveal';

const Section = styled.section`
  position: relative;
  overflow: hidden;
  padding: 6rem 0;
  background: ${({ theme }) => theme.colors.orange600};
`;

const Container = styled.div`
  position: relative;
  z-index: 1;
  max-width: 56rem;
  margin: 0 auto;
  padding: 0 1rem;
  text-align: center;
`;

const Title = styled.h2`
  margin: 0 0 2rem;
  color: ${({ theme }) => theme.colors.white};
  font-size: clamp(1.875rem, 5vw, 3rem);
  font-weight: 700;
  line-height: 1.15;
`;

const Description = styled.p`
  margin: 0 0 3rem;
  color: ${({ theme }) => theme.colors.orange100};
  font-size: clamp(1.125rem, 2vw, 1.25rem);
  font-weight: 500;
  line-height: 1.7;
`;

const Actions = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1.5rem;

  @media (min-width: 640px) {
    flex-direction: row;
  }
`;

const Button = styled.button`
  border-radius: 0.375rem;
  padding: 1.25rem 2.5rem;
  font-size: 1.125rem;
  transition: background 0.2s ease, color 0.2s ease, border-color 0.2s ease;
`;

const PrimaryButton = styled(Button)`
  border: 0;
  color: ${({ theme }) => theme.colors.orange600};
  background: ${({ theme }) => theme.colors.white};
  font-weight: 900;
  box-shadow: 0 25px 50px -12px rgba(15, 23, 42, 0.35);

  &:hover {
    color: ${({ theme }) => theme.colors.white};
    background: ${({ theme }) => theme.colors.slate900};
  }
`;

const SecondaryButton = styled(Button)`
  border: 1px solid rgba(255, 255, 255, 0.3);
  color: ${({ theme }) => theme.colors.white};
  background: rgba(194, 65, 12, 0.3);
  font-weight: 700;

  &:hover {
    background: ${({ theme }) => theme.colors.orange700};
  }
`;

const ContactCTA = () => {
  return (
    <Section>
      <Container>
        <ScrollReveal>
          <Title>Precisa de um parceiro confiável para seu próximo projeto de caldeiraria?</Title>
        </ScrollReveal>
        <ScrollReveal delay={0.2}>
          <Description>
            Nossa equipe técnica está pronta para analisar desenhos, escopo e prazos para propor a melhor
            solução de fabricação, montagem ou manutenção industrial.
          </Description>
        </ScrollReveal>
        <Actions>
          <PrimaryButton type="button">Solicitar Orçamento Agora</PrimaryButton>
          <SecondaryButton type="button">Falar com Especialista</SecondaryButton>
        </Actions>
      </Container>
    </Section>
  );
};

export default ContactCTA;
