import { FC } from 'react';
import Level from '../../shared/components/Level/Level';

const LevelTwo: FC = () => (
  <Level title={ 'Level 2' }>
    <div className={ 'prose prose-lg' }>{ 'Oh no! You\'re under attack!' }</div>
    <div className={ 'prose prose-lg' }>You will need to delete the invaders before they reach the bottom!</div>
  </Level>
);

export default LevelTwo;
