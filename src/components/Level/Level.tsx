import { FC, ReactNode } from 'react';
import MiddleOfContent from '../MiddleOfContent/MiddleOfContent';
import Title from '../Title/Title';


interface LevelProps {
  title: string;
  children?: ReactNode
}

const Level: FC<LevelProps> = ({ title, children }) => (
  <MiddleOfContent>
    <Title>{ title }</Title>
    { children }
  </MiddleOfContent>
);

export default Level;
