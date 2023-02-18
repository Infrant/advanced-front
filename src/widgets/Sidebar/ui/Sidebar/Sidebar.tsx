import React, {FC, useState} from 'react';
import {classNames} from 'shared/lib/classNames/classNames';
import {Button} from 'shared/ui/Button/Button';
import {ThemeSwitcher} from 'shared/ui/ThemeSwitcher/ThemeSwitcher';
import {LangSwitcher} from 'shared/ui/LangSwitcher/LangSwitcher';
import {useTranslation} from 'react-i18next';
import cls from './Sidebar.module.scss'

interface SidebarProps {
  className?: string
}

export const Sidebar: FC<SidebarProps> = ({className}) => {
  const [collapsed, setCollapsed] = useState(false)
  const {t} = useTranslation()

  const onToggle = () => setCollapsed((prevState) => !prevState)

  return (
    <div
      data-testid='sidebar'
      className={classNames(
        cls.sidebar,
        {[cls.collapsed]: collapsed},
        [className],
      )}
    >
      <Button
        data-testid='sidebar-toggle'
        onClick={onToggle}
      >
        {t('toggle')}
      </Button>
      <div className={cls.switchers}>
        <ThemeSwitcher />
        <LangSwitcher />
      </div>
    </div>
  );
};
