import Link from "next/link";
import { ChevronDown } from "lucide-react";

const Header = () => {
  return (
    <div className="flex items-center justify-between m-2.5 w-full absolute top-0 left-0 pl-2 pr-12">
      <button className="flex items-center gap-1 hover:bg-[#313131] transition-colors px-3 py-2 rounded-lg cursor-pointer ">
        ChatGPT
        <ChevronDown size={18} />
      </button>
      <Link href={"/signin"} className="text-sm">
        Sign in
      </Link>
    </div>
  );
};

export default Header;
