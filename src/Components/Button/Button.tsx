import React from 'react';
import styled, { css } from 'styled-components';

interface ButtonProps {
  label: 'primaryBtn' | 'secondaryBtn';
  text?: string;
}

const primaryButtonStyles = css`
  background: #90ee90;
`;

const secondaryButtonStyles = css`
  background: #ffc0cb;
`;

const StyledButton = styled.button<ButtonProps>`
  margin: 0rem;
  padding: 2rem;
  border: 0rem;
  ${({ label }: ButtonProps) =>
    label === 'primaryBtn' ? primaryButtonStyles : secondaryButtonStyles}
`;

export function Button({ label, text }: ButtonProps) {
  return <StyledButton label={label}>{text}</StyledButton>;
}
