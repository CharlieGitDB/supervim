import { FC, ReactNode } from 'react';

interface ButtonProps {
  children?: ReactNode
}

const Button: FC<ButtonProps> = ({ children, ...props }) => (
  <div
    data-testid='Button'
    className='rounded px-5 py-3 bg-slate-300 hover:bg-slate-400 drop-shadow active:drop-shadow-none cursor-pointer select-none'
    {...props}
  >
    {children}
  </div>
);

export default Button;
