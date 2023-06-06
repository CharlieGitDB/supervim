import { FC } from 'react';
import Box from '../../components/Box/Box';
import KeysPressed from '../../components/KeysPressed/KeysPressed';
import Level from '../../components/Level/Level';

const LevelOne: FC = () => (
  <Level title={ 'Level 1' }>
    <KeysPressed />
    <Box />
  </Level>
);

export default LevelOne;
