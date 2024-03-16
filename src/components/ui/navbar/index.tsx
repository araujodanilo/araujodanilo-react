import { Link, useLocation } from "react-router-dom";
import { NavbarActionType, navbarReducer } from "./navbar-reducer";
import { useEffect, useReducer } from "react";

import { ChangeThemeSwitch } from "../switchs/change-theme";
import { Menu } from "lucide-react";
import { NavLinks } from "../../../constants/nav-links";

export function NavbarCompoent() {
  const { pathname } = useLocation();

  const [navbarOpen, dispatch] = useReducer(navbarReducer, false);

  const handleToogle = () => {
    dispatch({ type: NavbarActionType.TOGGLE });
  };

  useEffect(() => {
    handleToogle();
  }, [pathname]);

  return (
    <nav className="flex flex-col md:flex-row justify-between items-center md:w-9/12 mx-auto">
      <div className=" flex flex-row gap-5 items-center select-none w-full justify-center md:justify-start">
        <img
          src="https://github.com/araujodanilo.png"
          alt="Logo"
          className="size-8 rounded-md overflow-hidden bg-cover"
        />
        <span className="font-bold text-base md:text-lg text-nowrap">Araujo Danilo</span>
        <Menu
          onClick={handleToogle}
          className={`${
            navbarOpen ? "rotate-90" : "rotate-0 "
          } md:hidden overflow-hidden transition-transform duration-200 size-8`}
        />
      </div>

      <ul
        className={`${
          navbarOpen ? "flex h-auto mt-5 md:mt-0" : "hidden md:flex"
        } peer/item overflow-hidden flex-col items-center md:flex-row md:justify-end gap-5 w-full`}
      >
        <ChangeThemeSwitch />
        {NavLinks.map((link) => (
          <li
            key={link.path}
            className={`${
              pathname === link.path
                ? "text-sky-600 dark:text-violet-500"
                : "hover:text-sky-600/75 dark:hover:text-violet-500/75"
            } text-lg font-semibold md:w-auto text-center w-full hover:transition-colors hover:duration-300`}
          >
            <Link to={link.path}>{link.name}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
