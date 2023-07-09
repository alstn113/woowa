interface SelectorProps {
  name: string;
  options: { value: string; name: string }[];
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

const Selector = ({ name, options, onChange }: SelectorProps) => {
  return (
    <select name={name} onChange={onChange}>
      {options.map((option) => {
        return (
          <option key={option.name} value={option.value}>
            {option.name}
          </option>
        );
      })}
    </select>
  );
};

export default Selector;
