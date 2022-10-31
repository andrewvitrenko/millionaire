export const getClassName = (active: boolean, completed: boolean) => {
  if (active) {
    return 'active';
  }

  if (completed) {
    return 'completed';
  }

  return '';
};
