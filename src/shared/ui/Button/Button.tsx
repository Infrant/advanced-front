import {ButtonHTMLAttributes, FC, memo} from 'react';
import {classNames} from 'shared/lib/classNames/classNames';
import cls from './Button.module.scss'

export enum ButtonVariant {
  CLEAR = 'clear',
  CLEAR_INVERTED = 'clearInverted',
  OUTLINE = 'outline',
  OUTLINE_RED = 'outlineRed',
  BACKGROUND = 'background',
  BACKGROUND_INVERTED = 'backgroundInverted',
}

export enum ButtonSize {
  M = 'size_m',
  L = 'size_l',
  XL = 'size_xl',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string
  variant?: ButtonVariant
  square?: boolean
  size?: ButtonSize
}

export const Button: FC<ButtonProps> = memo((props) => {
  const {
    className,
    children,
    variant,
    square,
    disabled,
    size = ButtonSize.M,
    ...otherProps
  } = props
  return (
    <button
      {...otherProps}
      type='button'
      className={classNames(
        cls.button,
        {[cls.square]: square, [cls.disabled]: disabled},
        [className, variant && cls[variant], cls[size]],
      )}
    >
      {children}
    </button>
  );
});
