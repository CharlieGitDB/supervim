import { useEffect, useState } from 'react';
import { Board, Position } from '../../../../shared/types/types';
import { boardState } from '../../init/board-state';
import { BombBox } from '../../types/BombBox.model';
import { moveBox } from './move-box';
import { updatePosition } from './update-position';

export default function useBoardValue() {
  const [ board, setBoard ] = useState<Board<BombBox>>(boardState);
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

  const resetBoard = () => {
    setPosition({ x: 0, y: 0 });
    setBoard(boardState);
  };

  return {
    board,
    resetBoard
  };
}