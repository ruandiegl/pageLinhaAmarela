import React from 'react';
import styled from 'styled-components';
import vulcanoLogo from '../../assets/vulcano-logo-transparent.png';

const FooterWrapper = styled.footer`
  padding: 4rem 0 2rem;
  color: ${({ theme }) => theme.colors.white};
  background: ${({ theme }) => theme.colors.slate900};
`;

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 3rem;
  max-width: ${({ theme }) => theme.layout.container};
  margin: 0 auto;
  padding: 0 1rem;

  @media (min-width: 640px) {
    padding: 0 1.5rem;
  }

  @media (min-width: 768px) {
    grid-template-columns: repeat(4, 1fr);
  }

  @media (min-width: 1024px) {
    padding: 0 2rem;
  }
`;

const Brand = styled.a`
  display: inline-flex;
  width: min(100%, 13.5rem);

  img {
    display: block;
    width: 100%;
    height: auto;
  }
`;

const Text = styled.p`
  margin: 1rem 0 0;
  color: ${({ theme }) => theme.colors.slate400};
  font-size: 0.875rem;
  line-height: 1.7;
`;

const SocialList = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1.5rem;
`;

const SocialLink = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 2rem;
  height: 2rem;
  border-radius: 999px;
  color: ${({ theme }) => theme.colors.white};
  background: ${({ theme }) => theme.colors.slate800};
  font-size: 0.75rem;
  font-weight: 700;
  transition: background 0.2s ease;

  &:hover {
    background: ${({ theme }) => theme.colors.orange500};
  }
`;

const Heading = styled.h4`
  margin: 0 0 1.5rem;
  font-size: 1.125rem;
  font-weight: 700;
`;

const List = styled.ul`
  display: grid;
  gap: 1rem;
  margin: 0;
  padding: 0;
  color: ${({ theme }) => theme.colors.slate400};
  font-size: 0.875rem;
  list-style: none;
`;

const FooterLink = styled.a`
  transition: color 0.2s ease;

  &:hover {
    color: ${({ theme }) => theme.colors.white};
  }
`;

const NewsletterForm = styled.form`
  display: flex;
`;

const EmailInput = styled.input`
  width: 100%;
  min-width: 0;
  border: 0;
  border-radius: 0.375rem 0 0 0.375rem;
  padding: 0.5rem 1rem;
  color: ${({ theme }) => theme.colors.white};
  background: ${({ theme }) => theme.colors.slate800};
  font-size: 0.875rem;
  outline: none;

  &:focus {
    box-shadow: inset 0 0 0 1px ${({ theme }) => theme.colors.orange500};
  }
`;

const SubmitButton = styled.button`
  border: 0;
  border-radius: 0 0.375rem 0.375rem 0;
  padding: 0.5rem 1rem;
  color: ${({ theme }) => theme.colors.white};
  background: ${({ theme }) => theme.colors.orange600};
  transition: background 0.2s ease;

  &:hover {
    background: ${({ theme }) => theme.colors.orange700};
  }
`;

const Copyright = styled.div`
  max-width: ${({ theme }) => theme.layout.container};
  margin: 4rem auto 0;
  border-top: 1px solid ${({ theme }) => theme.colors.slate800};
  padding: 2rem 1rem 0;
  color: ${({ theme }) => theme.colors.slate500};
  text-align: center;
  font-size: 0.75rem;

  @media (min-width: 640px) {
    padding-inline: 1.5rem;
  }

  @media (min-width: 1024px) {
    padding-inline: 2rem;
  }
`;

const Footer = () => {
  return (
    <FooterWrapper>
      <Container>
        <div>
          <Brand href="#" aria-label="Metalúrgica Vulcano">
            <img src={vulcanoLogo} alt="Metalúrgica Vulcano" />
          </Brand>
          <Text>
            Excelência em caldeiraria industrial, estruturas metálicas e montagem há 50 anos. Tecnologia,
            robustez e compromisso para operações de alta exigência.
          </Text>
          <SocialList>
            <SocialLink href="#" aria-label="LinkedIn">In</SocialLink>
            <SocialLink href="#" aria-label="Instagram">Ig</SocialLink>
            <SocialLink href="#" aria-label="Facebook">Fb</SocialLink>
          </SocialList>
        </div>

        <div>
          <Heading>Links Rápidos</Heading>
          <List>
            <li><FooterLink href="#">Sobre a Empresa</FooterLink></li>
            <li><FooterLink href="#">Caldeiraria</FooterLink></li>
            <li><FooterLink href="#">Projetos Realizados</FooterLink></li>
            <li><FooterLink href="#">Certificações</FooterLink></li>
          </List>
        </div>

        <div>
          <Heading>Contato</Heading>
          <List>
            <li>Av. Presidente Kennedy, 3100 - Barra Mansa, RJ</li>
            <li>(24) 2106-9999</li>
            <li>comercial@e-vulcano.com.br</li>
          </List>
        </div>

        <div>
          <Heading>Newsletter</Heading>
          <Text>Receba atualizações sobre fabricação, montagem e manutenção industrial.</Text>
          <NewsletterForm>
            <EmailInput type="email" placeholder="Seu e-mail" aria-label="Seu e-mail" />
            <SubmitButton type="submit" aria-label="Enviar">→</SubmitButton>
          </NewsletterForm>
        </div>
      </Container>
      <Copyright>© 2024 Metalúrgica Vulcano Ltda. Todos os direitos reservados.</Copyright>
    </FooterWrapper>
  );
};

export default Footer;
