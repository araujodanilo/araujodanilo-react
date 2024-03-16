import { Link } from "react-router-dom";
import { NavLinks } from "../../../constants/nav-links";

export function SidebarComponent() {
  return (
    <div className="bg-zinc-300/75 dark:bg-zinc-800/25 w-fit p-5 rounded-md space-y-4">
      <h1 className="font-bold text-2xl">Sidebar</h1>
      <ul className="flex flex-col gap-5">
        {NavLinks.map((link) => (
          <li key={link.name}>
            <Link to={link.path}>{link.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
