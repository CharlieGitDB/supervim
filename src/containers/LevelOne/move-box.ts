import { Board } from '../../type/Board/Board.model';

export const moveBox = (board: Board, x: number, y: number): Board => {
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