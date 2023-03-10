import React, {FC, memo} from 'react';
import {classNames} from 'shared/lib/classNames/classNames';
import {AppLink, AppLinkTheme} from 'shared/ui/AppLink/AppLink';
import {useTranslation} from 'react-i18next';
import {useSelector} from 'react-redux';
import {getUserAuthData} from 'entities/User';
import {SidebarItemType} from '../../model/sidebarItems';
import cls from './SidebarItem.module.scss'

interface SidebarItemProps {
  item: SidebarItemType
  collapsed: boolean
}

export const SidebarItem: FC<SidebarItemProps> = memo(({item, collapsed}) => {
  const {t} = useTranslation()

  const isAuth = useSelector(getUserAuthData)

  if (item.authOnly && !isAuth) return null

  return (
    <AppLink
      theme={AppLinkTheme.secondary}
      to={item.path}
      className={classNames(cls.link, {[cls.collapsedLink]: collapsed}, [])}
    >
      <item.Icon className={cls.icon} />
      <span className={cls.linkText}>{t(item.translationKey)}</span>
    </AppLink>
  );
});
