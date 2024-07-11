import { useState } from "react";

// components
import Title from "../components/template/title";
import Card from "../components/home/card";
import ListTitle from "../components/template/listTitles";
import Item from "../components/template/item";
import Modal from "../components/home/modal";

// icons
import { LuWallet, LuArrowDown, LuArrowUp, LuPlus } from "react-icons/lu";

interface Item {
  id: number;
  title: string;
  date: string;
  status: string;
  value: number;
}

const list: Array<Item> = [
  {
    id: Math.random(),
    title: "Mercado",
    date: "11-07-2024",
    status: "saida",
    value: 100,
  },
  {
    id: Math.random(),
    title: "Salario",
    date: "30-07-2024",
    status: "entrada",
    value: 1500,
  },
  {
    id: Math.random(),
    title: "livraria",
    date: "10-05-2024",
    status: "saida",
    value: 25,
  },
  {
    id: Math.random(),
    title: "Mercado",
    date: "11-08-2024",
    status: "saida",
    value: 250,
  },
  {
    id: Math.random(),
    title: "Gasolina",
    date: "11-07-2024",
    status: "saida",
    value: 100,
  },
];

const Home = () => {
  const [openModel, setOpenModel] = useState<boolean>(false);

  const toggleOpenModel = (): void => {
    setOpenModel(!openModel);
  };

  return (
    <div className="pb-20">
      <Modal closeModel={toggleOpenModel} state={openModel} />
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
        <button
          onClick={toggleOpenModel}
          className="text-white bg-purple-550 hover:bg-purple-810 
        transition-all rounded-lg p-[16px] flex items-center gap-3"
        >
          <LuPlus /> Adicionar
        </button>
      </div>
      <div className="bg-white rounded-[10px] shadow-bsh-card">
        <div className="px-3 py-4 font-bold text-gray-690 text-sm grid grid-cols-12 border-b-[1px] border-b-gray-65">
          <ListTitle text="Título" styles="col-span-3" />
          <ListTitle text="Data" styles="col-span-2" />
          <ListTitle text="Status" styles="col-span-2" />
          <ListTitle text="Quantia" styles="col-span-3" />
          <ListTitle text="Editar" styles="col-span-1" />
          <ListTitle text="Deletar" />
        </div>
        <ul className="w-full">
          {list.length > 0 &&
            list.map((item) => (
              <Item
                key={item.id}
                title={item.title}
                date={item.date}
                status={item.status}
                value={item.value}
              />
            ))}
        </ul>
      </div>
    </div>
  );
};

export default Home;
