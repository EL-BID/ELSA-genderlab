import { Stack, Title, Image } from '@mantine/core';

export const Prevenciometro = () => (
  <Stack gap="md" align="center" py="md">
    <Title order={3} c="white">
      Encuesta Organizacional
    </Title>
    <Image src="/img/elsa-logo.png" alt="ELSA" w={250} />
    <Image src="/img/prevenciometro.png" alt="Prevenciometro" w={250} />
  </Stack>
);
