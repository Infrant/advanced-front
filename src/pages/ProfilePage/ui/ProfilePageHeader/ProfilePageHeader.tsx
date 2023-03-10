import {FC, useCallback} from 'react';
import {classNames} from 'shared/lib/classNames/classNames';
import {Text} from 'shared/ui/Text/Text';
import {Button, ButtonVariant} from 'shared/ui/Button/Button';
import {useTranslation} from 'react-i18next';
import {useAppDispatch} from 'shared/lib/hooks/useAppDispatch';
import {getProfileReadOnly, profileActions, updateProfileData} from 'entities/Profile';
import {useSelector} from 'react-redux';
import cls from './ProfilePageHeader.module.scss'

interface ProfilePageHeaderProps {
  className?: string
}

export const ProfilePageHeader: FC<ProfilePageHeaderProps> = ({className}) => {
  const {t} = useTranslation('profile')
  const dispatch = useAppDispatch()
  const readOnly = useSelector(getProfileReadOnly)

  const onEditBtn = useCallback(() => {
    dispatch(profileActions.setReadonly(false))
  }, [dispatch])

  const onCancelBtn = useCallback(() => {
    dispatch(profileActions.cancelEdit())
  }, [dispatch])

  const onSave = useCallback(() => {
    dispatch(updateProfileData())
  }, [dispatch])

  return (
    <div className={classNames(cls.profilePageHeader, {}, [className])}>
      <Text title={t('user_profile')} />
      {readOnly
        ? (
          <Button
            className={cls.editBtn}
            variant={ButtonVariant.OUTLINE}
            onClick={onEditBtn}
          >
            {t('edit')}
          </Button>
        )
        : (
          <>
            <Button
              className={cls.editBtn}
              variant={ButtonVariant.OUTLINE_RED}
              onClick={onCancelBtn}
            >
              {t('cancel')}
            </Button>
            <Button
              className={cls.saveBtn}
              variant={ButtonVariant.OUTLINE}
              onClick={onSave}
            >
              {t('save')}
            </Button>
          </>
        )}
    </div>
  );
};
