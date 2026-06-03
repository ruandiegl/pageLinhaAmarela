import React from 'react';
import styled from 'styled-components';
import SectionTitle from '../ui/SectionTitle';
import ScrollReveal from '../ui/ScrollReveal';

const images = [
  {
    url: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&q=80&w=800',
    title: 'Estruturas Metálicas',
  },
  {
    url: 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&q=80&w=800',
    title: 'Corte e Preparação de Chapas',
  },
  {
    url: 'https://images.unsplash.com/photo-1533035353720-f1c6a75cd8ab?auto=format&fit=crop&q=80&w=800',
    title: 'Caldeiraria Pesada',
  },
  {
    url: 'https://images.unsplash.com/photo-1534312527009-56c7016453e6?auto=format&fit=crop&q=80&w=800',
    title: 'Montagem Industrial',
  },
  {
    url: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800',
    title: 'Controle de Qualidade',
  },
  {
    url: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&q=80&w=800',
    title: 'Soldagem e Acabamento',
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
  gap: 1rem;

  @media (min-width: 640px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
`;

const GalleryItem = styled.figure`
  position: relative;
  overflow: hidden;
  aspect-ratio: 16 / 9;
  margin: 0;
  border-radius: 0.5rem;
  cursor: pointer;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.7s ease;

  ${GalleryItem}:hover & {
    transform: scale(1.1);
  }
`;

const Overlay = styled.figcaption`
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  color: ${({ theme }) => theme.colors.white};
  background: rgba(15, 23, 42, 0.6);
  opacity: 0;
  transition: opacity 0.3s ease;

  ${GalleryItem}:hover & {
    opacity: 1;
  }
`;

const ItemTitle = styled.span`
  text-align: center;
  font-size: 1.125rem;
  font-weight: 700;
`;

const Gallery = () => {
  return (
    <Section>
      <Container>
        <SectionTitle
          subtitle="Projetos de Caldeiraria"
          title="Capacidade produtiva para demandas industriais"
          description="Uma visão objetiva dos tipos de entrega que o cliente pode esperar: fabricação, soldagem, montagem e controle de qualidade."
        />

        <Grid>
          {images.map((image, index) => (
            <ScrollReveal key={image.title} delay={index * 0.1} distance={20}>
              <GalleryItem>
                <Image src={image.url} alt={image.title} />
                <Overlay>
                  <ItemTitle>{image.title}</ItemTitle>
                </Overlay>
              </GalleryItem>
            </ScrollReveal>
          ))}
        </Grid>
      </Container>
    </Section>
  );
};

export default Gallery;
