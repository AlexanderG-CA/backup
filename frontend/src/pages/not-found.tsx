import { Link } from "wouter";
import { Button } from "../components/ui/button";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center flex-col space-y-6">
      <h1 className="text-5xl font-bold text-gray-800">404</h1>
      <p className="text-gray-500">The page you're looking for doesn't exist.</p>
      <Link href="/">
        <Button className="bg-indigo-600 text-white">Go Home</Button>
      </Link>
    </div>
  );
}