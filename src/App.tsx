import { FC } from 'react';
import LinkButton from './components/LinkButton/LinkButton';
import MiddleOfContent from './components/MiddleOfContent/MiddleOfContent';

const App: FC = () => (
  <MiddleOfContent>
    <div className='prose prose-xl'>Welcome to Super Vim!</div>
    <div className='prose prose-lg'>This is a game that is a (hopefully) somewhat fun way to learn VIM</div>
    <LinkButton url={'1'}>Start</LinkButton>
  </MiddleOfContent>
);

export default App;
