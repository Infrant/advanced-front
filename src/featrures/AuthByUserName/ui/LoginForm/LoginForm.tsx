import {FC, memo, useCallback} from 'react';
import {classNames} from 'shared/lib/classNames/classNames';
import {useTranslation} from 'react-i18next';
import {Button, ButtonVariant} from 'shared/ui/Button/Button';
import {Input} from 'shared/ui/Input/Input';
import {useDispatch, useSelector} from 'react-redux';
import {loginByUserName} from 'featrures/AuthByUserName/model/services/loginByUserName/loginByUserName';
import {Text, TextVariant} from 'shared/ui/Text/Text';
import {getLoginState} from '../../model/selectors/getLoginState/getLoginState';
import {loginActions} from '../../model/slice/loginSlice';
import cls from './LoginForm.module.scss'

interface LoginFormProps {
  className?: string
}

export const LoginForm: FC<LoginFormProps> = memo(({className}) => {
  const {t} = useTranslation()
  const dispatch = useDispatch()
  const {
    username, password, error, isLoading,
  } = useSelector(getLoginState)

  const onChangeUsername = useCallback((value: string) => {
    dispatch(loginActions.setUsername(value))
  }, [dispatch])

  const onChangePassword = useCallback((value: string) => {
    dispatch(loginActions.setPassword(value))
  }, [dispatch])

  const onLoginClick = useCallback(() => {
    dispatch(loginByUserName({username, password}))
  }, [dispatch, password, username])

  return (
    <div className={classNames(cls.loginForm, {}, [className])}>
      <Text title={t('auth_form')} />
      {error && <Text text={t(error)} variant={TextVariant.ERROR} />}
      <Input
        autoFocus
        value={username}
        placeholder={t('enter_user_name')}
        className={cls.input}
        onChange={onChangeUsername}
      />
      <Input
        value={password}
        placeholder={t('enter_password')}
        className={cls.input}
        onChange={onChangePassword}
      />
      <Button
        className={cls.loginBtn}
        variant={ButtonVariant.OUTLINE}
        disabled={isLoading}
        onClick={onLoginClick}
      >
        {t('sign_in')}
      </Button>
    </div>
  );
});
