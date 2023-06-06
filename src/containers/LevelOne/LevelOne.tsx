import { FC } from 'react';
import KeysPressed from '../../components/KeysPressed/KeysPressed';
import Level from '../../components/Level/Level';

const LevelOne: FC = () => (
  <Level title={ 'Level 1' }>
    <KeysPressed />
  </Level>
);

export default LevelOne;
