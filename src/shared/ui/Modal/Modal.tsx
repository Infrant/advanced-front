import React, {FC, useCallback, useEffect} from 'react';
import {classNames} from 'shared/lib/classNames/classNames';
import {Portal} from 'shared/Portal/Portal';
import {useTheme} from 'app/providers/ThemeProvider';
import cls from './Modal.module.scss'

interface ModalProps {
  className?: string
  isOpen?: boolean
  onClose?: () => void
}

export const Modal: FC<ModalProps> = (props) => {
  const {
    className,
    children,
    isOpen,
    onClose,
  } = props

  const mods: Record<string, boolean> = {
    [cls.opened]: isOpen,
  }

  const {theme} = useTheme()

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

  return (
    <Portal>
      <div className={classNames(cls.modal, mods, [className, cls[theme]])}>
        <div className={cls.overlay} onClick={onCloseHandler}>
          <div className={cls.content} onClick={onContentClick}>
            {children}
          </div>
        </div>
      </div>
    </Portal>
  );
};
