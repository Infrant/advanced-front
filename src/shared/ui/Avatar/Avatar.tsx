import {CSSProperties, FC, useMemo} from 'react';
import {classNames} from 'shared/lib/classNames/classNames';
import {useTranslation} from 'react-i18next';
import cls from './Avatar.module.scss'

interface AvatarProps {
  className?: string
  src?: string
  size?: number
}

export const Avatar: FC<AvatarProps> = (props) => {
  const {
    className,
    src,
    size = 50,
  } = props

  const avatarStyles = useMemo<CSSProperties>(() => ({
    width: size,
    height: size,
  }), [size])

  const {t} = useTranslation('profile')

  return (
    <img
      alt={t('avatar')}
      src={src}
      className={classNames(cls.avatar, {}, [className])}
      style={avatarStyles}
    />
  );
};
