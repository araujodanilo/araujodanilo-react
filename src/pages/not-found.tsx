import { Button } from "../components/ui/button";
import { Link } from "react-router-dom";

export function NotFoundPage() {
  return (
    <>
      <div className="bg-zinc-300/75 dark:bg-zinc-800/25 rounded-md p-10 w-fit mx-auto flex flex-col gap-5">
        <h1 className="font-bold text-4xl text-center">Not Found</h1>
        <p className="text-lg">Sorry, the page you are looking for does not exist.</p>
        <Link to="/">
          <Button className="bg-slate-500">Go back to home</Button>
        </Link>
      </div>
    </>
  );
}
