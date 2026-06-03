import React from 'react';
import styled from 'styled-components';
import ScrollReveal from '../ui/ScrollReveal';

const Section = styled.section`
  border-top: 1px solid ${({ theme }) => theme.colors.slate800};
  border-bottom: 1px solid ${({ theme }) => theme.colors.slate800};
  padding: 5rem 0;
  background: ${({ theme }) => theme.colors.slate900};
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
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 3rem;

  @media (min-width: 1024px) {
    grid-template-columns: repeat(4, minmax(0, 1fr));
    gap: 2rem;
  }
`;

const Item = styled.div`
  padding: 0 1rem;
  text-align: center;
`;

const Number = styled.div`
  margin-bottom: 0.5rem;
  color: ${({ theme }) => theme.colors.white};
  font-size: clamp(2.25rem, 5vw, 3rem);
  font-weight: 900;
`;

const Label = styled.div`
  color: ${({ theme }) => theme.colors.orange400};
  font-size: clamp(0.75rem, 2vw, 0.875rem);
  font-weight: 700;
  letter-spacing: 0.16em;
  text-transform: uppercase;
`;

const StatItem = ({ number, label, delay }) => (
  <ScrollReveal delay={delay}>
    <Item>
      <Number>{number}</Number>
      <Label>{label}</Label>
    </Item>
  </ScrollReveal>
);

const Stats = () => {
  return (
    <Section>
      <Container>
        <Grid>
          <StatItem number="50+" label="Anos de História" delay={0.1} />
          <StatItem number="1200" label="Toneladas / Mês" delay={0.2} />
          <StatItem number="500+" label="Projetos Entregues" delay={0.3} />
          <StatItem number="100%" label="Inspeção Técnica" delay={0.4} />
        </Grid>
      </Container>
    </Section>
  );
};

export default Stats;
