import React from "react";

type Props = {
  title: string;
  icon: React.ReactNode;
  value: number;
};

const Card = ({ title, icon, value }: Props) => {
  return (
    <div
      className="bg-white px-[18px] lg:px-[34px] w-full md:max-w-[352px] rounded-[10px] 
    shadow-bsh-card mb-4 sm:mb-0"
    >
      <div
        className="flex items-center justify-between py-3 lg:py-2 border-b
       border-b-gray-65 text-blue-980    font-bold"
      >
        <span className="text-14 sm:text-lg">{title}</span>
        <span className="text-xl">{icon}</span>
      </div>
      <div className="py-3 sm:py-7 text-center font-bold text-blue-980 text-20 sm:text-32 ">
        <span className="font-archivo">R$ {value}</span>
      </div>
    </div>
  );
};

export default Card;
