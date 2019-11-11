
import { ApplicationState } from '../index';

export const setError = (
  prevState: ApplicationState,
  error?: string
) => {
  return { ...prevState, error };
};
