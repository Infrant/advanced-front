import {FC, memo, useCallback} from 'react';
import {classNames} from 'shared/lib/classNames/classNames';
import {Select} from 'shared/ui/Select/Select';
import {useTranslation} from 'react-i18next';
import {Currency} from '../../model/types/currency';

interface CurrencySelectProps {
  className?: string
  value?: Currency
  readOnly?: boolean
  onChange?: (currency: Currency) => void
}

const currencyOptions = [
  {value: Currency.RUB, content: Currency.RUB},
  {value: Currency.EUR, content: Currency.EUR},
  {value: Currency.USD, content: Currency.USD},
]

export const CurrencySelect: FC<CurrencySelectProps> = memo((props) => {
  const {
    className,
    value,
    readOnly,
    onChange,
  } = props

  const {t} = useTranslation('profile')

  const onChangeCurrency = useCallback((value: string) => {
    onChange?.(value as Currency)
  }, [onChange])

  return (
    <Select
      className={classNames('', {}, [className])}
      label={t('currency')}
      readOnly={readOnly}
      options={currencyOptions}
      value={value}
      onChange={onChangeCurrency}
    />
  );
});
