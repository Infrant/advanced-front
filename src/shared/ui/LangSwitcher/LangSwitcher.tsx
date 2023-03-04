import {FC, memo} from 'react';
import {classNames} from 'shared/lib/classNames/classNames';
import {useTranslation} from 'react-i18next';
import i18n from 'i18next';
import {Button, ButtonVariant} from 'shared/ui/Button/Button';

interface LangSwitcherProps {
  className?: string
  short: boolean
}

export const LangSwitcher: FC<LangSwitcherProps> = memo(({className, short}) => {
  const {t} = useTranslation()

  const onToggleLanguage = () => {
    i18n.changeLanguage(i18n.language === 'en' ? 'ru' : 'en')
  }

  return (
    <Button
      className={classNames('', {}, [className])}
      variant={ButtonVariant.CLEAR}
      onClick={onToggleLanguage}
    >
      {t(short ? 'short_language' : 'language')}
    </Button>
  );
});
