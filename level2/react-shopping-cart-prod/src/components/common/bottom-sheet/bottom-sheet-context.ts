import createReactContext from './hooks/use-create-context';

export interface BottomSheetConfig {
  close?: () => void;
}

const defaultContext = {};

const [BottomSheetProvider, useBottomSheetContext] =
  createReactContext<BottomSheetConfig>(defaultContext);

export { BottomSheetProvider, useBottomSheetContext };
