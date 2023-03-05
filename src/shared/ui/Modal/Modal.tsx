import React, {
  FC, useCallback, useEffect, useState,
} from 'react';
import {classNames, Mods} from 'shared/lib/classNames/classNames';
import {Portal} from 'shared/Portal/Portal';
import {useTheme} from 'app/providers/ThemeProvider';
import cls from './Modal.module.scss'

interface ModalProps {
  className?: string
  isOpen?: boolean
  lazy?: boolean
  onClose?: () => void
}

export const Modal: FC<ModalProps> = (props) => {
  const {
    className,
    children,
    isOpen,
    lazy,
    onClose,
  } = props

  const [isMounted, setIsMounted] = useState(false)
  const {theme} = useTheme();

  useEffect(() => {
    if (isOpen) setIsMounted(true)
  }, [isOpen])

  const mods: Mods = {
    [cls.opened]: isOpen,
  }

  const onContentClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation()
  }

  const onCloseHandler = () => {
    if (onClose) onClose()
  }

  const onKeyDown = useCallback((e: KeyboardEvent) => {
    if (!onClose) return

    if (e.key === 'Escape') {
      onClose()
    }
  }, [onClose])

  useEffect(() => {
    if (isOpen) {
      window.addEventListener('keydown', onKeyDown)
    }

    return () => {
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [isOpen, onKeyDown])

  if (lazy && !isMounted) return null

  return (
    <Portal>
      <div className={classNames(cls.modal, mods, [className, theme, 'app_modal'])}>
        <div className={cls.overlay} onClick={onCloseHandler}>
          <div className={cls.content} onClick={onContentClick}>
            {children}
          </div>
        </div>
      </div>
    </Portal>
  );
};
