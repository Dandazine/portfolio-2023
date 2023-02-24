import React from "react";

type Props = {
  btnName: string;
  handleTab: any;
  select: boolean;
};

const Tab = ({ btnName, handleTab, select }: Props) => {
  return (
    <button
      className={`rounded-t-md border-b-2 bg-primary shadow-3xl duration-100 ease-out ${
        select ? "border-boxes bg-opacity-80" : "border-light bg-opacity-30"
      } backdrop px-2.5 py-1 hover:border-header hover:bg-opacity-100`}
      onClick={handleTab}
    >
      {btnName}
    </button>
  );
};

export default Tab;
