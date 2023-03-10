import {
  ChangeEvent, FC, InputHTMLAttributes, memo,
} from 'react';
import {classNames, Mods} from 'shared/lib/classNames/classNames';
import cls from './Input.module.scss'

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'onChange'>

interface InputProps extends HTMLInputProps{
  className?: string
  value?: string | number
  onChange?: (value: string) => void
}

export const Input: FC<InputProps> = memo((props) => {
  const {
    className,
    children,
    value,
    type = 'text',
    placeholder,
    onChange,
    readOnly,
    ...otherProps
  } = props

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    onChange?.(e.target.value)
  }

  const mods: Mods = {
    [cls.readOnly]: readOnly,
  }

  return (
    <div className={classNames(cls.inputWrapper, mods, [className])}>
      {
        placeholder
        && (
          <div className={cls.placeholder}>
            {`${placeholder} >`}
          </div>
        )
      }
      <input
        type={type}
        value={value}
        className={cls.input}
        onChange={onChangeHandler}
        readOnly={readOnly}
        placeholder={placeholder}
        {...otherProps}
      />
    </div>
  )
})

Input.displayName = 'Input'
