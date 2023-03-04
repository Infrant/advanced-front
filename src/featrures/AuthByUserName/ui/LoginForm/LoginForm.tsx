import {
  FC, memo, useCallback,
} from 'react';
import {classNames} from 'shared/lib/classNames/classNames';
import {useTranslation} from 'react-i18next';
import {Button, ButtonVariant} from 'shared/ui/Button/Button';
import {Input} from 'shared/ui/Input/Input';
import {useDispatch, useSelector} from 'react-redux';
import {Text, TextVariant} from 'shared/ui/Text/Text';
import {DynamicModuleLoader, ReducersList} from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import {useAppDispatch} from 'shared/lib/hooks/useAppDispatch';
import {loginByUserName} from '../../model/services/loginByUserName/loginByUserName';
import {getLoginUserName} from '../../model/selectors/getLoginUserName/getLoginUserName';
import {getLoginPassword} from '../../model/selectors/getLoginPassword/getLoginPassword';
import {getLoginIsLoading} from '../../model/selectors/getLoginIsLoading/getLoginIsLoading';
import {getLoginError} from '../../model/selectors/getLoginError/getLoginError';
import {loginActions, loginReducer} from '../../model/slice/loginSlice';
import cls from './LoginForm.module.scss'

export interface LoginFormProps {
  className?: string
  onClose: () => void
}

const initialReducers: ReducersList = {
  loginForm: loginReducer,
}

const LoginForm: FC<LoginFormProps> = memo(({className, onClose}) => {
  const {t} = useTranslation()
  const dispatch = useAppDispatch()
  const username = useSelector(getLoginUserName)
  const password = useSelector(getLoginPassword)
  const isLoading = useSelector(getLoginIsLoading)
  const error = useSelector(getLoginError)

  const onChangeUsername = useCallback((value: string) => {
    dispatch(loginActions.setUsername(value))
  }, [dispatch])

  const onChangePassword = useCallback((value: string) => {
    dispatch(loginActions.setPassword(value))
  }, [dispatch])

  const onLoginClick = useCallback(async () => {
    const result = await dispatch(loginByUserName({username, password}))
    if (result.meta.requestStatus === 'fulfilled') onClose()
  }, [dispatch, onClose, password, username])

  return (
    <DynamicModuleLoader
      reducers={initialReducers}
      removeAfterUnmount
    >
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
    </DynamicModuleLoader>
  );
});

export default LoginForm
