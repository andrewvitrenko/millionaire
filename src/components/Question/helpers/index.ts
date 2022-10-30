import { UTF_OFFSET } from '../constants';

export const getOptionLetter = (index: number) =>
  String.fromCharCode(index + UTF_OFFSET);
