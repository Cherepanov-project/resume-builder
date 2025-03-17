import React from "react";

interface CardProps {
  icon: JSX.Element;
  text: string;
  isMouseDown?: boolean;
  x?: number;
  y?: number;
}

const Card = ({ icon, text, isMouseDown, x, y }: CardProps) => {
  return (
    <div
      draggable
      className={`box-border bg-white rounded-[3px] min-h-[118px] p-[18px_10px_10px_15px] border border-gray-300 shadow-sm transition-shadow duration-150 hover:shadow-lg hover:border-white hover:cursor-pointer ${
        isMouseDown ? `absolute opacity-80 z-[100]` : `relative opacity-100 z-[1]`
      }`}
      style={
        isMouseDown
          ? {
              width: "calc(33.3% - 15px)",
              left: `calc(${x}px - 0px)`,
              top: `calc(${y}px - 70px)`,
            }
          : { width: "100%" }
      }
    >
      <div className="box-border flex flex-col items-center justify-center relative">
        <div className="my-[8px_auto_15px_auto] flex-[1.9_0_66%]">{icon}</div>
        <div>
          <p className="pt-0 hyphens-auto break-words text-[12px] h-[26.4px] leading-[1.1] mt-[4px] overflow-hidden text-center uppercase">
            {text}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
