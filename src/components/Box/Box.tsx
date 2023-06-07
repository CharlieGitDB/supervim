import { FC } from 'react';
import { Box } from '../../type/Board/Box.model';

const Box: FC<Box> = ({ villian, active }) => {
  const staticClasses = 'border p-2 m-1 w-16 h-16';
  const classes = active ? `${staticClasses} ${villian ? 'bg-red-500' : 'bg-teal-500'}` : `${staticClasses}`;

  return (
    <div className={ classes }>
      { villian ? 'X' : '' }
    </div>
  );
};

export default Box;
