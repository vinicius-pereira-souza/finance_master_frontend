import { LuPencil, LuTrash2 } from "react-icons/lu";
type Props = {
  title: string;
  date: string;
  status: string;
  value: number;
};

const Item = ({ title, date, status, value }: Props) => {
  return (
    <li>
      <div className="p-3 text-sm grid grid-cols-12 items-center border-b-[1px] border-b-gray-65 text-center">
        <p className="col-span-3 px-3">{title}</p>
        <span className="block col-span-2 px-3">{date}</span>
        <span
          className={`block col-span-2 px-3 font-bold ${
            status === "saida" ? "text-red-485" : "text-green-370"
          }`}
        >
          {status}
        </span>
        <span className="block col-span-3 px-3 font-bold">R$ {value}</span>
        <button className="col-span-1 px-3 flex justify-center text-white">
          <span className="block bg-purple-550 transition-all hover:bg-purple-810 p-[9px] rounded">
            <LuPencil />
          </span>
        </button>
        <button className="px-3 flex justify-center text-white">
          <span className="block bg-red-485 transition-all hover:bg-red-460 p-[9px] rounded">
            <LuTrash2 />
          </span>
        </button>
      </div>
    </li>
  );
};

export default Item;
