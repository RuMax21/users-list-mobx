import type { FormFieldProps } from './types';

export function FormField({ label, error, ...inputProps }: FormFieldProps) {
  return (
    <div>
      <label>{label}</label>
      <input type="text" {...inputProps} />
      {error && <span>{error.message}</span>}
    </div>
  );
}
