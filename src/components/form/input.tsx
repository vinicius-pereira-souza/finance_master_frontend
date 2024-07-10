type Props = {
  type: string;
  name: string;
  textLabel: string;
  placeholder: string;
  styles?: string;
};

const Input = ({ type, name, textLabel, placeholder, styles }: Props) => {
  return (
    <div className={`flex flex-col ${styles}`}>
      <label
        htmlFor={name}
        className="text-gray-690 text-[15px] font-bold mb-[-2px]"
      >
        {textLabel}
      </label>
      <input
        className="flex-1 h-[55px] px-4 py-[16px] bg-gray-68 border-b-[1px] border-b-gray-690 outline-none placeholder:text-[15px]"
        type={type}
        name={name}
        id={name}
        placeholder={placeholder}
      />
    </div>
  );
};

export default Input;
