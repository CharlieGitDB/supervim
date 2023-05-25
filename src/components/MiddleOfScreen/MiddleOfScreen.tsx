import { FC, ReactNode } from "react";

interface MiddleOfScreenProps {
  children?: ReactNode;
}

const MiddleOfScreen: FC<MiddleOfScreenProps> = ({ children }) => (
  <div
    data-testid="MiddleOfScreen"
    className="flex flex-col h-full justify-center items-center"
  >
    {children}
  </div>
);

export default MiddleOfScreen;
