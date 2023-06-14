import { ChangeEvent, FC, KeyboardEvent, useEffect, useRef, useState } from 'react';
import MiddleOfContent from '../MiddleOfContent/MiddleOfContent';
import TextInput from '../TextInput/TextInput';
import { useNavigate } from 'react-router-dom';

const Start: FC = () => {
  const navigate = useNavigate();

  const [ val, setVal ] = useState<string>('');
  const handleChange = (change: ChangeEvent<HTMLInputElement>) => setVal(change.target.value);
  
  const onKeyUp = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      if (val === 'vim') {
        navigate('/1');
      } else {
        setVal('');
      }
    }
  };
  
  const ref = useRef<HTMLInputElement>(null);

  useEffect(() => ref.current?.focus());

  return (
    <MiddleOfContent>
      <div className={ 'prose prose-xl' }>Welcome to Super Vim!</div>
      <div className={ 'prose prose-lg' }>This is a game that is a (hopefully) somewhat fun way to learn VIM</div>
      
      <div className={ 'flex justify-center align-middle' }>
        <div className={ 'prose prose-lg pr-2' }>Type</div>
        <pre className={ 'flex items-center' }>vim</pre>
        <div className={ 'prose prose-lg px-2' }>and press</div>
        <pre className={ 'flex items-center' }>ENTER</pre>
        <div className={ 'prose prose-lg pl-2' }>to start</div>
      </div>

      <TextInput value={ val } onChange={ handleChange } onKeyUp={ onKeyUp } ref={ ref } />
    </MiddleOfContent>
  );
};

export default Start;
