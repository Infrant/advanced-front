import {FC, memo, useCallback} from 'react';
import {classNames} from 'shared/lib/classNames/classNames';
import {Select} from 'shared/ui/Select/Select';
import {useTranslation} from 'react-i18next';
import {Country} from '../../model/types/country';

interface CountrySelectProps {
  className?: string
  value?: Country
  readOnly?: boolean
  onChange?: (currency: Country) => void
}

const countryOptions = [
  {value: Country.Armenia, content: Country.Armenia},
  {value: Country.Belarus, content: Country.Belarus},
  {value: Country.Russia, content: Country.Russia},
  {value: Country.Kazakhstan, content: Country.Kazakhstan},
  {value: Country.Ukraine, content: Country.Ukraine},
]

export const CountrySelect: FC<CountrySelectProps> = memo((props) => {
  const {
    className,
    value,
    readOnly,
    onChange,
  } = props

  const {t} = useTranslation('profile')

  const onChangeCountry = useCallback((value: string) => {
    onChange?.(value as Country)
  }, [onChange])

  return (
    <Select
      className={classNames('', {}, [className])}
      label={t('country')}
      readOnly={readOnly}
      options={countryOptions}
      value={value}
      onChange={onChangeCountry}
    />
  );
});
