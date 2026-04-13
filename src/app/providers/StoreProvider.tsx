import type { ReactNode } from 'react';
import { StoreContext } from './StoreContext';
import { rootStore } from '../store';

export function StoreProvider({ children }: { children: ReactNode }) {
  return (
    <StoreContext.Provider value={rootStore}>{children}</StoreContext.Provider>
  );
}
