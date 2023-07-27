import createReactContext from './hooks/use-create-context';

export interface BottomSheetConfig {
  close?: () => void;
}

const defaultContext = {};

const [BottomSheetProvider, useBottomSheetContext] =
  createReactContext<BottomSheetConfig>({
    name: 'BottomSheetContext',
    errorMessage:
      'useBottomSheetContext must be used within a BottomSheetProvider',
    defaultValue: defaultContext,
  });

export { BottomSheetProvider, useBottomSheetContext };
