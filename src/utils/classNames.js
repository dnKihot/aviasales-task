import clsx from "clsx";

export const getTabClasses = (isActive) =>
  clsx("flex-1 py-3 px-4 text-sm font-semibold text-center transition-colors", {
    "bg-blue-500 text-white": isActive,
    "bg-white text-gray-900 hover:bg-gray-50": !isActive,
  });

export const getFilterItemClasses = (isChecked) =>
  clsx(
    "flex items-center space-x-2 cursor-pointer p-2 rounded transition-colors",
    {
      "bg-blue-50 border-blue-200": isChecked,
      "hover:bg-gray-50 border-gray-200": !isChecked,
    },
  );

export const getButtonClasses = (isPrimary = true) =>
  clsx(
    "w-full py-3 px-4 rounded-lg font-semibold text-sm uppercase transition-colors disabled:opacity-60 disabled:cursor-not-allowed",
    {
      "bg-blue-500 text-white hover:bg-blue-600": isPrimary,
      "bg-gray-200 text-gray-700 hover:bg-gray-300": !isPrimary,
    },
  );
