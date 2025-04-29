import { Link } from "wouter";
import { Button } from "./ui/button";

export default function Header() {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-10">
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center h-16">
        <Link href="/">
          <div className="text-2xl font-bold cursor-pointer">
            <span className="text-black">Co</span><span className="text-blue-600">Connect</span>
          </div>
        </Link>
        <div className="flex gap-4 items-center">
          <Link href="/"><span className="text-black hover:text-blue-600 cursor-pointer">Home</span></Link>
          <Link href="/projects"><span className="text-black hover:text-blue-600 cursor-pointer">Find Projects</span></Link>
          <Link href="/about"><span className="text-black hover:text-blue-600 cursor-pointer">About</span></Link>
          <Link href="/auth"><Button className="border border-blue-600 text-blue-600">Login</Button></Link>
          <Link href="/auth"><Button className="bg-blue-600 text-white">Sign up</Button></Link>
        </div>
      </div>
    </header>
  );
}
