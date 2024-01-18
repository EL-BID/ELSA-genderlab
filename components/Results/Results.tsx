import { Text, Stack, Badge, Button } from '@mantine/core';

const resultsText = {
  initial: {
    description: 'Aún se requieren esfuerzos para lograr un sistema de prevención sólido.',
    percentage: 0,
  },
  intermediate: {
    description:
      'Vas bien, pero aún se requieren esfuerzos para lograr un sistema de prevención sólido.',
    percentage: 0,
  },
  high: {
    description:
      '¡Vas por buen camino! Tu organización tiene grandes avances en su sistema de prevención. Sigue así y lograrás espacios más libres y seguros para todas las personas.',
    percentage: 0,
  },
};

type Props = {
  level: 'initial' | 'intermediate' | 'high';
};

export const Results = ({ level }: Props) => (
  <Stack gap="md" align="center">
    <Text size="xl" ta="center" c="white" fw={600}>
      Tu organización se encuentra en un nivel
    </Text>
    <Badge
      size="xl"
      color={level === 'initial' ? 'yellow' : level === 'intermediate' ? 'orange' : 'green'}
    >
      {level === 'initial' ? 'Inicial' : level === 'intermediate' ? 'Intermedio' : 'Alto'}
    </Badge>
    <Text c="white" ta="center">
      {resultsText[level].description}
    </Text>
    {level === 'initial' && (
      <>
        <Text c="white" ta="center">
          ¡Ya has dado el primer paso!
        </Text>
        <Text c="white" ta="center">
          Tener un sistema de prevención sólido es tu siguiente paso para lograr espacios de trabajo
          libres y seguros para todas las personas.
        </Text>
        <Text c="white" ta="center">
          Te invitamos a realizar una medición más exhaustiva, validar y contrastar este resultado
          con tu personal. Así, podrás adoptar una estrategia adaptada a tus necesidades.
        </Text>
      </>
    )}
    {level === 'intermediate' && (
      <>
        <Text c="white" ta="center">
          ¡Vas por buen camino!
        </Text>
        <Text c="white" ta="center">
          Robustecer tu sistema de prevención es tu siguiente paso para lograr espacios de trabajo
          libres y seguros para todas las personas.
        </Text>
        <Text c="white" ta="center">
          Te invitamos a realizar una medición más exhaustiva, validar y contrastar este resultado
          con tu personal. Así, podrás adoptar una estrategia adaptada a tus necesidades.
        </Text>
      </>
    )}
    {level === 'high' && (
      <>
        <Text c="white" ta="center">
          ¡Felicitaciones por tu resultado!
        </Text>
        <Text c="white" ta="center">
          Pero recuerda que tener un sistema de prevención es solo el primer paso para construir
          espacios laborales libres y seguros para todas las personas.
        </Text>

        <Text c="white" ta="center">
          Inclusive organizaciones en este nivel suelen tener problemas con el conocimiento de este
          sistema, la tolerancia y la prevalencia.
        </Text>

        <Text c="white" ta="center">
          Te invitamos a realizar una medición más exhaustiva, validar y contrastar este resultado
          con tu personal. Así, podrás adoptar una estrategia adaptada a tus necesidades.
        </Text>
      </>
    )}
    <Text size="xl" ta="center" c="white" fw={600}>
      ¿Quieres saber cómo ELSA puede ayudarte?
    </Text>
    <Button component="a" variant="default" href="https://www.elsa.la/contacto" target="_blank">
      Agenda una demo
    </Button>
  </Stack>
);
