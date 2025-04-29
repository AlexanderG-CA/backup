import { useState } from "react";
import { Search } from "lucide-react"; // Importing the search icon from lucide-react

// Component props definition
type SearchFilterBarProps = {
  onSearch: (query: string) => void; // Callback for handling search queries
  activeFilters: string[]; // List of currently active filters
  onFilterRemove: (filter: string) => void; // Callback for removing a filter
};

// Main component
export default function SearchFilterBar({ onSearch, activeFilters, onFilterRemove }: SearchFilterBarProps) {
  const [searchInput, setSearchInput] = useState(''); // State to manage the search input

  // Handles form submission for search
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(searchInput);
  };

  return (
    <div className="space-y-4">
      {/* Search bar with input and submit button */}
      <form onSubmit={handleSubmit} className="flex gap-2 items-center">
        <div className="flex flex-grow border rounded-full overflow-hidden">
          <input
            type="text"
            placeholder="Search projects..."
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
            className="flex-grow px-4 py-2 focus:outline-none"
          />
          <button
            type="submit"
            className="bg-gray-800 text-white px-4 flex items-center justify-center cursor-pointer"
          >
            <Search className="w-5 h-5" />
          </button>
        </div>
        {/* Placeholder filter button */}
        <button
          type="button"
          className="bg-gray-800 text-white rounded-md px-4 py-2 cursor-pointer"
        >
          Filter
        </button>
      </form>

      {/* Display active filters with remove functionality */}
      {activeFilters.length > 0 && (
        <div className="flex flex-wrap gap-2">
          {activeFilters.map((filter, idx) => (
            <div key={idx} className="bg-indigo-100 text-indigo-700 rounded-full px-3 py-1 text-xs flex items-center gap-2">
              {filter}
              <button onClick={() => onFilterRemove(filter)} aria-label={`Remove filter ${filter}`} className="cursor-pointer">✕</button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}