const ValidationMessage = {
  required: 'This field is required',
  minLength: (length: number) =>
    `This field must be at least ${length} characters`,
  maxLength: (length: number) =>
    `This field must be less than ${length} characters`,
} satisfies Record<string, string | ((length: number) => string)>;

type ValitionType = keyof typeof ValidationMessage;

class Validator<T> {
  private value: T;
  private errors: Record<ValitionType, string>;

  constructor(value: T) {
    this.value = value;
    this.errors = {
      required: ValidationMessage.required,
      minLength: ValidationMessage.minLength(3),
      maxLength: ValidationMessage.maxLength(8),
    };
  }

  private check(validationFn: () => void): this {
    validationFn();
    return this;
  }

  getErrors(): Record<ValitionType, string> {
    return this.errors;
  }

  required(errorMessage?: string): this {
    return this.check(() => {
      if (!this.value) {
        this.errors['required'] = errorMessage || ValidationMessage.required;
      }
    });
  }

  minLength(length: number, errorMessage?: string): this {
    return this.check(() => {
      if (this.value && this.value.toString().length < length) {
        this.errors['minLength'] =
          errorMessage || ValidationMessage.minLength(length);
      }
    });
  }

  maxLength(length: number, errorMessage?: string): this {
    return this.check(() => {
      if (this.value && this.value.toString().length > length) {
        this.errors['maxLength'] =
          errorMessage || ValidationMessage.maxLength(length);
      }
    });
  }
}

export default Validator;
