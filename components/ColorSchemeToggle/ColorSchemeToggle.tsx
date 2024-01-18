'use client';

import { Switch, rem, useMantineColorScheme, useMantineTheme } from '@mantine/core';
import { IconMoonStars, IconSun } from '@tabler/icons-react';

export function ColorSchemeToggle() {
  const { colorScheme, setColorScheme } = useMantineColorScheme();

  const theme = useMantineTheme();

  const sunIcon = (
    <IconSun
      style={{ width: rem(16), height: rem(16) }}
      stroke={2.5}
      color={theme.colors.yellow[4]}
    />
  );

  const moonIcon = (
    <IconMoonStars
      style={{ width: rem(16), height: rem(16) }}
      stroke={2.5}
      color={theme.colors.blue[6]}
    />
  );

  return (
    <Switch
      size="md"
      color="dark.4"
      onLabel={sunIcon}
      offLabel={moonIcon}
      onChange={(event) => setColorScheme(event.currentTarget.checked ? 'dark' : 'light')}
      checked={colorScheme === 'dark'}
    />
  );
}
