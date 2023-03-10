import {
  ChangeEvent, FC, memo, useMemo,
} from 'react';
import {classNames} from 'shared/lib/classNames/classNames';
import {useTranslation} from 'react-i18next';
import cls from './Select.module.scss'

interface SelectOption {
  value: string
  content: string
}

interface SelectProps {
  className?: string
  label?: string
  options?: SelectOption[]
  value?: string
  readOnly?: boolean
  onChange?: (value: string) => void
}

export const Select: FC<SelectProps> = memo((props) => {
  const {
    className,
    label,
    options,
    value,
    readOnly,
    onChange,
  } = props
  const {t} = useTranslation()

  const onChangeSelection = (e: ChangeEvent<HTMLSelectElement>) => {
    onChange?.(e.target.value)
  }

  const optionList = useMemo(() => options?.map(({value, content}) => (
    <option
      className={cls.option}
      key={value}
      value={value}
    >
      {content}
    </option>
  )), [options])

  return (
    <div className={classNames(cls.wrapper, {}, [className])}>
      {label
        && <span className={cls.label}>{`${label}>`}</span>}
      <select
        className={cls.select}
        disabled={readOnly}
        value={value}
        onChange={onChangeSelection}
      >
        {optionList}
      </select>
    </div>
  );
});
