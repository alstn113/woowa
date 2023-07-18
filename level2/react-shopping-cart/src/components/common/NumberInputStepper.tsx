import styled from '@emotion/styled';
import { useState } from 'react';

import ArrowDownSVG from '../vectors/ArrowDownSVG';
import ArrowUpSVG from '../vectors/ArrowUpSVG';

interface NumberInputStepperProps {
  value: number;
  onChange: (value: number) => void;
  min?: number;
  max?: number;
  size?: 'sm' | 'lg';
}

const NumberInputStepper = ({
  value,
  onChange,
  min = 1,
  max = 999,
  size = 'sm',
}: NumberInputStepperProps) => {
  const [numberInputValue, setNumberInputValue] = useState<number>(value);

  const handleNumberInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (/\D/.test(e.target.value)) return;

    let value = Number(e.target.value);

    if (value > max) value = max;
    else if (value < min) value = min;

    setNumberInputValue(value);
    onChange(value);
  };

  const handleNumberInputIncrement = () => {
    if (numberInputValue >= max) return;

    setNumberInputValue(numberInputValue + 1);
    onChange(numberInputValue + 1);
  };

  const handleNumberInputDecrement = () => {
    if (numberInputValue <= min) return;

    setNumberInputValue(numberInputValue - 1);
    onChange(numberInputValue - 1);
  };

  return (
    <Container>
      <NumberInputField
        type="text"
        inputMode="numeric"
        value={numberInputValue}
        onChange={handleNumberInputChange}
      />
      <NumberInputStepperWrapper>
        <NumberInputIncrementStepper
          onClick={handleNumberInputIncrement}
          disabled={numberInputValue === min}
        >
          <ArrowUpSVG />
        </NumberInputIncrementStepper>
        <NumberInputDecrementStepper
          onClick={handleNumberInputDecrement}
          disabled={numberInputValue === max}
        >
          <ArrowDownSVG />
        </NumberInputDecrementStepper>
      </NumberInputStepperWrapper>
    </Container>
  );
};

const Container = styled.div`
  width: 64px;
  height: 28px;
  display: flex;
  align-items: center;
  background-color: #ffffff;
`;

const NumberInputField = styled.input`
  width: 42px;
  height: 100%;
  text-align: center;
  font-size: 12px;
  border: 1px solid #dddddd;
`;
const NumberInputStepperWrapper = styled.div`
  width: 22px;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const NumberInputIncrementStepper = styled.button`
  border: 1px solid #dddddd;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50%;
  border-collapse: collapse;
  svg {
    width: 5px;
    height: 5px;
  }
`;

const NumberInputDecrementStepper = styled.button`
  border: 1px solid #dddddd;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50%;
  svg {
    width: 5px;
    height: 5px;
  }
`;

export default NumberInputStepper;
