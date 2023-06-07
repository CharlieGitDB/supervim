import { useEffect, useState } from 'react';

import { Board, initState } from '../../type/Board/Board.model';
import { Position } from '../../type/Board/Position.model';
import { moveBox } from './move-box';
import { updatePosition } from './update-position';

export default function useBoardValue() {
  const [ board, setBoard ] = useState<Board>(initState);
  const [ position, setPosition ] = useState<Position>({ x: 0, y: 0 });
  
  useEffect(() => {
    const handleKeyPress = (({ key }: KeyboardEvent) => {
      const updatedPosition = updatePosition(key, position);
      setPosition(updatedPosition);
      setBoard(moveBox(board, updatedPosition.x, updatedPosition.y));
    });
    
    window.addEventListener('keypress', handleKeyPress);
    return () => window.removeEventListener('keypress', handleKeyPress);
  }, [ board, position ]);

  return board;
}