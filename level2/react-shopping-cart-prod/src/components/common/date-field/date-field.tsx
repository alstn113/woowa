import React, { useEffect, useRef, useState } from 'react';

import styled from '@emotion/styled';

const DateField = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [value, setValue] = useState<string>('MM/DD/YYYY');
  const [cursorPosition, setCursorPosition] = useState<number | null>(null);

  const handleInputFocus = (e: React.FocusEvent<HTMLInputElement>) => {
    if (e.target.value === '') setValue('MM/DD/YYYY');
  };

  const handleInputBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    if (e.target.value === 'MM/DD/YYYY') setValue('');
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const handleInputClick = (e: React.MouseEvent<HTMLInputElement>) => {
    const target = e.target as HTMLInputElement;
    setCursorPosition(target.selectionStart);
  };

  useEffect(() => {
    if (cursorPosition !== null) {
      // Determine the selected range based on cursor position
      let selectedRange: [number, number] = [
        cursorPosition,
        cursorPosition + 1,
      ];
      if (cursorPosition <= 2) selectedRange = [0, 2];
      else if (cursorPosition <= 5) selectedRange = [3, 5];
      else if (cursorPosition <= 10) selectedRange = [6, 10];

      inputRef.current?.setSelectionRange(selectedRange[0], selectedRange[1]);
    }
  }, [cursorPosition]);

  return (
    <>
      <input type="date" />
      <StyledInput
        ref={inputRef}
        placeholder="Date Picker"
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
        value={value}
        onChange={handleInputChange}
        onClick={handleInputClick}
      />
    </>
  );
};

const StyledInput = styled.input`
  border: 1px solid #d9d9d9;
  padding: 12px 18px;
  border-radius: 8px;
`;

export default DateField;
