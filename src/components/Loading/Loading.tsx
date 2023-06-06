import { FC } from 'react';
import MiddleOfContent from '../MiddleOfContent/MiddleOfContent';

const Loading: FC = () => (
  <MiddleOfContent>
    <div className='animate-spin'></div>
  </MiddleOfContent>
);

export default Loading;
