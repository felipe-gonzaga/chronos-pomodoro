import { usetTaskContext } from '../../contexts/TaskContext';
import style from './styles.module.css';

export function CountDown() {
  const { state } = usetTaskContext();
  return (
    <div className={style.container}>{state.formattedSecoundsRemaining}</div>
  );
}
