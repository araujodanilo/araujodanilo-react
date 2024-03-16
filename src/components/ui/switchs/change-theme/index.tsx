import { Moon, Sun, SunMoon } from "lucide-react";

import { useTheme } from "../../../../contexts/theme-provider";

export function ChangeThemeSwitch() {
  const { theme, changeTheme } = useTheme();

  return (
    <>
      <span className="md:mr-5 my-auto hover:bg-zinc-50 dark:bg-zinc-800 hover:dark:bg-zinc-900 p-1 rounded-full transition-colors duration-200">
        {theme === "system" && (
          <SunMoon className="size-6 stroke-yellow-600 dark:stroke-violet-500" onClick={changeTheme} />
        )}
        {theme === "dark" && <Moon className="size-6" onClick={changeTheme} />}
        {theme === "light" && <Sun className="size-6" onClick={changeTheme} />}
      </span>
    </>
  );
}
