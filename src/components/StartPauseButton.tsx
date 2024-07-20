import React from "react";
import { BsFillPlayFill, BsFillStopFill } from "react-icons/bs";
import { twMerge } from "tailwind-merge";

type StartPauseButtonProps = {
  onClick: () => void;
  isPlaying: boolean;
};

const StartPauseButton: React.FC<StartPauseButtonProps> = ({
  onClick,
  isPlaying,
}) => {
  return (
    <button
      className={twMerge(
        "flex h-8 w-8 items-center justify-center rounded-full shadow-md transition ease-in",
        isPlaying
          ? "bg-[#FF0000] hover:bg-[#BE0000]"
          : "bg-[#0000FF] hover:bg-[#00008F]",
      )}
      onClick={onClick}
    >
      {isPlaying ? (
        <BsFillStopFill className="h-6 w-6 text-white" />
      ) : (
        <BsFillPlayFill className="h-6 w-6 text-white" />
      )}
    </button>
  );
};

export default StartPauseButton;
