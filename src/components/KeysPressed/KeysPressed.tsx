import { FC } from 'react';
import useKeysPressed from '../../hooks/useKeysPressed/useKeysPressed';

interface KeysPressedProps {}

const KeysPressed: FC<KeysPressedProps> = () => {
  const keysPressed = useKeysPressed();

  return (
    <div data-testid="KeysPressed">
      {keysPressed}
    </div>
  )
};

export default KeysPressed;
