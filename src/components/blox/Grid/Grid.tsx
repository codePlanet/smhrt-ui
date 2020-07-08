import React, { FC } from 'react';
import styled from '@emotion/styled';
import { Flex, Box, BoxType } from 'reflexbox';
import { FlexboxProps } from 'styled-system';

type GridProps = Omit<BoxType, '__emotion_styles' | 'withComponent'> &
  FlexboxProps;

export const Container = styled(Flex)`
  max-width: 1400px;
  flex-direction: column;
`;

export const Row: FC<GridProps> = props => (
  <Flex
    {...props}
    sx={{
      '> *': {
        mx: 3
      }
    }}
  />
);

export const Column: FC<GridProps> = props => (
  <Box {...props} mx={3} flex="1 1 auto" />
);
