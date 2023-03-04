import {FC, memo} from 'react';
import {classNames} from 'shared/lib/classNames/classNames';
import cls from './Text.module.scss'

export enum TextVariant {
  PRIMARY = 'primary',
  ERROR = 'error',
}

interface TextProps {
  className?: string
  title?: string
  text?: string
  variant?: TextVariant
}

export const Text: FC<TextProps> = memo((props) => {
  const {
    className,
    title,
    text,
    variant = TextVariant.PRIMARY,
  } = props
  return (
    <div className={classNames('', {}, [className, cls[variant]])}>
      {title && <p className={cls.title}>{title}</p>}
      {text && <p className={cls.text}>{text}</p>}
    </div>
  );
});
