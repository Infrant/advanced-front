import React, {FC} from 'react';
import {Theme, useTheme} from 'app/providers/ThemeProvider';
import {classNames} from 'shared/lib/classNames/classNames';
import ThemeLightIcon from 'shared/assets/icons/theme-light.svg'
import ThemeDarkIcon from 'shared/assets/icons/theme-dark.svg'
import {Button, ThemeButton} from 'shared/ui/Button/ui/Button';
import cls from './ThemeSwitcher.module.scss'

interface ThemeSwitcherProps {
  className?: string
}

export const ThemeSwitcher:FC<ThemeSwitcherProps> = ({className}) => {
  const {theme, toggleTheme} = useTheme()

  return (
    <Button
      className={classNames(cls.themeSwitcher, {}, [className])}
      theme={ThemeButton.CLEAR}
      onClick={toggleTheme}
    >
      {theme === Theme.light ? <ThemeLightIcon /> : <ThemeDarkIcon />}
    </Button>
  );
};
