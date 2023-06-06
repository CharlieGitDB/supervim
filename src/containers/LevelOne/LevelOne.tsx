import { FC } from 'react';
import KeysPressed from '../../components/KeysPressed/KeysPressed';
import MiddleOfContent from '../../components/MiddleOfContent/MiddleOfContent';

interface LevelOneProps {}

const LevelOne: FC<LevelOneProps> = () => (
  <MiddleOfContent>
    <KeysPressed />
  </MiddleOfContent>
);

export default LevelOne;
