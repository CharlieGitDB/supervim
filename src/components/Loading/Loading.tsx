import { FC } from 'react';
import MiddleOfContent from '../MiddleOfContent/MiddleOfContent';

interface LoadingProps {}

const Loading: FC<LoadingProps> = () => (
  <MiddleOfContent>
    <div className='animate-spin'></div>
  </MiddleOfContent>
);

export default Loading;
