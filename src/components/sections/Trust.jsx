import React from 'react';
import styled from 'styled-components';
import ScrollReveal from '../ui/ScrollReveal';

const clients = ['ISO 9001', 'PETROBRAS', 'VALE', 'GERDAU', 'USIMINAS'];

const testimonials = [
  {
    text: 'A Vulcano tem sido um parceiro estratégico fundamental em nossas paradas e ampliações industriais. A qualidade técnica da caldeiraria e o cumprimento de prazos trazem muita segurança para a operação.',
    name: 'Eng. Ricardo Santos',
    role: 'Diretor de Operações, Indústria XYZ',
  },
  {
    text: 'O suporte técnico durante o detalhamento, fabricação e montagem foi muito profissional. As peças chegaram prontas para campo e com ótimo acabamento.',
    name: 'Dra. Amanda Costa',
    role: 'Gerente de Engenharia, Metalúrgica ABC',
  },
];

const Section = styled.section`
  overflow: hidden;
  padding: 6rem 0;
  background: ${({ theme }) => theme.colors.slate50};
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

const ClientsBlock = styled.div`
  margin-bottom: 4rem;
  text-align: center;
`;

const Heading = styled.h3`
  margin: 0 0 3rem;
  color: ${({ theme }) => theme.colors.slate400};
  font-size: 1.25rem;
  font-weight: 700;
  letter-spacing: 0.2em;
  text-transform: uppercase;
`;

const ClientList = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 3rem;
  filter: grayscale(1);
  opacity: 0.5;
  transition: filter 0.7s ease, opacity 0.7s ease;

  &:hover {
    filter: grayscale(0);
    opacity: 1;
  }
`;

const ClientName = styled.div`
  color: ${({ theme }) => theme.colors.slate800};
  font-size: 1.5rem;
  font-weight: 900;
`;

const TestimonialsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  margin-top: 6rem;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
`;

const TestimonialCard = styled.article`
  position: relative;
  border: 1px solid ${({ theme }) => theme.colors.slate100};
  border-radius: 1rem;
  padding: 2.5rem;
  background: ${({ theme }) => theme.colors.white};
  box-shadow: ${({ theme }) => theme.shadows.soft};
`;

const Quote = styled.span`
  position: absolute;
  top: 1rem;
  left: 1rem;
  color: ${({ theme }) => theme.colors.orange200};
  font-family: Georgia, serif;
  font-size: 3.75rem;
  line-height: 1;
`;

const Text = styled.p`
  position: relative;
  z-index: 1;
  margin: 0;
  color: ${({ theme }) => theme.colors.slate600};
  font-size: 1.125rem;
  font-style: italic;
  line-height: 1.7;
`;

const Author = styled.div`
  display: flex;
  align-items: center;
  margin-top: 2rem;
`;

const Avatar = styled.div`
  width: 3rem;
  height: 3rem;
  flex-shrink: 0;
  margin-right: 1rem;
  border-radius: 999px;
  background: ${({ theme }) => theme.colors.slate200};
`;

const AuthorName = styled.p`
  margin: 0;
  color: ${({ theme }) => theme.colors.slate900};
  font-weight: 700;
`;

const AuthorRole = styled.p`
  margin: 0.25rem 0 0;
  color: ${({ theme }) => theme.colors.slate500};
  font-size: 0.875rem;
`;

const Trust = () => {
  return (
    <Section>
      <Container>
        <ScrollReveal>
          <ClientsBlock>
            <Heading>Certificações e Clientes</Heading>
            <ClientList>
              {clients.map((client) => (
                <ClientName key={client}>{client}</ClientName>
              ))}
            </ClientList>
          </ClientsBlock>
        </ScrollReveal>

        <TestimonialsGrid>
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.name}>
              <Quote>"</Quote>
              <Text>{testimonial.text}</Text>
              <Author>
                <Avatar />
                <div>
                  <AuthorName>{testimonial.name}</AuthorName>
                  <AuthorRole>{testimonial.role}</AuthorRole>
                </div>
              </Author>
            </TestimonialCard>
          ))}
        </TestimonialsGrid>
      </Container>
    </Section>
  );
};

export default Trust;
