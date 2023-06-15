import { FC } from 'react';
import { BombBox } from '../../types/BombBox.model';

const BombBox: FC<BombBox> = ({ villian, active }) => {
  const staticClasses = 'border p-2 m-1 w-16 h-16 flex items-center justify-center';
  const classes = active ? `${staticClasses} ${villian ? 'bg-red-500' : 'bg-teal-500'}` : `${staticClasses}`;

  return (
    <div className={ classes }>
      { villian ? 'X' : '' }
    </div>
  );
};

export default BombBox;
