export const emailValidation = {
  pattern: {
    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    message: 'Invalid email address',
  },
};

export const birthdayValidation = {
  validate: (value: string) => {
    const date = new Date(value);
    const now = new Date();
    if (isNaN(date.getTime())) return 'Invalid date';
    if (date > now) return 'Birthday cannot be in the future';
    return true;
  },
};

export const addressValidation = {
  minLength: {
    value: 3,
    message: 'Address must be at least 3 char',
  },
};
