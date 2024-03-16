import { Moon, Sun, SunMoon } from "lucide-react";

import { useTheme } from "../../../../contexts/theme-provider";

export function ChangeThemeSwitch() {
  const { theme, changeTheme } = useTheme();

  return (
    <>
      <span className="md:mr-5 my-auto  bg-zinc-100/50 dark:bg-zinc-800 p-1 rounded-full">
        {theme === "system" && (
          <SunMoon className="size-6 stroke-yellow-600 dark:stroke-violet-500" onClick={changeTheme} />
        )}
        {theme === "dark" && <Moon className="size-6  dark:stroke-violet-500" onClick={changeTheme} />}
        {theme === "light" && <Sun className="size-6 stroke-yellow-600" onClick={changeTheme} />}
      </span>
    </>
  );
}
