import {FC} from 'react';
import {classNames} from 'shared/lib/classNames/classNames';
import {useTranslation} from 'react-i18next';
import {Button, ThemeButton} from 'shared/ui/Button/ui/Button';
import cls from './PageError.module.scss'

interface PageErrorProps {
  className?: string
}

export const PageError: FC<PageErrorProps> = ({className}) => {
  const {t} = useTranslation()

  const onClickBtn = () => {
    window.location.reload()
  }

  return (
    <div className={classNames(cls.pageError, {}, [className])}>
      <p>
        {t('unexpected_error')}
      </p>
      <Button onClick={onClickBtn}>
        {t('reload_page')}
      </Button>
    </div>
  )
}
