interface SelectorProps {
  name: string;
  options: { value: string; name: string }[];
}

const Selector = ({ name, options }: SelectorProps) => {
  return (
    <select name={name}>
      {options.map((option) => {
        return <option value={option.value}>{option.name}</option>;
      })}
    </select>
  );
};

export default Selector;
