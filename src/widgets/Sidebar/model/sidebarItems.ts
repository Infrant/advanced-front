import React from 'react';
import MainPageIcon from 'shared/assets/icons/home-page.svg'
import AboutPageIcon from 'shared/assets/icons/about-page.svg'
import ProfilePageIcon from 'shared/assets/icons/profile-page.svg'

import {RoutePath} from 'shared/config/routeConfig/routeConfig';

export interface SidebarItemType {
  path: string
  Icon: React.VFC<React.SVGProps<SVGSVGElement>>
  translationKey: string
  authOnly?: boolean
}

export const SidebarItemsList: SidebarItemType[] = [
  {
    path: RoutePath.main,
    translationKey: 'main_page',
    Icon: MainPageIcon,
  },
  {
    path: RoutePath.about,
    translationKey: 'about_page',
    Icon: AboutPageIcon,
  },
  {
    path: RoutePath.profile,
    translationKey: 'profile_page',
    Icon: ProfilePageIcon,
    authOnly: true,
  },
]
