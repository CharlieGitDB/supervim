import { FC, useEffect, useState } from 'react';
import Box from '../../components/Box/Box';
import Grid from '../../components/Grid/Grid';
import KeysPressed from '../../components/KeysPressed/KeysPressed';
import Level from '../../components/Level/Level';
import Row from '../../components/Row/Row';
import { Board, initState } from '../../type/Board/Board.model';

const LevelOne: FC = () => {
  const [ board, setBoard ] = useState<Board>(initState);

  const [ position, setPosition ] = useState<{ x: number, y: number }>({ x: 0, y: 0 });

  const updateBoard = (x: number, y: number) => {
    const newBoard = {
      ...board,
      rows: board.rows.map((r, i) => {
        if (i === y) {
          return {
            boxes: r.boxes.map((b, i) => {
              if (i === x) {
                b.active = true;
                return b;
              } else {
                b.active = false;
                return b;
              }
            })
          };
        } else {
          return {
            boxes: r.boxes.map(b => {
              b.active = false;
              return b;
            })
          };
        }
      })
    };
    setBoard(newBoard);
  };

  useEffect(() => {
    const handleBoardMove = ({ key }: KeyboardEvent) => {
      switch (key) {
        case 'j':
          setPosition({ x: position.x, y: position.y < 6 ? position.y + 1 : position.y });
          break;
        case 'k':
          setPosition({ x: position.x, y: position.y <= 0 ? position.y : position.y - 1 });
          updateBoard(position.x, position.y);
          break;
        case 'h':
          setPosition({ x: position.x <= 0 ? position.x : position.x - 1, y: position.y });
          updateBoard(position.x, position.y);
          break;
        case 'l':
          setPosition({ x: position.x >= 3 ? position.x : position.x + 1, y: position.y });
          updateBoard(position.x, position.y);
          break;
        default:
          console.log('nothing');
          break;
        }
      };
      updateBoard(position.x, position.y);
    
    window.addEventListener('keypress', handleBoardMove);
    return () => window.removeEventListener('keypress', handleBoardMove);
  }, [ position ]);
  
  return (
    <Level title={ 'Level 1' }>
      <KeysPressed />
      <Grid>
        { board.rows.map((r, i) => (
            <Row key={ i }>
              { r.boxes.map(({ active, villian }, i) => (
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
