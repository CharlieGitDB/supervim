import { Position } from '../../type/Board/Position.model';

export const updatePosition = (key: string, position: Position) => {
  const updatedPosition = { ...position };

    switch (key) {
      case 'j':
        updatedPosition.y = updatedPosition.y < 7 ? updatedPosition.y + 1 : position.y;
        break;
      case 'k':
        updatedPosition.y = updatedPosition.y <= 0 ? position.y : position.y - 1;
        break;
      case 'h':
        updatedPosition.x = updatedPosition.x <= 0 ? updatedPosition.x : position.x - 1;
        break;
      case 'l':
        updatedPosition.x = updatedPosition.x >= 3 ? updatedPosition.x : updatedPosition.x + 1;
        break;
      default:
        console.log('nothing');
        break;
    }

    return updatedPosition;
};