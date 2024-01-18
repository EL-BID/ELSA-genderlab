'use client';

import { useState } from 'react';
import FormContext from './FormContext';

type FormContextProviderProps = {
  children: React.ReactNode;
};

export const FormContextProvider = ({ children }: FormContextProviderProps) => {
  const [form, setForm] = useState<any>(null);

  return <FormContext.Provider value={{ form, setForm }}>{children}</FormContext.Provider>;
};
