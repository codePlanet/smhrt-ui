import React, { FC } from 'react';
import styled from '@emotion/styled';
import theme from '../theme';
import { camelToProper } from '../utils/StringUtils';
import { contrastRatio, hexToRgb } from '../utils/ColorUtils';
import { Column, Row } from '../components/blox/Grid/Grid';

interface ColorStyleProps {
  color: string;
  backgroundColor: string;
}

const ColorChip = styled.div<ColorStyleProps>`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  height: 6rem;
  width: 100%;
  border-radius: 2rem;
  color: ${({ color }) => color};
  background-color: ${({ backgroundColor }) => backgroundColor};
  margin-bottom: 1rem;
`;

const ColorContainer = styled.div`
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 20rem;
  margin-bottom: 2rem;
`;
const fontColor = (color: string) =>
  contrastRatio(hexToRgb(color)) < 0.3 ? theme.fontColor : '#ffffff';

const ColorTile: FC<ColorStyleProps> = ({
  color,
  backgroundColor,
  children
}) => (
  <ColorContainer>
    <ColorChip color={color} backgroundColor={backgroundColor}>
      {children}
    </ColorChip>
    <div>{backgroundColor}</div>
  </ColorContainer>
);

export default {
  title: 'Color Palette',
  component: ColorTile
};

export const Colors = () => (
  <>
    <Row>
      <Column>
        <h2>Color Palette</h2>
      </Column>
    </Row>
    <Row flexWrap="wrap">
      {Object.entries(theme.colors).map(([name, value]) => (
        <Column>
          <ColorTile
            key={name}
            color={fontColor(value)}
            backgroundColor={value}
          >
            {camelToProper(name)}
          </ColorTile>
        </Column>
      ))}
    </Row>
    <Row>
      <Column>
        <h2>Primary Colors</h2>
      </Column>
    </Row>
    <Row flexWrap="wrap">
      <Column>
        <ColorTile color="#ffffff" backgroundColor={theme.fontColor}>
          Text
        </ColorTile>
      </Column>
      <Column>
        <ColorTile color="#ffffff" backgroundColor={theme.actionColor}>
          Primary Action
        </ColorTile>
      </Column>
      <Column>
        <ColorTile color="#ffffff" backgroundColor={theme.alternateActionColor}>
          Secondary Action
        </ColorTile>
      </Column>
      <Column>
        <ColorTile color="#ffffff" backgroundColor={theme.successColor}>
          Success
        </ColorTile>
      </Column>
      <Column>
        <ColorTile color="#ffffff" backgroundColor={theme.errorColor}>
          Error
        </ColorTile>
      </Column>
    </Row>
  </>
);
