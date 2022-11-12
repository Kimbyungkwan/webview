import { useEffect } from 'react';
import type { EffectCallback } from 'react';

export default function useMount(func: EffectCallback) {
  return useEffect(func, []);
}
