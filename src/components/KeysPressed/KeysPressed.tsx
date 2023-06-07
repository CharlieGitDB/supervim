import useKeysPressed from '../../hooks/useKeysPressed/useKeysPressed';

const KeysPressed = () => {
  const keysPressed = useKeysPressed();

  return (
    <div className={ 'min-h-[3%] tracking-widest' }>
      { keysPressed }
    </div>
  );
};

export default KeysPressed;
