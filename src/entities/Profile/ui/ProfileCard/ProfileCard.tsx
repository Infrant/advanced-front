import {FC} from 'react';
import {classNames, Mods} from 'shared/lib/classNames/classNames';
import {useTranslation} from 'react-i18next';
import {Text, TextVariant} from 'shared/ui/Text/Text';
import {Input} from 'shared/ui/Input/Input';
import {Loader} from 'shared/ui/Loader/Loader';
import {Avatar} from 'shared/ui/Avatar/Avatar';
import {Currency, CurrencySelect} from 'entities/Currency';
import {Country, CountrySelect} from 'entities/Country';
import {Profile} from '../../model/types/profile';
import cls from './ProfileCard.module.scss'

interface ProfileCardProps {
  readonly?: boolean
  className?: string
  data?: Profile | null
  isLoading?: boolean
  error?: string | null
  onChangeFirstName?: (value: string) => void
  onChangeLastName?: (value: string) => void
  onChangeCity?: (value: string) => void
  onChangeAge?: (value: string) => void
  onChangeUsername?: (value: string) => void
  onChangeAvatar?: (value: string) => void
  onChangeCurrency?: (currency: Currency) => void
  onChangeCountry?: (country: Country) => void
}

export const ProfileCard: FC<ProfileCardProps> = (props) => {
  const {
    className,
    data,
    isLoading,
    error,
    readonly,
    onChangeFirstName,
    onChangeLastName,
    onChangeCity,
    onChangeAge,
    onChangeUsername,
    onChangeAvatar,
    onChangeCurrency,
    onChangeCountry,
  } = props
  const {t} = useTranslation('profile')

  if (isLoading) {
    return (
      <div className={classNames(cls.profileCard, {}, [className, cls.loading])}>
        <Loader />
      </div>
    )
  }

  if (error) {
    return (
      <div className={classNames(cls.profileCard, {}, [className, cls.error])}>
        <Text
          variant={TextVariant.ERROR}
          title={t('profile_loading_error')}
          text={t('try_reload_page')}
          align='center'
        />
      </div>
    )
  }

  const mods: Mods = {
    [cls.editing]: !readonly,
  }

  return (
    <div className={classNames(cls.profileCard, mods, [className])}>
      <div className={cls.userData}>
        {data?.avatar && (
          <div className={cls.avatarWrapper}>
            <Avatar src={data?.avatar} size={100} />
          </div>
        )}
        <Input
          readOnly={readonly}
          value={data?.first}
          placeholder={t('your_name')}
          onChange={onChangeFirstName}
        />
        <Input
          readOnly={readonly}
          value={data?.lastname}
          placeholder={t('your_surname')}
          onChange={onChangeLastName}
        />
        <Input
          readOnly={readonly}
          value={data?.age}
          placeholder={t('age')}
          onChange={onChangeAge}
        />
        <Input
          readOnly={readonly}
          value={data?.city}
          placeholder={t('city')}
          onChange={onChangeCity}
        />
        <Input
          readOnly={readonly}
          value={data?.username}
          placeholder={t('username')}
          onChange={onChangeUsername}
        />
        <Input
          readOnly={readonly}
          value={data?.avatar}
          placeholder={t('avatar')}
          onChange={onChangeAvatar}
        />
        <CurrencySelect
          readOnly={readonly}
          value={data?.currency}
          onChange={onChangeCurrency}
        />
        <CountrySelect
          readOnly={readonly}
          value={data?.country}
          onChange={onChangeCountry}
        />
      </div>
    </div>
  );
};
