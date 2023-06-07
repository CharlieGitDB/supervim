import { FC } from 'react';
import Box from '../../components/Box/Box';
import Grid from '../../components/Grid/Grid';
import KeysPressed from '../../components/KeysPressed/KeysPressed';
import Level from '../../components/Level/Level';
import Row from '../../components/Row/Row';
import useBoardValue from '../../hooks/useBoardValue/useBoardValue';

const LevelOne: FC = () => {
  const board = useBoardValue();

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
