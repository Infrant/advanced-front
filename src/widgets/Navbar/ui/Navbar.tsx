import React, {FC, useCallback, useState} from 'react';
import {classNames} from 'shared/lib/classNames/classNames';
import {useTranslation} from 'react-i18next';
import {Modal} from 'shared/ui/Modal/Modal';
import {Button, ButtonVariant} from 'shared/ui/Button/Button';
import cls from './Navbar.module.scss'

interface NavbarProps {
  className?: string
}

export const Navbar:FC<NavbarProps> = ({className}) => {
  const {t} = useTranslation()
  const [isOpen, setIsOpen] = useState(false)

  const onToggleModal = useCallback(() => {
    setIsOpen((prev) => !prev)
  }, [])

  return (
    <div className={classNames(cls.Navbar, {}, [className])}>
      <Button
        variant={ButtonVariant.CLEAR_INVERTED}
        className={cls.links}
        onClick={onToggleModal}
      >
        {t('sign_in')}
      </Button>
      <Modal isOpen={isOpen} onClose={onToggleModal}>
        {/* eslint-disable-next-line i18next/no-literal-string */}
        {/* eslint-disable-next-line max-len */}
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis, perferendis, vitae. Alias architecto beatae consequuntur cum delectus deleniti dignissimos ducimus, error facere labore magni maxime modi odit optio perferendis provident quae quasi quidem quis sed sint sit suscipit ullam ut velit veritatis voluptates! Hic quaerat, rem. Asperiores blanditiis consectetur culpa deleniti exercitationem libero molestias obcaecati optio sapiente veniam! Dolores ea eligendi esse hic provident, quam quia quibusdam quisquam ratione tempore tenetur, veniam. Dolorum eveniet id iste reiciendis sunt. Ab beatae consequatur corporis dicta est excepturi harum laboriosam magnam minima modi officiis, quae quam ratione reiciendis repudiandae sapiente sequi tempora temporibus?
      </Modal>
    </div>
  )
}
