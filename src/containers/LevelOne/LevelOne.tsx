import { FC, useEffect, useState } from 'react';
import Box from '../../components/Box/Box';
import Grid from '../../components/Grid/Grid';
import KeysPressed from '../../components/KeysPressed/KeysPressed';
import Level from '../../components/Level/Level';
import Row from '../../components/Row/Row';
import { Board, initState } from '../../type/Board/Board.model';
import { Position } from '../../type/Board/Position.model';
import { moveBox } from './move-box';
import { updatePosition } from './update-position';

const LevelOne: FC = () => {
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

  return (
    <Level title={ 'Level 1' }>
      <KeysPressed />
      <Grid>
        { 
          board.map((r, i) => (
            <Row key={ i }>
              { 
                r.map(({ active, villian }, i) => (
                  <Box key={ i } active={ active } villian={ villian } />
                )) 
              }
            </Row>
          )) 
        }
      </Grid>
    </Level>
  );
};

export default LevelOne;
