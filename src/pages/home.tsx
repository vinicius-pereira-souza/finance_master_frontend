// components
import Title from "../components/template/title";
import Card from "../components/home/card";

// icons
import { LuWallet, LuArrowDown, LuArrowUp, LuPlus } from "react-icons/lu";

const Home = () => {
  return (
    <div>
      <Title title="Home" subtitle="Veja seus mais novos transações" />
      <div className="mt-16 grid lg:grid-cols-3">
        <Card title="Valor na conta" icon={<LuWallet />} value={1500} />
        <Card
          title="Valor de entrada"
          icon={<LuArrowDown className="text-green-370" />}
          value={500}
        />
        <Card
          title="Valor de saída"
          icon={<LuArrowUp className="text-red-485" />}
          value={30}
        />
      </div>
      <div className="flex items-center gap-4 my-9">
        <span className="flex-1 block h-[1px] bg-gray-72"></span>
        <button className="text-white bg-purple-550 hover:bg-purple-810 transition-all rounded-lg p-[16px] flex items-center gap-3">
          <LuPlus /> Adicionar
        </button>
      </div>
    </div>
  );
};

export default Home;
