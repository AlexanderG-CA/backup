import Header from "../components/Header.tsx";
import Footer from "../components/Footer";
import SearchFilterBar from "../components/SearchFilterBar";
import ProjectCard from "../components/ProjectCard";
import { fakeProjects, } from "../lib/fakedata";
import { useState } from "react";

export default function ProjectsPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeFilters, setActiveFilters] = useState<string[]>([]);

  const handleSearch = (query: string) => setSearchQuery(query);
  const handleFilterRemove = (filter: string) => setActiveFilters(filters => filters.filter(f => f !== filter));

  const filteredProjects = fakeProjects.filter((project) =>
    project.title.toLowerCase().includes(searchQuery.toLowerCase())
  );
  
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Header />

      <main className="flex-grow max-w-7xl mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4">Available Projects</h1>
        <SearchFilterBar onSearch={handleSearch} activeFilters={activeFilters} onFilterRemove={handleFilterRemove} />

        <div className="mt-8 flex flex-col gap-6">
          {filteredProjects.map(project => (
            <ProjectCard key={project.id} {...project} />
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}
