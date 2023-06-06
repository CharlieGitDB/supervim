import { FC } from 'react';

interface TitleProps {
  title: string;
}

const Title: FC<TitleProps> = ({ title }) => (
  <div className={ 'prose prose-xl' }>
    { title }
  </div>
);

export default Title;
