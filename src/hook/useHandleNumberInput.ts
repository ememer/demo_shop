import { useState } from 'react';

export const useHandleNumberInput = (initialValue: string | number) => {
  const [quantity, setQuantity] = useState(initialValue);
  const handleNumberInput = (e: React.ChangeEvent) => {
    const target = e.target as HTMLInputElement;
    const result = target.value.replace(/\D/g, '');
    if (result === '0') {
      setQuantity(initialValue);
    }
    setQuantity(result);
  };
  return { quantity, setQuantity, handleNumberInput };
};
