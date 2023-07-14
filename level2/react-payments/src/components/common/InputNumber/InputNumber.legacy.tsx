// import { cloneElement, useRef, useState } from 'react';

// import InputNumberField from './InputNumberField';
// import getValidChildren from '../../../utils/getValidChildren';
// import InputNumberContext from './contexts/InputNumberContext';

// interface InputNumberProps {
//   children: React.ReactNode;
//   value?: number[];
//   onChange?: (value: number[]) => void;
// }

// const InputNumber = ({ children }: InputNumberProps) => {
//   const inputNumberRefs = useRef<HTMLInputElement[]>([]);
//   const [index, setIndex] = useState<number>(0);

//   const [values, setValues] = useState<{
//     [key: number]: number;
//   }>({});

//   const handleKeyDown = (
//     event: React.KeyboardEvent<HTMLInputElement>,
//     currentIndex: number,
//     maxLength: number,
//   ) => {
//     const { key } = event;

//     if (
//       key === 'Backspace' &&
//       event.currentTarget.value === '' &&
//       inputNumberRefs.current[currentIndex - 1]
//     ) {
//       inputNumberRefs.current[currentIndex - 1].focus();
//       return;
//     }
//   };

//   const handleChange = (
//     event: React.ChangeEvent<HTMLInputElement>,
//     currentIndex: number,
//     maxLength: number,
//   ) => {
//     const { value } = event.target;

//     if (!validate(value, maxLength)) return;

//     if (
//       value.length === maxLength &&
//       inputNumberRefs.current[currentIndex + 1]
//     ) {
//       inputNumberRefs.current[currentIndex + 1].focus();
//       return;
//     }

//     setValues((prevValues) => ({
//       ...prevValues,
//       [currentIndex]: parseInt(value, 10),
//     }));
//   };

//   const validate = (value: string, maxLength: number) => {
//     const regex = new RegExp(`^[0-9]{1,${maxLength}}$`);
//     return regex.test(value);
//   };

//   const clones = getValidChildren(children).map((child) => {
//     if (child.type === InputNumberField) {
//       const { maxLength = 4 } = child.props as {
//         maxLength: number;
//       };

//       const currentIndex = index;
//       setIndex((prevIndex) => prevIndex + 1);

//       return cloneElement(child, {
//         ref: (ref: HTMLInputElement) => {
//           inputNumberRefs.current[currentIndex] = ref;
//         },
//         key: currentIndex,
//         maxLength: maxLength,
//         onKeyDown: (event: React.KeyboardEvent<HTMLInputElement>) =>
//           handleKeyDown(event, currentIndex, maxLength),
//         onChange: (event: React.ChangeEvent<HTMLInputElement>) =>
//           handleChange(event, currentIndex, maxLength),
//         value: values[currentIndex] || 0,
//       });
//     }

//     return child;
//   });

//   return (
//     <InputNumberContext.Provider value={{ value, onChange }}>
//       {clones}
//     </InputNumberContext.Provider>
//   );
// };

// InputNumber.Field = InputNumberField;

// export default InputNumber;
