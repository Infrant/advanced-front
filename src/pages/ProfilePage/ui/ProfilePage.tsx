import {FC, useCallback, useEffect} from 'react';
import {classNames} from 'shared/lib/classNames/classNames';
import {DynamicModuleLoader, ReducersList} from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import {
  fetchProfileData,
  getProfileError,
  getProfileFormData,
  getProfileIsLoading,
  getProfileReadOnly,
  getProfileValidateErrors,
  profileActions,
  ProfileCard,
  profileReducer,
} from 'entities/Profile';
import {useAppDispatch} from 'shared/lib/hooks/useAppDispatch';
import {useSelector} from 'react-redux';
import {Currency} from 'entities/Currency';
import {Country} from 'entities/Country';
import {Text, TextVariant} from 'shared/ui/Text/Text';
import {useTranslation} from 'react-i18next';
import {ValidateProfileError} from 'entities/Profile/model/types/profile';
import {ProfilePageHeader} from './ProfilePageHeader/ProfilePageHeader';

const reducers: ReducersList = {
  profile: profileReducer,
}

interface ProfilePageProps {
  className?: string
}

const ProfilePage: FC<ProfilePageProps> = ({className}) => {
  const {t} = useTranslation()
  const dispatch = useAppDispatch()
  const userData = useSelector(getProfileFormData)
  const isLoading = useSelector(getProfileIsLoading)
  const error = useSelector(getProfileError)
  const readOnly = useSelector(getProfileReadOnly)
  const validateErrors = useSelector(getProfileValidateErrors)

  const validateTranslateErrors = {
    [ValidateProfileError.INCORRECT_USER_DATA]: t('user_data_error'),
    [ValidateProfileError.INCORRECT_AGE]: t('age_error'),
    [ValidateProfileError.INCORRECT_COUNTRY]: t('country_error'),
    [ValidateProfileError.NO_DATA]: t('no_data_error'),
    [ValidateProfileError.SERVER_ERROR]: t('server_error'),
  }

  useEffect(() => {
    dispatch(fetchProfileData())
  }, [dispatch])

  const onChangeFirstName = useCallback((value: string) => {
    dispatch(profileActions.updateProfile({first: value}))
  }, [dispatch])

  const onChangeLastName = useCallback((value: string) => {
    dispatch(profileActions.updateProfile({lastname: value}))
  }, [dispatch])

  const onChangeAge = useCallback((value: string) => {
    const age = value.replace(/\D+/g, '')
    dispatch(profileActions.updateProfile({age: +age}))
  }, [dispatch])

  const onChangeCity = useCallback((value: string) => {
    dispatch(profileActions.updateProfile({city: value}))
  }, [dispatch])

  const onChangeUsername = useCallback((value: string) => {
    dispatch(profileActions.updateProfile({username: value}))
  }, [dispatch])

  const onChangeAvatar = useCallback((value: string) => {
    dispatch(profileActions.updateProfile({avatar: value}))
  }, [dispatch])

  const onChangeCurrency = useCallback((value: Currency) => {
    dispatch(profileActions.updateProfile({currency: value}))
  }, [dispatch])

  const onChangeCountry = useCallback((value: Country) => {
    dispatch(profileActions.updateProfile({country: value}))
  }, [dispatch])

  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
      <div className={classNames('', {}, [className])}>
        <ProfilePageHeader />
        {/* eslint-disable-next-line max-len */}
        {!!validateErrors?.length && validateErrors.map((error) => {
          const errorText = validateTranslateErrors[error]
          return <Text key={error} variant={TextVariant.ERROR} text={errorText} />
        })}
        <ProfileCard
          data={userData}
          isLoading={isLoading}
          error={error}
          readonly={readOnly}
          onChangeFirstName={onChangeFirstName}
          onChangeLastName={onChangeLastName}
          onChangeAge={onChangeAge}
          onChangeCity={onChangeCity}
          onChangeUsername={onChangeUsername}
          onChangeAvatar={onChangeAvatar}
          onChangeCurrency={onChangeCurrency}
          onChangeCountry={onChangeCountry}
        />
      </div>
    </DynamicModuleLoader>
  );
};

export default ProfilePage
