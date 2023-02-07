import React, {Suspense} from 'react';
import {Link, Route, Routes} from "react-router-dom";

import './styles/index.scss'
import {useTheme} from "app/providers/ThemeProvider";
import {classNames} from "shared/lib/classNames/classNames";
import {AboutPage} from "pages/AboutPage";
import {MainPage} from "pages/MainPage";

const App = () => {
const {theme, toggleTheme} = useTheme()

  return (
    <div className={classNames('app', {},[theme])}>
      <button onClick={toggleTheme}>theme</button>
      <Link to={'/about'}>About</Link>
      <Link to={'/'}>Main</Link>
     <Suspense fallback={'Loading...'}>
       <Routes>
         <Route path={'/about'} element={<AboutPage/>}/>
         <Route path={'/'} element={<MainPage/>}/>
       </Routes>
     </Suspense>
    </div>
  );
};

export default App;