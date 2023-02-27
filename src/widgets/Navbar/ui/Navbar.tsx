import React, {FC, useCallback, useState} from 'react';
import {classNames} from 'shared/lib/classNames/classNames';
import {useTranslation} from 'react-i18next';
import {Button, ButtonVariant} from 'shared/ui/Button/Button';
import {LoginModal} from 'featrures/AuthByUserName';
import cls from './Navbar.module.scss'

interface NavbarProps {
  className?: string
}

export const Navbar:FC<NavbarProps> = ({className}) => {
  const {t} = useTranslation()
  const [isOpen, setIsOpen] = useState(false)

  const onCloseModal = useCallback(() => {
    setIsOpen(false)
  }, [])

  const onOpenModal = useCallback(() => {
    setIsOpen(true)
  }, [])

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
