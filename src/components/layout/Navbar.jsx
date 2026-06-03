import React, { useEffect, useState } from 'react';
import styled, { css } from 'styled-components';
import vulcanoLogo from '../../assets/vulcano-logo-transparent.png';

const navItems = ['Home', 'Sobre', 'Caldeiraria', 'Projetos'];

const Nav = styled.nav`
  position: fixed;
  z-index: 50;
  top: 0;
  left: 0;
  width: 100%;
  padding: ${({ $active }) => ($active ? '0.5rem 0' : '1rem 0')};
  background: ${({ $active, theme }) => ($active ? theme.colors.white : 'transparent')};
  box-shadow: ${({ $active }) => ($active ? '0 4px 14px rgba(15, 23, 42, 0.12)' : 'none')};
  transition: background 0.3s ease, box-shadow 0.3s ease, padding 0.3s ease;
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
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

const Brand = styled.a`
  display: inline-flex;
  align-items: center;
  flex-shrink: 0;
  width: auto;
  filter: ${({ $active }) => ($active ? 'none' : 'drop-shadow(0 2px 6px rgba(255, 255, 255, 0.45))')};
  transition: filter 0.3s ease;

  img {
    display: block;
    width: auto;
    height: clamp(2rem, 4vw, 2.35rem);
  }
`;

const DesktopNav = styled.div`
  display: none;

  @media (min-width: 768px) {
    display: flex;
    align-items: center;
    gap: 2rem;
  }
`;

const NavLink = styled.a`
  border-radius: 0.375rem;
  padding: 0.5rem 0.75rem;
  color: ${({ $scrolled, theme }) => ($scrolled ? theme.colors.slate700 : 'rgba(255, 255, 255, 0.9)')};
  font-size: 0.875rem;
  font-weight: 500;
  transition: color 0.2s ease, background 0.2s ease;

  &:hover {
    color: ${({ $scrolled, theme }) => ($scrolled ? theme.colors.orange600 : theme.colors.white)};
  }
`;

const BudgetButton = styled.button`
  border: 0;
  border-radius: 999px;
  padding: 0.5rem 1.25rem;
  color: ${({ theme }) => theme.colors.white};
  background: ${({ theme }) => theme.colors.orange600};
  font-size: 0.875rem;
  font-weight: 700;
  transition: background 0.2s ease, transform 0.2s ease;

  &:hover {
    background: ${({ theme }) => theme.colors.orange700};
    transform: scale(1.05);
  }
`;

const MobileToggle = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border: 0;
  padding: 0.35rem;
  color: ${({ $active, theme }) => ($active ? theme.colors.slate900 : theme.colors.white)};
  background: transparent;
  transition: color 0.2s ease;

  svg {
    width: 1.5rem;
    height: 1.5rem;
  }

  @media (min-width: 768px) {
    display: none;
  }
`;

const MobileMenu = styled.div`
  border-top: 1px solid ${({ theme }) => theme.colors.slate100};
  background: ${({ theme }) => theme.colors.white};

  @media (min-width: 768px) {
    display: none;
  }
`;

const MobileMenuInner = styled.div`
  padding: 0.5rem 0.5rem 0.75rem;

  @media (min-width: 640px) {
    padding-inline: 0.75rem;
  }
`;

const mobileLinkStyles = css`
  display: block;
  width: 100%;
  border-radius: 0.375rem;
  padding: 0.5rem 0.75rem;
  text-align: left;
  font-size: 1rem;
  font-weight: 500;
`;

const MobileNavLink = styled.a`
  ${mobileLinkStyles}
  color: ${({ theme }) => theme.colors.slate700};

  &:hover {
    color: ${({ theme }) => theme.colors.orange600};
    background: ${({ theme }) => theme.colors.slate50};
  }
`;

const MobileBudgetButton = styled.button`
  ${mobileLinkStyles}
  margin-top: 1rem;
  border: 0;
  color: ${({ theme }) => theme.colors.white};
  background: ${({ theme }) => theme.colors.orange600};
  font-weight: 700;
`;

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const isActive = isScrolled || isMobileMenuOpen;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Nav $active={isActive}>
      <Container>
        <Brand href="#" $active={isActive} aria-label="Metalúrgica Vulcano">
          <img src={vulcanoLogo} alt="Metalúrgica Vulcano" />
        </Brand>

        <DesktopNav>
          {navItems.map((item) => (
            <NavLink key={item} href="#" $scrolled={isScrolled}>
              {item}
            </NavLink>
          ))}
          <BudgetButton>Solicitar Orçamento</BudgetButton>
        </DesktopNav>

        <MobileToggle
          type="button"
          onClick={() => setIsMobileMenuOpen((value) => !value)}
          $active={isActive}
          aria-label="Abrir menu"
          aria-expanded={isMobileMenuOpen}
        >
          <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={isMobileMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16m-7 6h7'}
            />
          </svg>
        </MobileToggle>
      </Container>

      {isMobileMenuOpen && (
        <MobileMenu>
          <MobileMenuInner>
            {navItems.map((item) => (
              <MobileNavLink key={item} href="#">
                {item}
              </MobileNavLink>
            ))}
            <MobileBudgetButton type="button">Solicitar Orçamento</MobileBudgetButton>
          </MobileMenuInner>
        </MobileMenu>
      )}
    </Nav>
  );
};

export default Navbar;
