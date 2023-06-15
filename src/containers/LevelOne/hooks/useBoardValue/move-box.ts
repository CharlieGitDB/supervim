import { Board } from '../../../../shared/types/types';
import { BombBox } from '../../types/BombBox.model';

export const moveBox = (board: Board<BombBox>, x: number, y: number): Board<BombBox> => {
  const newBoard = board.map((r, i) => {
    if (i === y) {
      return r.map((b, i) => {
        if (i === x) {
          return {
            ...b,
            active: true
          };
        } else {
          return {
            ...b,
            active: false
          };
        }
      });
    } else {
      return r.map((b) => ({
        ...b,
        active: false
      }));
    }
  });
  return newBoard;
};