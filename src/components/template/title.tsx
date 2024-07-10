type Props = {
  title: string;
  subtitle: string;
};

const Title = ({ title, subtitle }: Props) => {
  return (
    <>
      <h1 className="text-white font-bold text-[32px] leading-none">{title}</h1>
      <h2 className="text-gray-690">{subtitle}</h2>
    </>
  );
};

export default Title;
