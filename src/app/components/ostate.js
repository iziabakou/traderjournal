'use client';
import { useState } from 'react';

export default function useOState(initialValue) {

  const [value, setValue] = useState(initialValue);
  return {
    value,
    change: setValue
  };
}
