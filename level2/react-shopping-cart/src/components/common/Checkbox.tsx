import styled from '@emotion/styled';
import { useState } from 'react';

interface CheckboxProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
}

const Checkbox = ({ checked = false, onChange }: CheckboxProps) => {
  const [isChecked, setIsChecked] = useState(checked);

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { checked } = e.target;
    setIsChecked(checked);
    onChange(checked);
  };

  return (
    <CheckboxContainer>
      <CheckboxInput
        type="checkbox"
        checked={isChecked}
        onChange={handleCheckboxChange}
      />
    </CheckboxContainer>
  );
};

const CheckboxContainer = styled.div`
  display: inline-flex;
  align-items: center;
  cursor: pointer;
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

export default Checkbox;
