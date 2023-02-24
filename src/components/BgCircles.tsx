import React from "react";

type Props = {};

const BgCircles = (props: Props) => {
  return (
    <div className="relative flex items-center justify-center">
      <div className="absolute h-[100px] w-[100px] animate-pulse animate-spinner rounded-full border-y border-light opacity-10" />
      <div className="absolute h-[250px] w-[250px] rounded-full border border-light opacity-10" />
      <div className="absolute h-[503px] w-[503px] animate-pulse animate-spinner rounded-full border-y border-light opacity-10" />
      <div className="absolute h-[756px] w-[756px] animate-attract rounded-full border-y-2 border-light opacity-50" />
      <div className="absolute h-[756px] w-[756px] animate-pulse rounded-full border border-light opacity-10" />
    </div>
  );
};

export default BgCircles;
