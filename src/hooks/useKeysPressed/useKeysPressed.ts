import { useEffect, useState } from 'react';

export default function useKeysPressed() {
    const [ keysPressed, setKeysPressed ] = useState<string[]>([]);

    const handleKeyPress = ({ key }: KeyboardEvent) => {
        const clone = [ ...keysPressed ];
        
        if (clone.length > 19) {
            clone.shift();
            clone.unshift(key);
            clone.shift();
        } else {
            clone.push(key);
        }

        setKeysPressed(clone);
    };

    useEffect(() => {
        window.addEventListener('keypress', handleKeyPress);
        return () => window.removeEventListener('keypress', handleKeyPress);
    });

    return keysPressed;
}