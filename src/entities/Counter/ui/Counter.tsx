import {Button} from 'shared/ui/Button/Button';
import {useDispatch, useSelector} from 'react-redux';
import {getCounterValue} from 'entities/Counter/model/selectors/getCounterValue/getCounterValue';
import {useTranslation} from 'react-i18next';
import {counterActions} from '../model/slice/counterSlice';

export const Counter = () => {
  const {t} = useTranslation()
  const value = useSelector(getCounterValue)
  const dispatch = useDispatch()
  const handleIncrement = () => {
    dispatch(counterActions.increment())
  }
  const handleDecrement = () => {
    dispatch(counterActions.decrement())
  }

  return (
    <div>
      <h1 data-testid='value-title'>
        {value}
      </h1>
      <Button
        data-testid='decrement-btn'
        onClick={handleDecrement}
      >
        {t('decrement')}
      </Button>
      <Button
        data-testid='increment-btn'
        onClick={handleIncrement}
      >
        {t('increment')}
      </Button>
    </div>
  )
}
