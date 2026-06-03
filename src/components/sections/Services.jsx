import React from 'react';
import styled from 'styled-components';
import SectionTitle from '../ui/SectionTitle';
import ScrollReveal from '../ui/ScrollReveal';

const services = [
  {
    title: 'Caldeiraria Leve, Média e Pesada',
    description: 'Fabricação de bases, suportes, chutes, dutos, silos e conjuntos metálicos sob desenho.',
    icon: <svg fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>,
  },
  {
    title: 'Engenharia e Detalhamento',
    description: 'Leitura técnica, compatibilização, planejamento de fabricação e apoio para soluções sob medida.',
    icon: <svg fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>,
  },
  {
    title: 'Tanques e Vasos Industriais',
    description: 'Equipamentos metálicos para armazenamento, processo e utilidades com controle dimensional.',
    icon: <svg fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.99 7.99 0 0120 13a7.98 7.98 0 01-2.343 5.657z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z" /></svg>,
  },
  {
    title: 'Montagem Industrial',
    description: 'Equipes qualificadas para instalação, ajustes, içamento e integração em campo com segurança.',
    icon: <svg fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 00-1 1v1a2 2 0 11-4 0v-1a1 1 0 00-1-1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" /></svg>,
  },
  {
    title: 'Corte, Dobra e Calandragem',
    description: 'Preparação de chapas e perfis com conformação, dobra, calandragem e acabamento técnico.',
    icon: <svg fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.121 14.121L19 19m-7-7l7-7m-7 7l-2.879 2.879M12 12L9.121 9.121m0 5.758a3 3 0 11-4.243 4.243 3 3 0 014.243-4.243zm0-5.758a3 3 0 11-4.243-4.243 3 3 0 014.243 4.243z" /></svg>,
  },
  {
    title: 'Soldagem e Inspeção',
    description: 'Soldadores qualificados, controle visual, dimensional e documentação de fabricação.',
    icon: <svg fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" /></svg>,
  },
];

const Section = styled.section`
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
  gap: 2rem;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
`;

const Card = styled.article`
  height: 100%;
  border: 1px solid ${({ theme }) => theme.colors.slate100};
  border-radius: 0.75rem;
  padding: 2rem;
  background: ${({ theme }) => theme.colors.slate50};
  transition: background 0.5s ease, border-color 0.5s ease, box-shadow 0.5s ease, transform 0.5s ease;

  &:hover {
    border-color: ${({ theme }) => theme.colors.slate900};
    background: ${({ theme }) => theme.colors.slate900};
    box-shadow: ${({ theme }) => theme.shadows.strong};
    transform: translateY(-0.5rem);
  }
`;

const IconBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 3.5rem;
  height: 3.5rem;
  margin-bottom: 1.5rem;
  border-radius: 0.5rem;
  color: ${({ theme }) => theme.colors.orange600};
  background: ${({ theme }) => theme.colors.white};
  box-shadow: ${({ theme }) => theme.shadows.soft};
  transition: color 0.2s ease, background 0.2s ease;

  svg {
    width: 1.5rem;
    height: 1.5rem;
  }

  ${Card}:hover & {
    color: ${({ theme }) => theme.colors.white};
    background: ${({ theme }) => theme.colors.orange600};
  }
`;

const CardTitle = styled.h4`
  margin: 0 0 1rem;
  color: ${({ theme }) => theme.colors.slate900};
  font-size: 1.25rem;
  font-weight: 700;
  transition: color 0.2s ease;

  ${Card}:hover & {
    color: ${({ theme }) => theme.colors.white};
  }
`;

const Description = styled.p`
  margin: 0 0 1.5rem;
  color: ${({ theme }) => theme.colors.slate500};
  font-size: 0.875rem;
  line-height: 1.7;
  transition: color 0.2s ease;

  ${Card}:hover & {
    color: ${({ theme }) => theme.colors.slate400};
  }
`;

const CardLink = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  color: ${({ theme }) => theme.colors.orange600};
  font-size: 0.875rem;
  font-weight: 700;

  ${Card}:hover & {
    color: ${({ theme }) => theme.colors.orange400};
  }
`;

const ServiceCard = ({ title, description, icon, index }) => (
  <ScrollReveal delay={index * 0.1} distance={30}>
    <Card>
      <IconBox>{icon}</IconBox>
      <CardTitle>{title}</CardTitle>
      <Description>{description}</Description>
      <CardLink href="#">
        Saiba mais <span>→</span>
      </CardLink>
    </Card>
  </ScrollReveal>
);

const Services = () => {
  return (
    <Section>
      <Container>
        <SectionTitle
          subtitle="Soluções em Caldeiraria"
          title="Da chapa ao equipamento pronto para operar"
          description="Atendemos demandas de fabricação e montagem com foco em prazo, precisão dimensional, segurança e durabilidade."
        />

        <Grid>
          {services.map((service, index) => (
            <ServiceCard key={service.title} index={index} {...service} />
          ))}
        </Grid>
      </Container>
    </Section>
  );
};

export default Services;
