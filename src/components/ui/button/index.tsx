import { ComponentProps } from "react";

type ButtonProps = ComponentProps<"button">;

export function Button({ children }: ButtonProps) {
  return (
    <button className="text-zinc-50 dark:ring-violet-500 dark:bg-violet-700 dark:hover:bg-violet-800 ring-yellow-500 bg-yellow-600 hover:bg-yellow-700 font-semibold  w-full rounded-md px-5 py-4 transition-colors duration-200">
      {children}
    </button>
  );
}
