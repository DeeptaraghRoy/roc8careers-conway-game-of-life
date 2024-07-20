import React from "react";

type UtilButtonProps = {
  onClick: () => void;
  children: React.ReactNode;
};

const UtilButton: React.FC<UtilButtonProps> = ({ onClick, children }) => {
  return (
    <button
      className="flex h-8 w-8 items-center justify-center rounded-full bg-black px-12 text-white shadow-md transition ease-in hover:bg-gray-800"
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default UtilButton;
