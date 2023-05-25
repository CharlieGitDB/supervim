import React, { FC, ReactNode } from 'react';
import Button from '../Button/Button.lazy';

export interface LinkButtonProps {
  url?: string;
  children?: ReactNode;
}

const LinkButton: FC<LinkButtonProps> = ({ url, children, ...props }) => (
  <a href={url}>
    <Button {...props}>
      {children}
    </Button>
  </a>
);

export default LinkButton;
