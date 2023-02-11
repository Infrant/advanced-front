import React, {Suspense} from 'react';
import {Route, Routes} from 'react-router-dom';
import {routeConfig} from 'shared/config/routeConfig/routeConfig';

export const AppRouter = () => (
  // eslint-disable-next-line i18next/no-literal-string
  <Suspense fallback='Loading...'>
    <Routes>
      {Object.values(routeConfig).map(({path, element}) => (
        <Route
          key={path}
          path={path}
          element={<div className='page-wrapper'>{element}</div>}
        />
      ))}
    </Routes>
  </Suspense>
);
