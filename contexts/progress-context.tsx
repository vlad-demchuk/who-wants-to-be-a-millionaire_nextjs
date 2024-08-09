'use client';

import React, { createContext, Dispatch, useState } from 'react';

interface Progress {
  currentStage: number,
  setCurrentStage: Dispatch<number>,
  prize: number,
  setPrize: Dispatch<number>
}

export const ProgressContext = createContext<Progress>({
  currentStage: 1,
  setCurrentStage: () => {},
  prize: 0,
  setPrize: () => {},
});

export default function ProgressProvider({
  children,
}: {
  children: React.ReactNode
}) {
  const [currentStage, setCurrentStage] = useState(1);
  const [prize, setPrize] = useState(0);

  const value = {
    currentStage,
    setCurrentStage,
    prize,
    setPrize,
  };

  return <ProgressContext.Provider value={value}>
    {children}
  </ ProgressContext.Provider>;
}
