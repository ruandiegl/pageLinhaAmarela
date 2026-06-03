import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  margin-bottom: 4rem;
  text-align: center;
`;

const Subtitle = styled.h2`
  margin: 0 0 1rem;
  color: ${({ theme }) => theme.colors.orange600};
  font-size: 0.875rem;
  font-weight: 700;
  letter-spacing: 0.18em;
  text-transform: uppercase;
`;

const Title = styled.h3`
  margin: 0 0 1rem;
  color: ${({ $light, theme }) => ($light ? theme.colors.white : theme.colors.slate900)};
  font-size: clamp(1.875rem, 4vw, 2.25rem);
  font-weight: 700;
  line-height: 1.18;
`;

const Description = styled.p`
  max-width: 42rem;
  margin: 0 auto;
  color: ${({ $light, theme }) => ($light ? theme.colors.slate300 : theme.colors.slate500)};
  line-height: 1.65;
`;

const SectionTitle = ({ subtitle, title, description, light = false }) => {
  return (
    <Wrapper>
      {subtitle && <Subtitle>{subtitle}</Subtitle>}
      <Title $light={light}>{title}</Title>
      {description && <Description $light={light}>{description}</Description>}
    </Wrapper>
  );
};

export default SectionTitle;
