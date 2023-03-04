import React, {FC, memo, useState} from 'react';
import {classNames} from 'shared/lib/classNames/classNames';
import {Button, ButtonSize, ButtonVariant} from 'shared/ui/Button/Button';
import {ThemeSwitcher} from 'shared/ui/ThemeSwitcher/ThemeSwitcher';
import {LangSwitcher} from 'shared/ui/LangSwitcher/LangSwitcher';
import {useTranslation} from 'react-i18next';
import {SidebarItemsList} from '../../model/sidebarItems';
import {SidebarItem} from '../SidebarItem/SidebarItem';
import cls from './Sidebar.module.scss'

interface SidebarProps {
  className?: string
}

export const Sidebar: FC<SidebarProps> = memo(({className}) => {
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
        square
        size={ButtonSize.L}
        variant={ButtonVariant.BACKGROUND_INVERTED}
        className={cls.collapseBtn}
        onClick={onToggle}
      >
        {collapsed ? '>' : '<'}
      </Button>
      <div className={cls.linkItems}>
        {SidebarItemsList.map((item) => (
          <SidebarItem item={item} collapsed={collapsed} key={item.path} />
        ))}
      </div>
      <div className={cls.switchers}>
        <ThemeSwitcher />
        <LangSwitcher short={collapsed} />
      </div>
    </div>
  );
});
