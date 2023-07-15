import { useState } from 'react';

type FieldValues<T> = {
  [Key in keyof T]: T[Key];
};

type ValidationFn<T> = (value: T) => boolean;

type FieldValidators<T> = {
  [Key in keyof T]: ValidationFn<T[Key]>;
};

type FieldErrors<T> = {
  [Key in keyof T]: string;
};

interface UseValidationResult<T> {
  validationResult: FieldErrors<T>;
  validateField: <K extends keyof T>(fieldName: K, value: T[K]) => boolean;
  validateAllFields: (values: FieldValues<T>) => boolean;
}

const useValidation = <T>(
  validators: FieldValidators<T>,
): UseValidationResult<T> => {
  const [errors, setErrors] = useState<FieldErrors<T>>({} as FieldErrors<T>);

  const validateField = <K extends keyof T>(fieldName: K, value: T[K]) => {
    try {
      validators[fieldName](value);
      setErrors((prevErrors) => {
        const newErrors = { ...prevErrors };
        delete newErrors[fieldName];
        return newErrors;
      });

      return true;
    } catch (error) {
      const e = error as Error;

      setErrors((prevErrors) => ({
        ...prevErrors,
        [fieldName]: e.message,
      }));
    }
    return false;
  };

  const validateAllFields = (values: FieldValues<T>): boolean => {
    for (const fieldName in validators) {
      try {
        validators[fieldName](values[fieldName]);
        setErrors((prevErrors) => {
          const newErrors = { ...prevErrors };
          delete newErrors[fieldName];
          return newErrors;
        });
      } catch (error) {
        const e = error as Error;
        setErrors((prevErrors) => ({
          ...prevErrors,
          [fieldName]: e.message,
        }));
      }
    }

    return Object.keys(errors).length === 0;
  };

  return { validationResult: errors, validateField, validateAllFields };
};

export default useValidation;
