import React, {FC} from 'react';
import {classNames} from 'shared/lib/classNames/classNames';
import {AppLink, AppLinkTheme} from 'shared/ui/AppLink/AppLink';
import cls from './Navbar.module.scss'

interface NavbarProps {
  className?: string
}

export const Navbar:FC<NavbarProps> = ({className}) => (
  <div className={classNames(cls.Navbar, {}, [className])}>
    <div className={cls.links}>
      {/* eslint-disable-next-line i18next/no-literal-string */}
      <AppLink theme={AppLinkTheme.secondary} to='/about'>About</AppLink>
      {/* eslint-disable-next-line i18next/no-literal-string */}
      <AppLink theme={AppLinkTheme.secondary} to='/'>Main</AppLink>
    </div>
  </div>
);
