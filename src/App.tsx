import React, {Suspense, useContext, useState} from 'react';
import {Link, Route, Routes} from "react-router-dom";

import './styles/index.scss'
import {AboutPageLazy} from "./pages/AboutPage/AboutPage.lazy";
import {MainPageLazy} from "./pages/MainPage/MainPage.lazy";
import {useTheme} from "./theme/useTheme";
import {classNames} from "./helpers/classNames/classNames";

const App = () => {
const {theme, toggleTheme} = useTheme()

  return (
    <div className={classNames('app', {},[theme])}>
      <button onClick={toggleTheme}>theme</button>
      <Link to={'/about'}>About</Link>
      <Link to={'/'}>Main</Link>
     <Suspense fallback={'Loading...'}>
       <Routes>
         <Route path={'/about'} element={<AboutPageLazy/>}/>
         <Route path={'/'} element={<MainPageLazy/>}/>
       </Routes>
     </Suspense>
    </div>
  );
};

export default App;