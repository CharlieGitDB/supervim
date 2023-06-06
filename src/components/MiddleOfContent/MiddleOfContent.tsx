import { FC, ReactNode } from 'react';

interface MiddleOfContentProps {
  children?: ReactNode;
}

const MiddleOfContent: FC<MiddleOfContentProps> = ({ children }) => (
  <div
    data-testid={ 'MiddleOfContent' }
    className={ 'flex flex-col h-full justify-center items-center' }
  >
    { children }
  </div>
);

export default MiddleOfContent;
