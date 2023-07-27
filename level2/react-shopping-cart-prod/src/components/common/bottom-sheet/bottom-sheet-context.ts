import React, { createContext } from 'react';

export interface BottomSheetConfig {
  close?: () => void;
}

const defaultContext = {};

/**
 * TODO: hook으로 만들기
 */
const createBottomSheetContext = () => {
  const Context = createContext<BottomSheetConfig | undefined>(defaultContext);

  const useContext = () => {
    const context = React.useContext(Context);

    if (context === undefined) {
      throw new Error(
        'useBottomSheetContext must be used within a BottomSheetProvider',
      );
    }

    return context;
  };

  return {
    BottomSheetProvider: Context.Provider,
    useBottomSheetContext: useContext,
  };
};

const { BottomSheetProvider, useBottomSheetContext } =
  createBottomSheetContext();

export { BottomSheetProvider, useBottomSheetContext };
