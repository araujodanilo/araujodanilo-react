import { NavbarCompoent } from "../../ui/navbar";

export function HeaderComponent() {
  return (
    <>
      <header className="transition-colors duration-200 bg-zinc-300/75 dark:bg-zinc-800/25 w-full rounded-md px-10 py-4 flex flex-row items-center justify-between">
        <NavbarCompoent />
      </header>
    </>
  );
}
