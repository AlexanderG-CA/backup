// --- Annonsidan.tsx ---
import { useState } from 'react';
import styles from './Annonssidan.module.css';
import ProjectCard from '../components/ProjectCard';

export default function Annonssidan() {
  const [activeTab, setActiveTab] = useState<'techstack' | 'info' | 'details'>('techstack');
  const [expandedCard, setExpandedCard] = useState<number | null>(null);

  const cards = [1, 2]; // Simulerade kort

  return (
    <div className="min-h-screen bg-white p-4">
      {/* Header */}
      <header className="flex justify-between items-center mb-6 max-w-7xl mx-auto">
        <div className="text-2xl font-bold">
          <span className="text-black">Co</span>
          <span className="text-blue-600">Connect</span>
        </div>
        <div className="flex gap-4">
          <button className="text-black">Find projects</button>
          <button className="text-black">About</button>
          <button className="border border-blue-500 rounded-full px-4 py-1">Login</button>
          <button className="bg-blue-600 text-white rounded-full px-4 py-1">Sign up</button>
        </div>
      </header>

      {/* Search */}
      <div className="flex gap-2 mb-6 max-w-4xl mx-auto">
        <input
          type="text"
          placeholder="Search..."
          className="border rounded-full px-4 py-2 flex-grow"
        />
        <button className="bg-gray-700 text-white rounded-lg px-4">Filter</button>
      </div>

      {/* Cards */}
      <div className="flex flex-col items-center gap-8">
        {cards.map((cardId) => (
          <ProjectCard 
            key={cardId}
            id={cardId}
            title="Frontend React Developer"
            description="Looking for an experienced React developer."
            techStack={["React", "TypeScript", "Next.js", "TailwindCSS"]}
            info="Work on building UI for an e-commerce platform."
            details="Duration: 3 months, Remote, 600kr/h"
            location="Stockholm"
            duration="3 months"
            rate="600 kr/h"
            startDate="2023-05-15"
            isRemote
            isNew
            isPartTime={false}
            postedAt={new Date('2023-04-15')}
          />
        ))}
      </div>
    </div>
  );
}
