import {FC} from 'react';
import {Provider} from 'react-redux';
import {createReduxStore} from 'app/providers/StoreProvider';
import {DeepPartial, ReducersMapObject} from '@reduxjs/toolkit';
import {useNavigate} from 'react-router-dom';
import {StateSchema} from '../config/StateSchema';

interface StoreProviderProps {
  initialState?: DeepPartial<StateSchema>
  asyncReducers?: DeepPartial<ReducersMapObject<StateSchema>>
}

export const StoreProvider: FC<StoreProviderProps> = (props) => {
  const {children, initialState, asyncReducers} = props

  const navigate = useNavigate()

  const store = createReduxStore(
    initialState as StateSchema,
    asyncReducers as ReducersMapObject,
    navigate,
  )

  return (
    <Provider store={store}>
      {children}
    </Provider>
  )
}
