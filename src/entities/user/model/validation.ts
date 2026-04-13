export const emailValidation = {
  validate: (value: string | undefined) => {
    if (!value) return 'Email cannot be empty';
    if (value.length < 3) return 'Email must be at least 3 char';
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
      return 'Invalid email address';
    }
    return true;
  },
};

export const birthdayValidation = {
  validate: (value: string | undefined) => {
    if (!value) return 'Birthday cannot be empty';
    const date = new Date(value);
    const now = new Date();
    if (isNaN(date.getTime())) return 'Invalid date';
    if (date > now) return 'Birthday cannot be in the future';
    return true;
  },
};

export const addressValidation = {
  validate: (value: string | undefined) => {
    if (!value) return 'Address cannot be empty';
    if (value.length < 3) return 'Address must be at least 3 char';
    return true;
  },
};
