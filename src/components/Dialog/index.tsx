import { DefaultButton } from '../DefaultButton';
import { ThumbsDownIcon, ThumbsUpIcon } from 'lucide-react';

import styles from './styles.module.css';

type CloseToastFunc = ((reason?: boolean | string) => void) &
  ((e: React.MouseEvent) => void);

type DialogProps = {
  closeToast: CloseToastFunc;
  data: string;
};

export function Dialog({ closeToast, data }: DialogProps) {
  return (
    <>
      <div className={styles.container}>
        <p>{data}</p>

        <div className={styles.buttonsContainer}>
          <DefaultButton
            onClick={() => closeToast(true)}
            icon={<ThumbsUpIcon />}
            aria-label='Confirmar ação e fechar'
            title='Confirmar ação e fechar'
          />
          <DefaultButton
            onClick={() => closeToast(false)}
            icon={<ThumbsDownIcon />}
            color='red'
            aria-label='Cancelar ação e fechar'
            title='Cancelar ação e fechar'
          />
        </div>
      </div>
    </>
  );
}
