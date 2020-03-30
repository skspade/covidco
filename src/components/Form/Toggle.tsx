import React, { SetStateAction } from "react";

interface Props {
  setToggled: React.Dispatch<SetStateAction<boolean>>;
  isToggled: boolean;
  checkedLabel: string | React.ReactNode;
  uncheckedLabel: string | React.ReactNode;
  checkedOnClick?: (e:React.MouseEvent) => void;
  uncheckedOnClick?: (e:React.MouseEvent) => void;
}
const Toggle = ({
  setToggled,
  isToggled,
  checkedLabel,
  uncheckedLabel,
  checkedOnClick,
  uncheckedOnClick,
}: Props) => {
  return (
    <div className="flex flex-col">
      {isToggled ? (
        <label
          htmlFor="checked"
          className="mt-3 inline-flex items-center cursor-pointer"
        >
          <span className="relative">
            <span className="block w-10 h-6 bg-gray-400 rounded-full shadow-inner" />
            <span className="absolute block w-4 h-4 mt-1 ml-1 rounded-full shadow inset-y-0 left-0 focus-within:shadow-outline transition-transform duration-300 ease-in-out bg-purple-600 transform translate-x-full">
              <input
                id="checked"
                type="checkbox"
                className="absolute opacity-0 w-0 h-0"
                onClick={(e) => {
                  checkedOnClick?.(e);
                  setToggled(prev => !prev);
                }}
              />
            </span>
          </span>
          <span className="ml-3 text-sm">{checkedLabel}</span>
        </label>
      ) : (
        <label
          htmlFor="unchecked"
          className="mt-3 inline-flex items-center cursor-pointer"
        >
          <span className="relative">
            <span className="block w-10 h-6 bg-gray-400 rounded-full shadow-inner" />
            <span className="absolute block w-4 h-4 mt-1 ml-1 bg-white rounded-full shadow inset-y-0 left-0 focus-within:shadow-outline transition-transform duration-300 ease-in-out">
              <input
                id="unchecked"
                type="checkbox"
                className="absolute opacity-0 w-0 h-0"
                onClick={(e) => {
                  uncheckedOnClick?.(e);
                  setToggled(prev => !prev);
                }}
              />
            </span>
          </span>
          <span className="ml-3 text-sm">{uncheckedLabel}</span>
        </label>
      )}
    </div>
  );
};

export default Toggle;
