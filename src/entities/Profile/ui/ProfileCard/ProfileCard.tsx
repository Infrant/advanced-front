import {FC} from 'react';
import {classNames} from 'shared/lib/classNames/classNames';
import {useSelector} from 'react-redux';
import {getProfileData, getProfileError, getProfileIsLoading} from 'entities/Profile';
import {useTranslation} from 'react-i18next';
import {Text} from 'shared/ui/Text/Text';
import {Button, ButtonVariant} from 'shared/ui/Button/Button';
import {Input} from 'shared/ui/Input/Input';
import cls from './ProfileCard.module.scss'

interface ProfileCardProps {
  className?: string
}

export const ProfileCard: FC<ProfileCardProps> = ({className}) => {
  const {t} = useTranslation('profile')
  const userData = useSelector(getProfileData)
  const isLoading = useSelector(getProfileIsLoading)
  const error = useSelector(getProfileError)
  return (
    <div className={classNames(cls.profileCard, {}, [className])}>
      <div className={cls.header}>
        <Text title={t('user_profile')} />
        <Button
          className={cls.editBtn}
          variant={ButtonVariant.OUTLINE}
        >
          {t('edit')}
        </Button>
      </div>
      <div className={cls.userData}>
        <Input
          value={userData?.first}
          placeholder={t('your_name')}
        />
        <Input
          value={userData?.lastname}
          placeholder={t('your_surname')}
        />
      </div>
    </div>
  );
};
