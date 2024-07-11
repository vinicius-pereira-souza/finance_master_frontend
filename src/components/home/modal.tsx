import { LuX } from "react-icons/lu";

// components
import Input from "../form/input";

type Props = {
  closeModel: () => void;
  state: boolean;
};

const Modal = ({ closeModel, state }: Props) => {
  return (
    <div
      className={`w-full transition-all px-2 min-h-screen flex items-center justify-center fixed top-0 left-0 bg-modal ${
        state ? "visible" : "invisible"
      }`}
    >
      <div className="bg-white flex-1 max-w-[600px] p-9 rounded-xl">
        <button onClick={closeModel} className="block ml-auto mb-2 text-xl">
          <LuX />
        </button>
        <h2 className="text-center text-[25px] mb-14">
          Cadastrar nova transação
        </h2>
        <form>
          <Input
            type="text"
            textLabel="Título"
            name="title"
            placeholder="Digite um título"
          />
        </form>
      </div>
    </div>
  );
};

export default Modal;
