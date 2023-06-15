import { FC } from 'react';
import { Level } from '../../shared/components/components';
import Instructions from './components/Instructions/Instructions';

const LevelTwo: FC = () => (
  <Level title={ 'Level 2 - Deleting' }>
    <div className={ 'prose prose-lg' }>{ 'Oh no! You\'re under attack!' }</div>
    <div className={ 'prose prose-lg' }>You will need to delete the invaders before they reach the bottom!</div>
    <Instructions />
  </Level>
);

export default LevelTwo;
