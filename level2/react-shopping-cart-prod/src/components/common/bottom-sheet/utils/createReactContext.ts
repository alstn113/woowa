import React from 'react';

const createReactContext = <T>(defaultValue: T) => {
  const context = React.createContext<T | undefined>(defaultValue);
  const useContext = () => {
    const c = React.useContext(context);
    if (!c) {
      throw new Error('useContext must be inside a Provider with a value');
    }
    return c;
  };
  return [context.Provider, useContext] as const;
};

export default createReactContext;
