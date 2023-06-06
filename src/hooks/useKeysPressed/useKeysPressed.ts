import { useEffect, useState } from 'react';

export default function useKeysPressed() {
    const [keysPressed, setKeysPressed] = useState<string[]>([]);

    const handleKeyPress = ({ key }: KeyboardEvent) => {
        const clone = [...keysPressed];
        const previousKeysPressed = keysPressed.length > 14 ? [...clone.splice(0, clone.length - 1)] : keysPressed;
        previousKeysPressed.unshift(key);
        setKeysPressed([...previousKeysPressed]);
    };

    useEffect(() => {
        window.addEventListener('keypress', handleKeyPress);
        return () => window.removeEventListener('keypress', handleKeyPress);
    });

    return keysPressed;
}