import React from 'react';
import { Column, Container, Row } from '../Grid/Grid';

export default {
  title: 'Typography'
};

export const Heading = () => (
  <>
    <Container>
      <Row>
        <h1>Heading 1</h1>
      </Row>
      <Row>
        <h2>Heading 2</h2>
      </Row>
      <Row>
        <h3>Heading 3</h3>
      </Row>
      <Row>
        <h4>Heading 4</h4>
      </Row>
      <Row>
        <h5>Heading 5</h5>
      </Row>
      <Row>
        <h6>Heading 6</h6>
      </Row>
    </Container>
  </>
);

export const Body = () => (
  <>
    <Row>
      <Column>
        <h2>Paragraph</h2>
        <p>
          Bacon ipsum dolor amet chislic meatloaf doner beef ribs capicola
          hamburger shankle ribeye pork belly strip steak jerky bresaola
          pastrami. Strip steak meatball flank, corned beef tail picanha pork
          belly salami tri-tip prosciutto. Spare ribs beef ribs tenderloin
          tri-tip kielbasa shank. Leberkas pig jerky andouille cow prosciutto
          tri-tip drumstick tongue flank pork. Pork chop ball tip burgdoggen
          sausage alcatra flank kevin spare ribs jerky turkey chicken. Andouille
          spare ribs shoulder ham hock, boudin capicola hamburger chislic
          buffalo biltong ribeye.
        </p>
      </Column>
    </Row>
  </>
);
