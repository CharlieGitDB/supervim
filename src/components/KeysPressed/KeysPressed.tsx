import useKeysPressed from '../../hooks/useKeysPressed/useKeysPressed';

const KeysPressed = () => {
  const keysPressed = useKeysPressed();

  return (
    <div className={ 'tracking-widest' }>
      { keysPressed }
    </div>
  );
};

export default KeysPressed;
