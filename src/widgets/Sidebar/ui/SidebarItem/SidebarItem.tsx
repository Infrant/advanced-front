import React, {FC, memo} from 'react';
import {classNames} from 'shared/lib/classNames/classNames';
import {AppLink, AppLinkTheme} from 'shared/ui/AppLink/AppLink';
import {useTranslation} from 'react-i18next';
import {SidebarItemType} from '../../model/sidebarItems';
import cls from './SidebarItem.module.scss'

interface SidebarItemProps {
  item: SidebarItemType
  collapsed: boolean
}

export const SidebarItem: FC<SidebarItemProps> = memo(({item, collapsed}) => {
  const {t} = useTranslation()
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
