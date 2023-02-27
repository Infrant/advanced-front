import {
  ChangeEvent, FC, InputHTMLAttributes, memo,
} from 'react';
import {classNames} from 'shared/lib/classNames/classNames';
import cls from './Input.module.scss'

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'onChange'>

interface InputProps extends HTMLInputProps{
  className?: string
  value?: string
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
    ...otherProps
  } = props

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    onChange?.(e.target.value)
  }

  return (
    <div className={classNames(cls.inputWrapper, {}, [className])}>
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
        {...otherProps}
      />
    </div>
  )
})

Input.displayName = 'Input'
