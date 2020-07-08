import styled from '@emotion/styled';
import { ThemeProps } from '../../../types/Theme';

interface ButtonProps extends ThemeProps {
  type: string;
}

const backgroundColor = (theme, type: string) => {
  switch (type) {
    case 'alternate':
      return theme.alternateActionColor;
    case 'secondary':
      return '#ffffff';
    default:
      return theme.actionColor;
  }
};

export const Button = styled.button<ButtonProps>`
  padding: 2rem 6rem;
  border-radius: 1rem;
  font: bold 2rem Lato;
  text-transform: uppercase;
  color: ${({ theme, type }) =>
    type === 'secondary' ? theme.actionColor : '#ffffff'};
  background-color: ${({ theme, type }) => backgroundColor(theme, type)};
  border: 1px solid ${({ theme }) => theme.actionColor};
  cursor: pointer;

  &:hover {
    opacity: 0.65;
  }

  &:disabled,
  &.disabled {
    color: ${({ theme }) => theme.disabledFontColor};
    background-color: ${({ theme, type }) =>
      type === 'secondary' ? '#ffffff' : theme.disabledBackgroundColor};
    border-color: ${({ theme, type }) =>
      type === 'secondary'
        ? theme.disabledFontColor
        : theme.disabledBackgroundColor};
    cursor: not-allowed;
    opacity: 1;
  }
`;
