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

type ReducersListEntry = [StateSchemaKey, Reducer]

export const DynamicModuleLoader: FC<DynamicModuleLoaderProps> = (props) => {
  const {
    children,
    reducers,
    removeAfterUnmount,
  } = props
  const dispatch = useDispatch()
  const store = useStore() as ReduxStoreWithManager
  useEffect(() => {
    Object.entries(reducers).forEach(([reducerKey, reducer]: ReducersListEntry) => {
      dispatch({type: `@INIT ${reducerKey} reducer`})
      store.reducerManager.add(reducerKey, reducer)
    })
    return () => {
      if (!removeAfterUnmount) return
      Object.entries(reducers).forEach(([reducerKey]: ReducersListEntry) => {
        dispatch({type: `@REMOVE ${reducerKey} reducer`})
        store.reducerManager.remove(reducerKey)
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
