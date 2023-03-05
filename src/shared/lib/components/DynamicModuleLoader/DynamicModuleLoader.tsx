import {FC, useEffect} from 'react';
import {useDispatch, useStore} from 'react-redux';
import {ReduxStoreWithManager, StateSchemaKey} from 'app/providers/StoreProvider';
import {Reducer} from '@reduxjs/toolkit';

export type ReducersList = {
  [reducerKey in StateSchemaKey]?: Reducer;
};

interface DynamicModuleLoaderProps {
  reducers: ReducersList
  removeAfterUnmount?: boolean
}

export const DynamicModuleLoader: FC<DynamicModuleLoaderProps> = (props) => {
  const {
    children,
    reducers,
    removeAfterUnmount,
  } = props

  const dispatch = useDispatch()
  const store = useStore() as ReduxStoreWithManager

  useEffect(() => {
    Object.entries(reducers).forEach(([reducerKey, reducer]) => {
      store.reducerManager.add(reducerKey as StateSchemaKey, reducer)
      dispatch({type: `@INIT ${reducerKey} reducer`})
    })
    return () => {
      if (!removeAfterUnmount) return
      Object.entries(reducers).forEach(([reducerKey]) => {
        store.reducerManager.remove(reducerKey as StateSchemaKey)
        dispatch({type: `@REMOVE ${reducerKey} reducer`})
      })
    }
  }, [])

  return (
    // eslint-disable-next-line react/jsx-no-useless-fragment
    <>
      {children}
    </>
  )
};
