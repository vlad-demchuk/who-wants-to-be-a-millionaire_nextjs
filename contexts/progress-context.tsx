'use client';

import React, { createContext, Dispatch, useState } from 'react';

interface Progress {
  currentStage: number,
  setCurrentStage: Dispatch<number>,
  isGameOver: boolean
  setIsGameOver: Dispatch<boolean>,
}

export const ProgressContext = createContext<Progress>({
  currentStage: 1,
  setCurrentStage: () => {},
  isGameOver: false,
  setIsGameOver: () => {},
});

export default function ProgressProvider({
  children,
}: {
  children: React.ReactNode
}) {
  const [currentStage, setCurrentStage] = useState(1);
  const [isGameOver, setIsGameOver] = useState(false);

  const value = {
    currentStage,
    setCurrentStage,
    isGameOver,
    setIsGameOver,
  };

  return <ProgressContext.Provider value={value}>
    {children}
  </ ProgressContext.Provider>;
}
