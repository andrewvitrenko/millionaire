export const getClassName = (active: boolean, completed: boolean) => {
  if (active) {
    return 'active';
  } else if (completed) {
    return 'completed';
  } else {
    return '';
  }
};
