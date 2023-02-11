import React, {FC, useState} from 'react';
import {classNames} from 'shared/lib/classNames/classNames';
import {ThemeSwitcher} from 'shared/ui/ThemeSwitcher';
import {LangSwitcher} from 'shared/ui/LangSwitcher';
import {Button} from 'shared/ui/Button/ui/Button';
import cls from './Sidebar.module.scss'

interface SidebarProps {
  className?: string
}

export const Sidebar: FC<SidebarProps> = ({className}) => {
  const [collapsed, setCollapsed] = useState(false)

  const onToggle = () => setCollapsed((prevState) => !prevState)

  return (
    <div className={classNames(
      cls.sidebar,
      {[cls.collapsed]: collapsed},
      [className],
    )}
    >
      {/* eslint-disable-next-line i18next/no-literal-string */}
      <Button onClick={onToggle}>
        toggle
      </Button>
      <div className={cls.switchers}>
        <ThemeSwitcher />
        <LangSwitcher />
      </div>
    </div>
  );
};
