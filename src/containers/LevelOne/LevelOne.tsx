import { FC, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Grid, Level, Row } from '../../shared/components/components';
import { BombBox, Hit, KeysPressed } from './components/components';
import { useBoardValue } from './hooks/hooks';

const LevelOne: FC = () => {
  const { board, resetBoard } = useBoardValue();
  const [ showHit, setShowHit ] = useState<boolean>(false);
  const navigate = useNavigate();
  
  useEffect(() => {
    const isHit = board.some(r => r.some(b => b.active && b.villian));
    if (isHit) {
      resetBoard();
      setShowHit(true);
      setTimeout(() => setShowHit(false), 2500);
    }
    
    const lastRowIndex = board.length - 1;
    const lastCellIndex = board[lastRowIndex].length - 1;
    const finished = board[lastRowIndex][lastCellIndex].active;
    if (finished) {
      navigate('/2');
    }
  }, [ board, resetBoard, showHit, navigate ]);

  return (
    <Level title={ 'Level 1 - Basic Motions' }>
      <KeysPressed />
      <div className={ 'prose prose-lg' }>You will need to move around the board to avoid bombs!</div>
      <div className={ 'prose prose-lg' }>With vim you use the keys h, j, k, l to move around</div>
      <div className={ 'prose prose-lg' }>h = left, j = dow, k = up, l = right</div>
      <Hit showHit={ showHit } />
      <Grid>
        { 
          board.map((r, i) => (
            <Row key={ i }>
              { 
                r.map(({ active, villian }, i) => (
                  <BombBox key={ i } active={ active } villian={ villian } />
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
