import { FC, ReactNode } from 'react';

interface GridProps {
  children: ReactNode
}

const Grid: FC<GridProps> = ({ children }) => (
  <div className={ 'flex flex-col' }>
    { children }
  </div>
);

export default Grid;