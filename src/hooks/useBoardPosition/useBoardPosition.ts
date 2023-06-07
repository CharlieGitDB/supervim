import { useCallback, useEffect, useMemo, useState } from 'react';

export default function useBoardPosition() {
  const [ position, setPosition ] = useState<{ x: number, y: number }>({ x: 0, y: 0 });

  const handleKeyPress = useCallback(({ key }: KeyboardEvent) => {
    switch (key) {
      case 'j':
        setPosition({ x: position.x, y: position.y < 7 ? position.y + 1 : position.y });
        break;
      case 'k':
        setPosition({ x: position.x, y: position.y <= 0 ? position.y : position.y - 1 });
        break;
      case 'h':
        setPosition({ x: position.x <= 0 ? position.x : position.x - 1, y: position.y });
        break;
      case 'l':
        setPosition({ x: position.x >= 3 ? position.x : position.x + 1, y: position.y });
        break;
      default:
        console.log('nothing');
        break;
    }
  }, [ position.x, position.y ]);

  useEffect(() => {
    window.addEventListener('keypress', handleKeyPress);
    return () => window.removeEventListener('keypress', handleKeyPress);
  }, [ handleKeyPress ]);

  return useMemo(() => position, [ position ]);
}