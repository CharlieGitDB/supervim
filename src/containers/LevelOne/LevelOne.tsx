import { FC, useEffect, useState } from 'react';
import Box from '../../components/Box/Box';
import Grid from '../../components/Grid/Grid';
import KeysPressed from '../../components/KeysPressed/KeysPressed';
import Level from '../../components/Level/Level';
import Row from '../../components/Row/Row';
import useBoardValue from '../../hooks/useBoardValue/useBoardValue';
import { useNavigate } from 'react-router-dom';

const LevelOne: FC = () => {
  const { board, resetBoard } = useBoardValue();
  const [ showHit, setShowHit ] = useState<boolean>(false);
  const navigate = useNavigate();
  
  const Hit = () => {
    let classes = '';

    if (showHit) {
      classes += 'prose prose-xl text-red-500 animate-pulse';
    } else {
      classes += 'invisible';
    }
    
    return <div className={ classes }>You have hit a bomb start over!</div>;
  };
  
  useEffect(() => {
    const isHit = board.some(b => b.some(x => x.active && x.villian));
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
    <Level title={ 'Level 1' }>
      <KeysPressed />
      <div className={ 'prose prose-lg' }>In vim: h = left, j = dow, k = up, l = right</div>
      <Hit />
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
