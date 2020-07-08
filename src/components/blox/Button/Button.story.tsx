import { Button } from './Button';
import React from 'react';
import styled from '@emotion/styled';
import { Column, Row } from '../Grid/Grid';

const ButtonGroup = styled.div`
  display: flex;

  button {
    margin: 1rem;
  }
`;

export default {
  title: 'Button',
  component: Button
};

export const Buttons = () => (
  <>
    <Row>
      <Column>
        <h2>Primary</h2>
        <ButtonGroup>
          <Button>Button</Button>
          <Button disabled>Button</Button>
        </ButtonGroup>
      </Column>
    </Row>

    <Row>
      <Column>
        <h2>Secondary</h2>
        <ButtonGroup>
          <Button type="secondary">Button</Button>
          <Button type="secondary" disabled>
            Button
          </Button>
        </ButtonGroup>
      </Column>
    </Row>
  </>
);
