// components
import Title from "../components/template/title";
import Card from "../components/home/card";

// icons
import { LuWallet, LuArrowDown, LuArrowUp } from "react-icons/lu";

const Home = () => {
  return (
    <div>
      <Title title="Home" subtitle="Veja seus mais novos transações" />
      <div className="mt-16 mb-9 grid lg:grid-cols-3">
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
    </div>
  );
};

export default Home;
