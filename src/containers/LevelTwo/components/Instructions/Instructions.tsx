import { FC } from 'react';

const Instructions: FC = () => (
  <div className={ 'flex justify-center items-center' }>
    <div className={ 'prose prose-lg' }>With vim when your cursor is on a character you can press</div>
    <pre className={ 'flex items-center px-2' }>x</pre> 
    <div className={ 'prose prose-lg' }>to delete the character. To delete an entire line you type</div>
    <pre className={ 'flex justify-center items-end pl-2' }>dd</pre>
  </div>
);

export default Instructions;