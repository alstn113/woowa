import React from 'react';

const getValidChildren = (children: React.ReactNode) => {
  return React.Children.toArray(children).filter(
    (child) => React.isValidElement(child) && child.type !== React.Fragment,
  ) as React.ReactElement[];
};

export default getValidChildren;
