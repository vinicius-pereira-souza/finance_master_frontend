type Props = {
  type: string;
  name: string;
  textLabel: string;
};

const Input = ({ type, name, textLabel }: Props) => {
  return (
    <div>
      <label htmlFor={name}>{textLabel}</label>
      <input type={type} name={name} id={name} />
    </div>
  );
};

export default Input;
