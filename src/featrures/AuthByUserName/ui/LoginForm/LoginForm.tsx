import {FC} from 'react';
import {classNames} from 'shared/lib/classNames/classNames';
import {useTranslation} from 'react-i18next';
import {Button, ButtonVariant} from 'shared/ui/Button/Button';
import {Input} from 'shared/ui/Input/Input';
import cls from './LoginForm.module.scss'

interface LoginFormProps {
  className?: string
}

export const LoginForm: FC<LoginFormProps> = ({className}) => {
  const {t} = useTranslation()
  return (
    <div className={classNames(cls.loginForm, {}, [className])}>
      <Input
        autoFocus
        placeholder={t('enter_user_name')}
        className={cls.input}
      />
      <Input
        placeholder={t('enter_password')}
        className={cls.input}
      />
      <Button
        className={cls.loginBtn}
        variant={ButtonVariant.OUTLINE}
      >
        {t('sign_in')}
      </Button>
    </div>
  );
};
