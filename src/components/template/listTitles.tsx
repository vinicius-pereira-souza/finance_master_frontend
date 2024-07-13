type Props = {
  text: string;
  styles?: string;
};

const ListTitle = ({ text, styles }: Props) => {
  return <h3 className={`span_title text-center  ${styles}`}>{text}</h3>;
};

export default ListTitle;
