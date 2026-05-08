import { PlayCircleIcon } from 'lucide-react';
import { Cycles } from '../Cycles';
import { DefaultButton } from '../DefaultButton';
import { DefaultInput } from '../DefaultInput';
import { useRef, useState } from 'react';

export function MainForm() {
  const taskNameInput = useRef<HTMLInputElement>(null);
  //const [taskNName, setTaskName] = useState('');

  function handleCreateNewTask(event: React.SubmitEvent<HTMLFormElement>) {
    event.preventDefault();

    console.log('DEU CERTO', taskNameInput.current?.value);
  }

  return (
    <form onSubmit={handleCreateNewTask} className='form' action=''>
      <div className='formRow'>
        <DefaultInput
          id='meuInput'
          type='text'
          labelText='Task'
          placeholder='Digite algo'
          ref={taskNameInput}
        />
      </div>

      <div className='formRow'>
        <p>Lorem ipsum dolor sit amet.</p>
      </div>

      <div className='formRow'>
        <Cycles />
      </div>

      <div className='formRow'>
        <DefaultButton icon={<PlayCircleIcon />} />
      </div>
    </form>
  );
}
