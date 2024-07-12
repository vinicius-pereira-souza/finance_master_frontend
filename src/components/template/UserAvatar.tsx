import img from "../../assets/imagem-de-usuario.png";

type Props = {
  styles?: string;
};

const UserAvatar = ({ styles }: Props) => {
  return (
    <div className={`flex items-center ${styles}`}>
      <div className="w-full sm:w-auto">
        <span className="block text-white text-base leading-none ">
          Vinicius
        </span>
        <span className="sm:hidden lg:block text-[13px] ms:text-base text-gray-690 leading-none ">
          vinicius.pereira.souza@gmail.com
        </span>
      </div>
      <img className="w-9 h-9 mr-auto" src={img} alt="user imagem avatar" />
    </div>
  );
};

export default UserAvatar;
