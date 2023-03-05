import React, {Suspense, useEffect} from 'react';
import {useDispatch} from 'react-redux';

import {useTheme} from 'app/providers/ThemeProvider';
import {classNames} from 'shared/lib/classNames/classNames';
import {AppRouter} from 'app/providers/router';
import {Navbar} from 'widgets/Navbar';
import {Sidebar} from 'widgets/Sidebar';
import {USER_LOCAL_STORAGE_KEY} from 'shared/const/localStorage';
import {userActions} from 'entities/User';

function App() {
  const {theme} = useTheme();
  const dispatch = useDispatch()

  useEffect(() => {
    const user = localStorage.getItem(USER_LOCAL_STORAGE_KEY) || ''
    dispatch(userActions.initAuthData(JSON.parse(user)))
  }, [dispatch])

  return (
    <div className={classNames('app', {}, [theme])}>
      <Suspense fallback=''>
        <Navbar />
        <div className='content-page'>
          <Sidebar />
          <AppRouter />
        </div>
      </Suspense>
    </div>
  );
}

export default App;
