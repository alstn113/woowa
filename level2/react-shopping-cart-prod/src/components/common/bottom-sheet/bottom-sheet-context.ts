import createReactContext from './utils/createReactContext';

export interface BottomSheetConfig {
  close?: () => void;
}

const defaultContext = {};

const [BottomSheetProvider, useBottomSheetContext] =
  createReactContext<BottomSheetConfig>(defaultContext);

export { BottomSheetProvider, useBottomSheetContext };
