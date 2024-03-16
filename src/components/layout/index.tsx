import { FooterComponent } from "./footer";
import { HeaderComponent } from "./header";
import { Outlet } from "react-router-dom";

export function Layout() {
  return (
    <div className="space-y-4 min-h-screen flex flex-col py-4 px-4 mx-auto w-full">
      <HeaderComponent />
      <main className="flex-1 pt-5">
        <Outlet />
      </main>
      <FooterComponent />
    </div>
  );
}
