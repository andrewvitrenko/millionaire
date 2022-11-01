export const getOptionClassName = (
  selected: boolean,
  correct: boolean,
  validated: boolean,
): string => {
  if (selected && !validated) {
    return 'selected';
  }

  if (correct && validated) {
    return 'correct';
  }

  if (selected && validated && !correct) {
    return 'wrong';
  }

  return '';
};
