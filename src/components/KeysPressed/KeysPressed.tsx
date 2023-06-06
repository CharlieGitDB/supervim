import useKeysPressed from '../../hooks/useKeysPressed/useKeysPressed';

const KeysPressed = () => {
  const keysPressed = useKeysPressed();

  return (
    <div data-testid={ 'KeysPressed' }>
      { keysPressed }
    </div>
  );
};

export default KeysPressed;
