import {FC} from "react";
import {Link, LinkProps} from "react-router-dom";

import {classNames} from "shared/lib/classNames/classNames";
import cls from './AppLink.module.scss'

export enum AppLinkTheme {
  primary = 'primary',
  secondary = 'secondary',
}

interface AppLinkProps extends LinkProps {
  className?: string
  theme?: AppLinkTheme
}

export const AppLink: FC<AppLinkProps> = (props) => {
  const {
    className,
    children,
    to,
    theme = AppLinkTheme.primary,
    ...otherProps
  } = props

  return (
    <Link
      {...otherProps}
      className={classNames(cls.AppLink, {}, [className, cls[theme]])}
      to={to}
    >
      {children}
    </Link>
  );
};