type Props = {
  type: string;
  name: string;
  labelText: string;
  placeholder: string;
  styles?: string;
};

const Input = ({ type, name, labelText, placeholder, styles }: Props) => {
  return (
    <div className={`flex flex-col ${styles}`}>
      <label
        htmlFor={name}
        className="text-gray-690 text-[15px] font-bold -mb-[2px]"
      >
        {labelText}
      </label>
      <input
        className="flex-1 p-2 lg:p-4 bg-gray-68 border-b border-b-gray-690 outline-none placeholder:text-sm"
        type={type}
        name={name}
        id={name}
        placeholder={placeholder}
      />
    </div>
  );
};

export default Input;
