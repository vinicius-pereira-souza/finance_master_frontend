import React from "react";

type Props = {
  title: string;
  icon: React.ReactNode;
  value: number;
};

const Card = ({ title, icon, value }: Props) => {
  return (
    <div className="bg-white px-[34px] w-full max-w-[352px] rounded-[10px] shadow-bsh-card">
      <div className="flex items-center justify-between py-2 border-b-[1px] border-b-gray-65 text-blue-980 text-lg font-bold">
        <span>{title}</span>
        {icon}
      </div>
      <div className="py-7 text-center font-bold text-blue-980 text-[32px] ">
        <span className="font-archivo">R$ {value}</span>
      </div>
    </div>
  );
};

export default Card;
