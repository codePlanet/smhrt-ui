import styled from '@emotion/styled';
import { ThemeProps } from '../../../types/Theme';

interface ButtonProps extends ThemeProps {
  actionType?: string;
}

const backgroundColor = (theme: any, type?: string) => {
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
  color: ${({ theme, actionType }) =>
    actionType === 'secondary' ? theme.actionColor : '#ffffff'};
  background-color: ${({ theme, actionType }) =>
    backgroundColor(theme, actionType)};
  border: 1px solid ${({ theme }) => theme.actionColor};
  cursor: pointer;

  &:hover {
    opacity: 0.65;
  }

  &:disabled,
  &.disabled {
    color: ${({ theme }) => theme.disabledFontColor};
    background-color: ${({ theme, actionType }) =>
      actionType === 'secondary' ? '#ffffff' : theme.disabledBackgroundColor};
    border-color: ${({ theme, actionType }) =>
      actionType === 'secondary'
        ? theme.disabledFontColor
        : theme.disabledBackgroundColor};
    cursor: not-allowed;
    opacity: 1;
  }
`;
