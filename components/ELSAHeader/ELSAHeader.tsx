import { Anchor, Container } from '@mantine/core';
import classes from './ELSAHeader.module.css';

export const ELSAHeader = () => (
  <header className={classes.header}>
    <Container size="xl" className={classes.inner}>
      <Anchor
        href="https://www.elsa.la/"
        target="blank"
        underline="never"
        className={classes.text}
        c="rgba(0, 0, 0, 0.6)"
        fw={700}
        size="lg"
      >
        Conoce ELSA
      </Anchor>
    </Container>
  </header>
);
