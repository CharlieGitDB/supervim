import { ChangeEvent, KeyboardEvent, forwardRef } from 'react';


interface TextInputProps {
  value: string;
  onChange: (change: ChangeEvent<HTMLInputElement>) => void;
  onKeyDown?: (keydown: KeyboardEvent<HTMLInputElement>) => void;
  onKeyUp?: (keyup: KeyboardEvent<HTMLInputElement>) => void;
}

const TextInput = forwardRef<HTMLInputElement, TextInputProps>((props, ref) => {
  const { value, onChange, onKeyDown, onKeyUp } = props;
  
  const attributes: Record<string, unknown> = {};
  attributes.className = 'border-2 border-gray-500 outline-none p-2';
  attributes.ref = ref;
  attributes.value = value;
  attributes.onChange = (e: ChangeEvent<HTMLInputElement>) => onChange(e);
  if (onKeyDown) attributes.onKeyDown = (e: KeyboardEvent<HTMLInputElement>) => onKeyDown(e);
  if (onKeyUp) attributes.onKeyUp = (e: KeyboardEvent<HTMLInputElement>) => onKeyUp(e);

  return <input className={ 'border-2 border-gray-500 outline-none p-2' } { ...attributes } />;
});
TextInput.displayName = 'TextInput';

export default TextInput;
