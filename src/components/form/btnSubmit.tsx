type Props = {
  text: string;
};

const BtnSubmit = ({ text }: Props) => {
  return (
    <button
      type="submit"
      className="text-white font-bold text-center w-full py-[16px] bg-black hover:bg-zinc-950"
    >
      {text}
    </button>
  );
};

export default BtnSubmit;
