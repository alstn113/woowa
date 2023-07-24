import { useEffect, useState } from 'react';

import styled from '@emotion/styled';

interface CheckboxProps {
  checked?: boolean;
  onChange?: (checked: boolean) => void;
  label?: string;
}

const Checkbox = ({ checked = false, onChange, label = '' }: CheckboxProps) => {
  const [isChecked, setIsChecked] = useState(checked);

  useEffect(() => {
    setIsChecked(checked);
  }, [checked]);

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { checked } = e.target;
    setIsChecked(checked);
    onChange?.(checked);
  };

  return (
    <CheckboxContainer>
      <CheckboxInput
        type="checkbox"
        checked={isChecked}
        onChange={handleCheckboxChange}
      />
      {label && <CheckboxLabel>{label}</CheckboxLabel>}
    </CheckboxContainer>
  );
};

const CheckboxContainer = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  gap: 8px;
`;

const CheckboxInput = styled.input`
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  width: 28px;
  height: 28px;
  border: 1px solid #22a6a2;
  background-color: #ffffff;
  border-radius: 2px;
  position: relative;
  outline: none;
  cursor: pointer;

  &:checked {
    border: 1px solid #3288ff;
    background-color: #333333;

    &:after {
      content: '';
      position: absolute;
      top: 6px;
      left: 5px;
      transform: rotate(-45deg);
      border-left: 3px solid #ffffff;
      border-bottom: 3px solid #ffffff;
      width: 14px;
      height: 6px;
    }
  }
`;

const CheckboxLabel = styled.label`
  font-size: 16px;
  font-weight: 400;
`;

export default Checkbox;
