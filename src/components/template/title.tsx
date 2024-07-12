type Props = {
  title: string;
  subtitle: string;
};

const Title = ({ title, subtitle }: Props) => {
  return (
    <>
      <h1 className="text-white font-bold text-25 lg:text-32 leading-none mt-10 lg:mt-9">
        {title}
      </h1>
      <h2 className="text-gray-690 text-base">{subtitle}</h2>
    </>
  );
};

export default Title;
