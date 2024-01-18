import { Carousel, Embla } from '@mantine/carousel';
import { Button, Flex } from '@mantine/core';
import classes from './QuestionSlide.module.css';
import { useFormContext } from '@/context';

type Props = {
  embla: Embla | null;
  children: React.ReactNode;
  id?: string;
  isInfoSlide?: boolean;
  hideButtons?: boolean;
};

export const QuestionSlide = ({
  embla,
  children,
  id,
  isInfoSlide = false,
  hideButtons = false,
}: Props) => {
  const { form } = useFormContext();

  const handleNext = () => {
    const currentSlide = embla?.slideNodes()[embla.selectedScrollSnap() || 0];

    if (isInfoSlide) {
      embla?.scrollNext();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (currentSlide) {
      form.validateField(id);

      if (form.isValid(id)) embla?.scrollNext();
    }
  };

  const buttons = () => (
    <Flex justify="flex-end" gap="sm">
      <Button onClick={handleNext} className={classes.nextButton}>
        Siguiente
      </Button>
    </Flex>
  );

  const className = isInfoSlide ? `${classes.carouselSlide} info` : classes.carouselSlide;

  return (
    <Carousel.Slide className={className}>
      {children}
      {!hideButtons && buttons()}
    </Carousel.Slide>
  );
};
