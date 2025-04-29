import { useState } from "react";
import { BookmarkIcon } from "./ui/bookmark-icon";
import { Button } from "./ui/button";

type ProjectCardProps = {
  id: number;
  title: string;
  description: string;
  techStack: string[];
  info: string;
  details: string;
  location: string;
  duration: string;
  rate: string;
  startDate: string;
  isRemote: boolean;
  isNew: boolean;
  isPartTime: boolean;
  postedAt: Date;
  isBookmarked?: boolean;
};

export default function ProjectCard({
  id,
  title,
  description,
  techStack,
  info,
  details,
  location,
  duration,
  rate,
  startDate,
  isRemote,
  isNew,
  isPartTime,
  postedAt,
  isBookmarked = false,
}: ProjectCardProps) {
  const [activeTab, setActiveTab] = useState<'techstack' | 'info' | 'details'>('techstack');
  const [expanded, setExpanded] = useState(false);
  const [hoveredCard, setHoveredCard] = useState(false);
  const [hoveredButton, setHoveredButton] = useState(false);
  const [bookmarked, setBookmarked] = useState(isBookmarked);

  const formattedDate = new Date(postedAt).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });

  const handleBookmarkToggle = () => {
    setBookmarked(!bookmarked);
  };

  const handleExpandToggle = () => {
    setExpanded(!expanded);
  };

  const isHovered = hoveredCard || hoveredButton || expanded;

  return (
    <div className="flex flex-col items-center w-full sm:w-[700px] max-w-full mx-auto">
      <div
        className={`
          relative bg-white rounded-lg border border-gray-200 shadow-sm p-6 w-full
          overflow-hidden transition-all duration-[1200ms] ease-in-out
          ${expanded ? 'max-h-[2000px]' : 'max-h-[450px]'}
        `}
        onMouseEnter={() => setHoveredCard(true)}
        onMouseLeave={() => setHoveredCard(false)}
      >
        {/* Header */}
        <div className="flex justify-between items-start">
          <div>
            <div className="flex gap-2 mb-2">
              {isNew && <span className="bg-green-100 text-green-800 text-xs font-semibold px-2 py-0.5 rounded-full">New</span>}
              {isRemote && <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2 py-0.5 rounded-full">Remote</span>}
              {isPartTime && <span className="bg-yellow-100 text-yellow-800 text-xs font-semibold px-2 py-0.5 rounded-full">Part-time</span>}
            </div>
            <h3 className="text-lg font-bold text-gray-900">{title}</h3>
            <p className="text-sm text-gray-500">{formattedDate} · {location}</p>
          </div>
          <BookmarkIcon active={bookmarked} onClick={handleBookmarkToggle} isPending={false} />
        </div>

        {/* Body */}
        <div className="mt-4 text-gray-700">
          <p>{description}</p>
        </div>

        {/* Tabs (fade out when expanded) */}
        <div className="mt-6 border-t border-gray-200 pt-4 transition-all duration-700 ease-in-out">
          <div className={`flex gap-6 text-sm font-medium mb-4 transition-opacity duration-500 ${expanded ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
            <button
              onClick={() => setActiveTab('techstack')}
              className={`${activeTab === 'techstack' ? 'text-indigo-600 border-b-2 border-indigo-600' : 'text-gray-500'}`}
            >
              Techstack
            </button>
            <button
              onClick={() => setActiveTab('info')}
              className={`${activeTab === 'info' ? 'text-indigo-600 border-b-2 border-indigo-600' : 'text-gray-500'}`}
            >
              Info
            </button>
            <button
              onClick={() => setActiveTab('details')}
              className={`${activeTab === 'details' ? 'text-indigo-600 border-b-2 border-indigo-600' : 'text-gray-500'}`}
            >
              Details
            </button>
          </div>

          {/* Tab content only when NOT expanded */}
          {!expanded && (
            <div className="transition-all duration-500 ease-in-out">
              {activeTab === 'techstack' && (
                <div className="flex flex-wrap gap-2">
                  {techStack.map((tech, idx) => (
                    <span key={idx} className="bg-gray-100 text-gray-800 text-xs font-medium px-2 py-1 rounded">
                      {tech}
                    </span>
                  ))}
                </div>
              )}
              {activeTab === 'info' && (
                <p className="text-gray-700">{info}</p>
              )}
              {activeTab === 'details' && (
                <div className="grid grid-cols-2 gap-2 text-sm">
                  <div><span className="text-gray-500">Duration:</span> {duration}</div>
                  <div><span className="text-gray-500">Location:</span> {isRemote ? `${location} (Remote)` : location}</div>
                  <div><span className="text-gray-500">Rate:</span> {rate}</div>
                  <div><span className="text-gray-500">Start:</span> {startDate}</div>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Expanded full content */}
        {expanded && (
          <div className="space-y-6 pt-6">
            <div>
              <h4 className="text-xs font-semibold text-gray-500 mb-2">Full Tech Stack</h4>
              <div className="flex flex-wrap gap-2">
                {techStack.map((tech, idx) => (
                  <span key={idx} className="bg-gray-100 text-gray-800 text-xs font-medium px-2 py-1 rounded">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <h4 className="text-xs font-semibold text-gray-500 mb-2">Project Info</h4>
              <p className="text-gray-700">{info}</p>
            </div>
            <div>
              <h4 className="text-xs font-semibold text-gray-500 mb-2">Project Details</h4>
              <div className="grid grid-cols-2 gap-2 text-sm">
                <div><span className="text-gray-500">Duration:</span> {duration}</div>
                <div><span className="text-gray-500">Location:</span> {isRemote ? `${location} (Remote)` : location}</div>
                <div><span className="text-gray-500">Rate:</span> {rate}</div>
                <div><span className="text-gray-500">Start:</span> {startDate}</div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Expand/Collapse Button */}
      <div
        onMouseEnter={() => setHoveredButton(true)}
        onMouseLeave={() => setHoveredButton(false)}
        className={`w-full mt-2 transition-all duration-500 ${isHovered ? 'opacity-100 max-h-20' : 'opacity-0 max-h-0'} overflow-hidden`}
      >
        <Button
          onClick={handleExpandToggle}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white rounded-md py-2 text-center font-semibold transition-all duration-500 transform hover:scale-105 cursor-pointer"
        >
          {expanded ? "Click to collapse" : "Click to show more"}
        </Button>
      </div>
    </div>
  );
}


