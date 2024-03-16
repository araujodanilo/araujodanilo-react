import { FooterComponent } from "./footer";
import { HeaderComponent } from "./header";
import { Outlet } from "react-router-dom";

export function Layout() {
  return (
    <div className="bg-zinc-50 text-zinc-950 dark:bg-zinc-950 dark:text-zinc-50 py-5 px-2 space-y-4 transition-colors duration-200 w-screen min-h-screen h-screen">
      <HeaderComponent />
      <main className="bg-zinc-300/75 dark:bg-zinc-800/25 rounded-md py-5 px-5">
        <Outlet />
      </main>
      <FooterComponent />
    </div>
  );
}
