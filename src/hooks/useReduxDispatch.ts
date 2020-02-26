import Types from 'MyTypes';
import { ThunkDispatch } from 'redux-thunk';
import { useDispatch } from 'react-redux';

type ReduxDispatch = ThunkDispatch<Types.RootState, any, any>;
export function useReduxDispatch(): ReduxDispatch {
  return useDispatch<ReduxDispatch>();
}