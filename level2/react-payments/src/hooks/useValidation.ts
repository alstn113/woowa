import { useState } from 'react';

type FieldValues<T> = {
  [Key in keyof T]: T[Key];
};

type ValidationFn<T> = (value: T) => string | boolean;

type FieldValidators<T> = {
  [Key in keyof T]: ValidationFn<T[Key]>;
};

type FieldErrors<T> = {
  [Key in keyof T]: string;
};

interface UseValidationResult<T> {
  values: FieldValues<T>;
  errors: FieldErrors<T>;
  validateField: <K extends keyof T>(fieldName: K) => void;
  validateAllFields: () => void;
  isValid: boolean;
}

const useValidation = <T>(
  initialValues: FieldValues<T>,
  validators: FieldValidators<T>,
): UseValidationResult<T> => {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState<FieldErrors<T>>({} as FieldErrors<T>);

  const validateField = <K extends keyof T>(fieldName: K) => {
    const error = validators[fieldName](values[fieldName]);
    setErrors((prevErrors) => ({ ...prevErrors, [fieldName]: error }));
  };

  const validateAllFields = () => {
    const fieldErrors: FieldErrors<T> = {} as FieldErrors<T>;

    for (const fieldName in validators) {
      const result = validators[fieldName](values[fieldName]);
      if (typeof result === 'string') {
        fieldErrors[fieldName] = result;
      }
    }

    setErrors(fieldErrors);
  };

  const isValid = Object.values(errors).every((error) => !error);

  return { validateField, errors, isValid, validateAllFields, values };
};

export default useValidation;
