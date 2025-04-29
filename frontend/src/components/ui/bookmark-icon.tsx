import { Bookmark, BookmarkCheck } from "lucide-react";

type BookmarkIconProps = {
  active: boolean;
  onClick: () => void;
  isPending: boolean;
};

export function BookmarkIcon({ active, onClick, isPending }: BookmarkIconProps) {
  return (
    <button
      onClick={onClick}
      disabled={isPending}
      className="text-gray-400 hover:text-blue-600 cursor-pointer"
    >
      {active ? <BookmarkCheck className="w-6 h-6" /> : <Bookmark className="w-6 h-6" />}
    </button>
  );
}