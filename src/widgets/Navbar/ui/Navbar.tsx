import React, {FC, useCallback, useState} from 'react';
import {classNames} from 'shared/lib/classNames/classNames';
import {useTranslation} from 'react-i18next';
import {Button, ButtonVariant} from 'shared/ui/Button/Button';
import {LoginModal} from 'featrures/AuthByUserName';
import {getUserAuthData, userActions} from 'entities/User';
import {useDispatch, useSelector} from 'react-redux';
import {USER_LOCAL_STORAGE_KEY} from 'shared/const/localStorage';
import cls from './Navbar.module.scss'

interface NavbarProps {
  className?: string
}

export const Navbar:FC<NavbarProps> = ({className}) => {
  const {t} = useTranslation()
  const [isOpen, setIsOpen] = useState(false)
  const userAuthData = useSelector(getUserAuthData)
  const dispatch = useDispatch()

  const onCloseModal = useCallback(() => {
    setIsOpen(false)
  }, [])

  const onOpenModal = useCallback(() => {
    setIsOpen(true)
  }, [])

  const onLogout = useCallback(() => {
    dispatch(userActions.logout())
    localStorage.removeItem(USER_LOCAL_STORAGE_KEY)
  }, [dispatch])

  if (userAuthData) {
    return (
      <div className={classNames(cls.Navbar, {}, [className])}>
        <Button
          variant={ButtonVariant.CLEAR_INVERTED}
          className={cls.links}
          onClick={onLogout}
        >
          {t('sign_out')}
        </Button>
      </div>
    )
  }

  return (
    <div className={classNames(cls.Navbar, {}, [className])}>
      <Button
        variant={ButtonVariant.CLEAR_INVERTED}
        className={cls.links}
        onClick={onOpenModal}
      >
        {t('sign_in')}
      </Button>
      <LoginModal
        isOpen={isOpen}
        onClose={onCloseModal}
      />
    </div>
  )
}
