import {FC} from 'react';
import {classNames} from 'shared/lib/classNames/classNames';
import {useTranslation} from 'react-i18next';
import i18n from 'i18next';
import {Button, ThemeButton} from 'shared/ui/Button/Button';

interface LangSwitcherProps {
  className?: string
}

export const LangSwitcher: FC<LangSwitcherProps> = ({className}) => {
  const {t} = useTranslation()

  const onToggleLanguage = () => {
    i18n.changeLanguage(i18n.language === 'en' ? 'ru' : 'en')
  }

  return (
    <Button
      className={classNames('', {}, [className])}
      theme={ThemeButton.CLEAR}
      onClick={onToggleLanguage}
    >
      {t('language')}
    </Button>
  );
};
