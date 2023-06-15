import { FC, ReactNode } from 'react';


interface RowProps {
  children?: ReactNode
}

const Row: FC<RowProps> = ({ children }) => (
  <div className={ 'flex flex-row' }>
    { children }
  </div>
);

export default Row;
