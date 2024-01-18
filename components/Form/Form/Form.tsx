'use client';

import { ReactNode, useCallback, useEffect, useState } from 'react';
import { Carousel, Embla } from '@mantine/carousel';
import { Checkbox, Grid, Radio, Stack, Text } from '@mantine/core';
import { nprogress } from '@mantine/nprogress';
import { useForm } from '@mantine/form';
import { QuestionTitle } from '../QuestionTitle/QuestionTitle';
import { QuestionSlide } from '../QuestionSlide/QuestionSlide';
import { useFormContext } from '@/context';

import classes from './Form.module.css';
import { Results } from '@/components/Results/Results';

export const Form = () => {
  const [embla, setEmbla] = useState<Embla | null>(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  const [scoreLevel, setScoreLevel] = useState<'initial' | 'intermediate' | 'high'>('initial');

  const { setForm } = useFormContext();

  const validateField = (value: any) => (value === '' ? 'Este campo es requerido.' : null);
  const validateCheckbox = (value: any) => (value.length === 0 ? 'Este campo es requerido.' : null);

  const form = useForm({
    initialValues: {
      country: '',
      numberOfEmployees: '',
      doesHarassmentMeasurements: '',
      hasHarassmentPolicy: '',
      policyChannels: '',
      distributionMechanisms: '',
      hasComplaintsChannel: '',
      hasInvestigationDepartment: '',
      hasInvestigationProtocol: '',
      investigationProtocol: '',
      employeesHaveBeenTrained: '',
      leadersPercentageTrained: '',
      comitteePercentageTrained: '',
      humanResourcesPercentageTrained: '',
      employeesPercentageTrained: '',
      contractorsPercentageTrained: '',
    },
    validate: {
      country: validateField,
      numberOfEmployees: validateField,
      doesHarassmentMeasurements: validateField,
      hasHarassmentPolicy: validateField,
      policyChannels: validateCheckbox,
      distributionMechanisms: validateCheckbox,
      hasComplaintsChannel: validateField,
      hasInvestigationDepartment: validateField,
      hasInvestigationProtocol: validateField,
      investigationProtocol: validateCheckbox,
      employeesHaveBeenTrained: validateField,
      leadersPercentageTrained: validateField,
      comitteePercentageTrained: validateField,
      humanResourcesPercentageTrained: validateField,
      employeesPercentageTrained: validateField,
      contractorsPercentageTrained: validateField,
    },
  });

  useEffect(() => {
    let tmpScore = 0;

    if (form.values.doesHarassmentMeasurements === 'Sí.') tmpScore += 4;
    if (form.values.hasHarassmentPolicy === 'Sí.') tmpScore += 1;
    if (form.values.policyChannels.length > 0) {
      if (form.values.policyChannels.includes('Se le ha entregado en físico.')) tmpScore += 0.13;
      if (form.values.policyChannels.includes('Se le ha enviado por correo electrónico.'))
        tmpScore += 0.25;
      if (
        form.values.policyChannels.includes(
          'Se ha colgado en la intranet o una plataforma web de la organización.'
        )
      )
        tmpScore += 0.25;
      if (
        form.values.policyChannels.includes(
          'Se ha incluido la información en el proceso de inducción al personal.'
        )
      )
        tmpScore += 0.37;
    }
    if (form.values.distributionMechanisms.length > 0) {
      if (form.values.distributionMechanisms.includes('Se le recuerda periódicamente al personal.'))
        tmpScore += 0.34;
      if (
        form.values.distributionMechanisms.includes(
          'Se elaboran y distribuyen contenidos amigables para un mejor entendimiento de la política.'
        )
      )
        tmpScore += 0.33;
      if (
        form.values.distributionMechanisms.includes('Se realizan campañas de comunicación interna.')
      )
        tmpScore += 0.33;
    }
    if (form.values.hasComplaintsChannel === 'Sí.') tmpScore += 1;
    if (form.values.hasInvestigationDepartment === 'Sí.') tmpScore += 1;
    if (form.values.hasInvestigationProtocol === 'Sí.') tmpScore += 1;
    if (form.values.investigationProtocol.length > 0) {
      if (
        form.values.investigationProtocol.includes(
          'Informa a las personas que denuncian sobre el resultado de la investigación.'
        )
      )
        tmpScore += 0.25;
      if (form.values.investigationProtocol.includes('Tiene un plazo máximo de duración.'))
        tmpScore += 0.25;
      if (form.values.investigationProtocol.includes('Es confidencial.')) tmpScore += 0.25;
      if (form.values.investigationProtocol.includes('Se toman medidas de protección.'))
        tmpScore += 0.25;
    }
    if (form.values.employeesHaveBeenTrained === 'Sí.') tmpScore += 1;
    if (form.values.leadersPercentageTrained === 'Más del 80%.') tmpScore += 1;
    if (form.values.leadersPercentageTrained === 'Entre el 50% y el 80%.') tmpScore += 0.2;
    if (form.values.comitteePercentageTrained === 'Más del 80%.') tmpScore += 1;
    if (form.values.comitteePercentageTrained === 'Entre el 50% y el 80%.') tmpScore += 0.2;
    if (form.values.humanResourcesPercentageTrained === 'Más del 80%.') tmpScore += 1;
    if (form.values.humanResourcesPercentageTrained === 'Entre el 50% y el 80%.') tmpScore += 0.2;
    if (form.values.employeesPercentageTrained === 'Más del 80%.') tmpScore += 1;
    if (form.values.employeesPercentageTrained === 'Entre el 50% y el 80%.') tmpScore += 0.2;
    if (form.values.contractorsPercentageTrained === 'Más del 80%.') tmpScore += 1;
    if (form.values.contractorsPercentageTrained === 'Entre el 50% y el 80%.') tmpScore += 0.2;

    tmpScore = Math.round((tmpScore / 17) * 100);

    if (tmpScore <= 55) setScoreLevel('initial');
    else if (tmpScore <= 85) setScoreLevel('intermediate');
    else setScoreLevel('high');
  }, [form]);

  const handleEmbla = useCallback(() => {
    if (!embla) return;
    const progress = Math.max(0, Math.min(1, embla.scrollProgress()));
    nprogress.set(progress * 100);
    setCurrentSlide(embla.selectedScrollSnap());
  }, [embla]);

  useEffect(() => {
    if (embla) {
      embla.on('scroll', handleEmbla);
      handleEmbla();
    }
  }, [embla]);

  useEffect(() => {
    setForm(form);
  }, [form]);

  const radioPercentages = (): ReactNode => (
    <Stack>
      <Radio value="Más del 80%." label="Más del 80%." />
      <Radio value="Entre el 50% y el 80%." label="Entre el 50% y el 80%." />
      <Radio value="Menos del 50%." label="Menos del 50%." />
      <Radio value="No han recibido capacitación." label="No han recibido capacitación." />
    </Stack>
  );

  return (
    <Stack gap="md">
      <Text c="white" ta="center">
        {currentSlide + 1} de {embla?.slideNodes().length}
      </Text>
      <Carousel getEmblaApi={setEmbla} withControls={false} draggable={false}>
        <QuestionSlide embla={embla} isInfoSlide>
          <Stack gap="md">
            <Grid gutter="md">
              <Grid.Col span={{ base: 12, md: 3 }}>
                <Text className={classes.bigText}>¿Qué es?</Text>
              </Grid.Col>
              <Grid.Col span={{ base: 12, md: 9 }}>
                <Text className={classes.smallText}>
                  Un instrumento para medir el nivel de prevención que tiene tu organización en
                  acoso sexual laboral.
                </Text>
              </Grid.Col>
              <Grid.Col span={{ base: 12, md: 3 }}>
                <Text className={classes.bigText}>¿Cómo funciona?</Text>
              </Grid.Col>
              <Grid.Col span={{ base: 12, md: 9 }}>
                <Text className={classes.smallText}>
                  Mediante un cuestionario de 10 preguntas conocerás el nivel de prevención del
                  acoso sexual laboral en el que se encuentra tu organización.
                </Text>
              </Grid.Col>
              <Grid.Col span={{ base: 12, md: 3 }}>
                <Text className={classes.bigText}>¿Por qué?</Text>
              </Grid.Col>
              <Grid.Col span={{ base: 12, md: 9 }}>
                <Text className={classes.smallText}>
                  El acoso sexual laboral ocurre en todas las organizaciones, y para enfrentarlo se
                  debe adoptar una postura preventiva. Tener un sistema de prevención robusto es un
                  paso muy importante, pero no suficiente. Esta medición te permitirá entender mejor
                  a tu organización y, a partir de ello, tomar acción.
                </Text>
              </Grid.Col>
            </Grid>
          </Stack>
        </QuestionSlide>
        <QuestionSlide embla={embla} isInfoSlide>
          <Stack gap="md">
            <Grid gutter="md">
              <Grid.Col span={{ base: 12, md: 3 }}>
                <Text className={classes.bigText}>¿Por qué?</Text>
              </Grid.Col>
              <Grid.Col span={{ base: 12, md: 9 }}>
                <Text className={classes.smallText}>
                  El acoso sexual laboral ocurre en todas las organizaciones, y para enfrentarlo se
                  debe adoptar una postura preventiva. Tener un sistema de prevención robusto es un
                  paso muy importante, pero no suficiente. Esta medición te permitirá entender mejor
                  a tu organización y, a partir de ello, tomar acción.
                </Text>
              </Grid.Col>
            </Grid>
            <Grid gutter="md">
              <Grid.Col span={{ base: 12, md: 3 }}>
                <Text className={classes.bigText}>Ten en cuenta</Text>
              </Grid.Col>
              <Grid.Col span={{ base: 12, md: 9 }}>
                <Stack gap="md">
                  <Text className={classes.smallText}>
                    El acoso sexual laboral es toda conducta de naturaleza sexual o sexista no
                    deseada que genera incomodidad a la persona que la recibe que se da en el marco
                    de una relación laboral.
                  </Text>
                  <Text className={classes.smallText}>
                    De acuerdo a la normativa de cada país, se le puede llamar acoso sexual laboral
                    u hostigamiento sexual laboral. En el presente cuestionario, nos referimos a
                    estas conductas como <b>&quot;acoso sexual laboral&quot;</b>.
                  </Text>
                  <Text className={classes.smallText}>
                    Este cuestionario te permitirá tener una primera aproximación al nivel de
                    prevención del acoso sexual laboral. Recuerda que tomar acción contra estas
                    conductas, requiere tomar acción preventiva.
                  </Text>
                </Stack>
              </Grid.Col>
            </Grid>
          </Stack>
        </QuestionSlide>
        <QuestionSlide id="doesHarassmentMeasurements" embla={embla}>
          <QuestionTitle>
            ¿Tu organización realiza una medición participativa anual sobre acoso sexual laboral?
          </QuestionTitle>
          <Radio.Group {...form.getInputProps('doesHarassmentMeasurements')} c="white">
            <Stack>
              <Radio value="Sí." label="Sí." />
              <Radio value="No." label="No." />
            </Stack>
          </Radio.Group>
        </QuestionSlide>
        <QuestionSlide id="hasHarassmentPolicy" embla={embla}>
          <QuestionTitle>
            ¿Tu organización cuenta con una política de prevención del acoso sexual laboral?
          </QuestionTitle>
          <Radio.Group {...form.getInputProps('hasHarassmentPolicy')} c="white">
            <Stack>
              <Radio value="Sí." label="Sí." />
              <Radio value="No." label="No." />
            </Stack>
          </Radio.Group>
        </QuestionSlide>
        {form.values.hasHarassmentPolicy === 'Sí.' && (
          <>
            <QuestionSlide id="policyChannels" embla={embla}>
              <QuestionTitle>¿Cómo se ha distribuido la política al personal?</QuestionTitle>
              <Checkbox.Group {...form.getInputProps('policyChannels')} c="white">
                <Stack>
                  <Checkbox
                    label="Se le ha entregado en físico."
                    value="Se le ha entregado en físico."
                  />
                  <Checkbox
                    label="Se le ha enviado por correo electrónico."
                    value="Se le ha enviado por correo electrónico."
                  />
                  <Checkbox
                    label="Se ha colgado en la intranet o una plataforma web de la organización."
                    value="Se ha colgado en la intranet o una plataforma web de la organización."
                  />
                  <Checkbox
                    label="Se ha incluido la información en el proceso de inducción al personal."
                    value="Se ha incluido la información en el proceso de inducción al personal."
                  />
                </Stack>
              </Checkbox.Group>
            </QuestionSlide>
            <QuestionSlide id="distributionMechanisms" embla={embla}>
              <QuestionTitle>
                ¿Qué otros mecanismos se utilizan para distribuir la política?
              </QuestionTitle>
              <Checkbox.Group {...form.getInputProps('distributionMechanisms')} c="white">
                <Stack>
                  <Checkbox
                    label="Se le recuerda periódicamente al personal."
                    value="Se le recuerda periódicamente al personal."
                  />
                  <Checkbox
                    label="Se elaboran y distribuyen contenidos amigables para un mejor entendimiento de la política."
                    value="Se elaboran y distribuyen contenidos amigables para un mejor entendimiento de la política."
                  />
                  <Checkbox
                    label="Se realizan campañas de comunicación interna."
                    value="Se realizan campañas de comunicación interna."
                  />
                </Stack>
              </Checkbox.Group>
            </QuestionSlide>
          </>
        )}
        <QuestionSlide id="hasComplaintsChannel" embla={embla}>
          <QuestionTitle>
            ¿Tu organización cuenta con un canal de denuncia específico para casos de acoso sexual
            laboral?
          </QuestionTitle>
          <Radio.Group {...form.getInputProps('hasComplaintsChannel')} c="white">
            <Stack>
              <Radio value="Sí." label="Sí." />
              <Radio value="No." label="No." />
            </Stack>
          </Radio.Group>
        </QuestionSlide>
        <QuestionSlide id="hasInvestigationDepartment" embla={embla}>
          <QuestionTitle>
            ¿En tu organización existe alguna instancia o comité (de intervención, ética,
            convivencia u otro) para investigar y resolver casos de acoso sexual laboral?
          </QuestionTitle>
          <Radio.Group {...form.getInputProps('hasInvestigationDepartment')} c="white">
            <Stack>
              <Radio value="Sí." label="Sí." />
              <Radio value="No." label="No." />
            </Stack>
          </Radio.Group>
        </QuestionSlide>
        <QuestionSlide id="hasInvestigationProtocol" embla={embla}>
          <QuestionTitle>
            ¿Tu organización cuenta con un procedimiento para investigar casos de acoso sexual
            laboral?
          </QuestionTitle>
          <Radio.Group {...form.getInputProps('hasInvestigationProtocol')} c="white">
            <Stack>
              <Radio value="Sí." label="Sí." />
              <Radio value="No." label="No." />
            </Stack>
          </Radio.Group>
        </QuestionSlide>
        {form.values.hasInvestigationProtocol === 'Sí.' && (
          <QuestionSlide id="investigationProtocol" embla={embla}>
            <QuestionTitle>El proceso de investigación:</QuestionTitle>
            <Checkbox.Group {...form.getInputProps('investigationProtocol')} c="white">
              <Stack>
                <Checkbox
                  label="Informa a las personas que denuncian sobre el resultado de la investigación."
                  value="Informa a las personas que denuncian sobre el resultado de la investigación."
                />
                <Checkbox
                  label="Tiene un plazo máximo de duración."
                  value="Tiene un plazo máximo de duración."
                />
                <Checkbox label="Es confidencial." value="Es confidencial." />
                <Checkbox
                  label="Se toman medidas de protección."
                  value="Se toman medidas de protección."
                />
              </Stack>
            </Checkbox.Group>
          </QuestionSlide>
        )}
        <QuestionSlide id="employeesHaveBeenTrained" embla={embla}>
          <QuestionTitle>
            ¿Tu organización ha realizado capacitaciones a su personal en prevención del acoso
            sexual laboral en los últimos 12 meses?
          </QuestionTitle>
          <Radio.Group {...form.getInputProps('employeesHaveBeenTrained')} c="white">
            <Stack>
              <Radio value="Sí." label="Sí." />
              <Radio value="No." label="No." />
            </Stack>
          </Radio.Group>
        </QuestionSlide>
        {form.values.employeesHaveBeenTrained === 'Sí.' && (
          <>
            <QuestionSlide id="leadersPercentageTrained" embla={embla}>
              <QuestionTitle>
                ¿A qué porcentaje de Líderes de la organización (Niveles 1 y 2 de tu estructuras
                organizacional) han capacitado en prevención del acoso sexual laboral en los últimos
                12 meses?
              </QuestionTitle>
              <Radio.Group {...form.getInputProps('leadersPercentageTrained')} c="white">
                {radioPercentages()}
              </Radio.Group>
            </QuestionSlide>
            <QuestionSlide id="comitteePercentageTrained" embla={embla}>
              <QuestionTitle>
                ¿A qué porcentaje de Comité de Intervención o instancia encargada de investigar y
                resolver casos de acoso sexual laboral han capacitado en prevención del acoso sexual
                laboral en los últimos 12 meses?
              </QuestionTitle>
              <Radio.Group {...form.getInputProps('comitteePercentageTrained')} c="white">
                {radioPercentages()}
              </Radio.Group>
            </QuestionSlide>
            <QuestionSlide id="humanResourcesPercentageTrained" embla={embla}>
              <QuestionTitle>
                ¿A qué porcentaje de Recursos Humanos o Gestión del Talento han capacitado en
                prevención del acoso sexual laboral en los últimos 12 meses?
              </QuestionTitle>
              <Radio.Group {...form.getInputProps('humanResourcesPercentageTrained')} c="white">
                {radioPercentages()}
              </Radio.Group>
            </QuestionSlide>
            <QuestionSlide id="employeesPercentageTrained" embla={embla}>
              <QuestionTitle>
                ¿A qué porcentaje de Trabajadores/as en general han capacitado en prevención del
                acoso sexual laboral en los últimos 12 meses?
              </QuestionTitle>
              <Radio.Group {...form.getInputProps('employeesPercentageTrained')} c="white">
                {radioPercentages()}
              </Radio.Group>
            </QuestionSlide>
          </>
        )}
        <QuestionSlide id="contractorsPercentageTrained" embla={embla}>
          <QuestionTitle>
            ¿A qué porcentaje de contratistas ha capacitado tu organización en los últimos 12 meses?
          </QuestionTitle>
          <Radio.Group {...form.getInputProps('contractorsPercentageTrained')} c="white">
            {radioPercentages()}
          </Radio.Group>
        </QuestionSlide>
        <QuestionSlide embla={embla} hideButtons>
          <Results level={scoreLevel} />
        </QuestionSlide>
      </Carousel>
    </Stack>
  );
};
