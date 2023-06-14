import { FC, ReactNode } from 'react';

interface TitleProps {
  children: ReactNode
}

const Title: FC<TitleProps> = ({ children }) => (
  <div className={ 'prose prose-xl' }>
    { children }
  </div>
);

export default Title;
