import React from 'react';

export interface BottomSheetConfig {
  close?: () => void;
}

const defaultContext = {};

export const BottomSheetContext =
  React.createContext<BottomSheetConfig>(defaultContext);

export const useBottomSheetContext = (): BottomSheetConfig =>
  React.useContext<BottomSheetConfig>(BottomSheetContext);
