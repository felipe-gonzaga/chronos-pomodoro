import { useTaskContext } from '../../contexts/TaskContext/useTaskContext';
import { getNextCycle } from '../../utils/getNextCycle';
import { getNextCycleType } from '../../utils/getNextCycleType';
import style from './styles.module.css';

export function Cycles() {
  const { state } = useTaskContext();

  const cycleStep = Array.from({ length: state.currentCycle });
  const cycleDescriptionMap = {
    workTime: 'foco',
    shortBreakTime: 'descanso curto',
    longBreakTime: 'desconso longo',
  };

  return (
    <>
      <div className={style.cycles}>
        <span>Ciclos:</span>
        <div className={style.cycleDots}>
          {cycleStep.map((_, index) => {
            const nextCycle = getNextCycle(index);
            const nextCycleType = getNextCycleType(nextCycle);

            return (
              <span
                key={`${nextCycleType}_${nextCycle}`}
                className={`${style.cycleDot} ${style[nextCycleType]}`}
                aria-label={`Indicador de ciclo de ${cycleDescriptionMap[nextCycleType]}`}
                title={`Indicador de ciclo de ${cycleDescriptionMap[nextCycleType]}`}
              ></span>
            );
          })}
        </div>
      </div>
    </>
  );
}
