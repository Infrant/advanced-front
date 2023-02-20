import React, {FC, useState} from 'react';
import {classNames} from 'shared/lib/classNames/classNames';
import {Button, ButtonSize, ButtonVariant} from 'shared/ui/Button/Button';
import {ThemeSwitcher} from 'shared/ui/ThemeSwitcher/ThemeSwitcher';
import {LangSwitcher} from 'shared/ui/LangSwitcher/LangSwitcher';
import {useTranslation} from 'react-i18next';
import {AppLink, AppLinkTheme} from 'shared/ui/AppLink/AppLink';
import {RoutePath} from 'shared/config/routeConfig/routeConfig';
import MainPageIcon from 'shared/assets/icons/home-page.svg'
import AboutPageIcon from 'shared/assets/icons/about-page.svg'
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
        square
        size={ButtonSize.L}
        variant={ButtonVariant.BACKGROUND_INVERTED}
        className={cls.collapseBtn}
        onClick={onToggle}
      >
        {collapsed ? '>' : '<'}
      </Button>
      <div className={cls.linkItems}>
        <AppLink
          theme={AppLinkTheme.secondary}
          to={RoutePath.main}
          className={cls.link}
        >
          <MainPageIcon className={classNames(cls.icon, {[cls.collapseIcon]: collapsed})} />
          <span className={cls.linkText}>{t('main_page')}</span>
        </AppLink>
        <AppLink
          theme={AppLinkTheme.secondary}
          to={RoutePath.about}
          className={cls.link}
        >
          <AboutPageIcon className={classNames(cls.icon, {[cls.collapseIcon]: collapsed})} />
          <span className={cls.linkText}>{t('about_page')}</span>
        </AppLink>
      </div>
      <div className={cls.switchers}>
        <ThemeSwitcher />
        <LangSwitcher short={collapsed} />
      </div>
    </div>
  );
};
