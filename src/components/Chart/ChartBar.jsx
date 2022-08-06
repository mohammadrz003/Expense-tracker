import React from "react";

const ChartBar = (props) => {
  let barFillHeight = "0%";

  if (props.maxValue > 0) {
    barFillHeight = Math.round((props.value / props.maxValue) * 100) + "%";
  }

  return (
    <div className="flex flex-col items-center h-full w-full">
      <div className="flex justify-center items-end h-full w-full max-w-[18px] md:max-w-[20px] bg-gray-300 rounded-xl overflow-hidden">
        <div
          className={`w-full bg-[#19D3DA] transform transition-all`}
          style={{ height: barFillHeight }}
        ></div>
      </div>
      <div className="text-xs md:text-base">{props.label}</div>
    </div>
  );
};

export default ChartBar;
