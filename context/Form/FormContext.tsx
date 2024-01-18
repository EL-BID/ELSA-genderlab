'use client';

import { createContext, useContext } from 'react';

type FormContextProps = {
  form: any;
  setForm: (form: any) => void;
};

const FormContext = createContext<FormContextProps | undefined>(undefined);

export const useFormContext = () => {
  const context = useContext(FormContext);
  if (context === undefined) {
    throw new Error('useFormContext must be used within a FormProvider');
  }
  return context;
};

export default FormContext;
