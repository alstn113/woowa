import React from 'react';

const useCreateContext = <T>(defaultValue: T) => {
  const CustomContext = React.createContext<T | undefined>(defaultValue);
  const useContext = () => {
    const value = React.useContext(CustomContext);
    if (!value) {
      throw new Error('useContext must be inside a Provider with a value');
    }
    return value;
  };
  return [CustomContext.Provider, useContext] as const;
};

export default useCreateContext;
