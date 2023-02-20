import React, {FC} from 'react';
import {Theme, useTheme} from 'app/providers/ThemeProvider';
import {classNames} from 'shared/lib/classNames/classNames';
import ThemeLightIcon from 'shared/assets/icons/theme-light.svg'
import ThemeDarkIcon from 'shared/assets/icons/theme-dark.svg'
import {Button, ButtonVariant} from 'shared/ui/Button/Button';
import cls from './ThemeSwitcher.module.scss'

interface ThemeSwitcherProps {
  className?: string
}

export const ThemeSwitcher:FC<ThemeSwitcherProps> = ({className}) => {
  const {theme, toggleTheme} = useTheme()

  return (
    <Button
      className={classNames(cls.themeSwitcher, {}, [className])}
      variant={ButtonVariant.CLEAR}
      onClick={toggleTheme}
    >
      {theme === Theme.light ? <ThemeLightIcon /> : <ThemeDarkIcon />}
    </Button>
  );
};
