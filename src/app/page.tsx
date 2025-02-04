import Link from "next/link";
import { ticketsPath } from "@/paths";

const HomePage = () => {
  return (
    <div className="flex-1 flex flex-col gap-y-8">
      <div>
        <h2 className="text-3xl font-bold tracking-tight">HomePage</h2>;
        <p className="text-sm text-mutated-foreground">
          Your home plase to start
        </p>
      </div>
        <div className="flex-1 flex flex-col items-center">
          <Link href={ticketsPath()} className="text-sm underline">
          Go to Tickets
          </Link>
      </div>
    </div>
  );
};

export default HomePage;
