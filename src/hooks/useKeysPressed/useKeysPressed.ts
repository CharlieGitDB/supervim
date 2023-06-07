import { useCallback, useEffect, useState } from 'react';

export default function useKeysPressed() {
    const [ keysPressed, setKeysPressed ] = useState<string[]>([]);

    const handleKeyPress = useCallback(({ key }: KeyboardEvent) => {
        const clone = [ ...keysPressed ];
        
        if (clone.length > 19) {
            clone.shift();
            clone.unshift(key);
            clone.shift();
        } else {
            clone.push(key);
        }

        setKeysPressed(clone);
    }, [ keysPressed ]);

    useEffect(() => {
        window.addEventListener('keypress', handleKeyPress);
        return () => window.removeEventListener('keypress', handleKeyPress);
    }, [ handleKeyPress ]);

    return keysPressed;
}