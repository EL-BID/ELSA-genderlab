import { Text } from '@mantine/core';

type Props = {
  children: React.ReactNode;
};

export const QuestionTitle = ({ children }: Props) => (
  <Text size="xl" ta="center" c="white" fw={600}>
    {children}
  </Text>
);
