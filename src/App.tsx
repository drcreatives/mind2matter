import './index.css';
import { useState } from 'react';
import { Typography, ThumbsUpIcon, ChevronsLeftIcon, ChevronLeftIcon, ChevronRightIcon, ChevronsRightIcon } from '@/components/ui';
import { Layout } from '@/components/layout';

function App() {
  const [searchValue, setSearchValue] = useState('investigation');

  const searchResults = [
    {
      id: 1,
      title: 'What to look for in an Investigation',
      breadcrumb: 'SERA Help > SERA User Guides > Safety Assurance - Investigations',
      date: 'ASM February 25, 2013 at 1:42 AM',
      description: 'Personnel, Property and activities are: reported and investigated have corrective actions initiated, and are recorded',
      likes: 1,
    },
    {
      id: 2,
      title: 'Investigation Report Template',
      breadcrumb: 'SERA Help > Templates > Investigations',
      date: 'JKL March 15, 2014 at 9:30 AM',
      description: 'Standard template for conducting and documenting safety investigations within the organization',
      likes: 3,
    },
    {
      id: 3,
      title: 'Root Cause Analysis Methods',
      breadcrumb: 'SERA Help > SERA User Guides > Safety Assurance',
      date: 'RMN April 2, 2015 at 11:15 AM',
      description: 'Overview of root cause analysis methodologies including 5 Whys, Fishbone diagrams, and fault tree analysis',
      likes: 5,
    },
    {
      id: 4,
      title: 'Investigation Interview Techniques',
      breadcrumb: 'SERA Help > SERA User Guides > Investigations',
      date: 'PKS June 18, 2016 at 3:45 PM',
      description: 'Best practices for conducting effective interviews during safety investigations',
      likes: 2,
    },
    {
      id: 5,
      title: 'Corrective Action Tracking',
      breadcrumb: 'SERA Help > SERA User Guides > Safety Assurance',
      date: 'TLM August 10, 2017 at 2:20 PM',
      description: 'Guidelines for tracking and monitoring corrective actions from safety investigations',
      likes: 4,
    },
  ];

  return (
    <Layout
      searchValue={searchValue}
      onSearchChange={setSearchValue}
    >
      {/* Main Content Area */}
      <div className="p-5.75 flex flex-col gap-5.75">
        {/* Results Header */}
        <div className="flex items-center gap-1.75 pl-0.75">
          <h2 className="text-[18px] leading-[1.21] font-semibold text-text-primary tracking-[-0.01em]">
            Showing 8 results for the "<span className='text-primary'>{searchValue}</span>"
          </h2>
        </div>

        {/* Search Results Container */}
        <div className="flex flex-col border border-border rounded-card overflow-hidden">
          {/* Top Articles Results Header */}
          <div className="bg-surface-white py-3.75 px-5 border-b border-border text-center">
            <Typography variant="label" color="secondary" className="font-medium">
              Top Articles Results
            </Typography>
          </div>

          {/* Search Result Items */}
          {searchResults.map((result, index) => (
            <div
              key={result.id}
              className={`bg-surface-white py-6.25 px-5 border-b border-border cursor-pointer hover:bg-primary-light transition-colors duration-150 ${
                index === 2 ? 'bg-primary-light' : ''
              }`}
            >
              <div className="flex flex-col gap-2.5">
                <div className="flex flex-col gap-1.5">
                  <div className="flex items-center gap-1.5">
                    <h3 className="text-[17px] leading-[1.21] font-semibold text-primary flex-1">
                      {result.title}
                    </h3>
                    <div className="flex items-center gap-1.5 shrink-0">
                      <ThumbsUpIcon />
                      <span className="text-[14px] leading-[1.21] font-medium text-text-like">
                        {result.likes}
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <p className="text-[14px] leading-[1.21] font-normal text-text-light flex-1">
                      {result.breadcrumb}
                    </p>
                    <p className="text-[14px] leading-[1.21] font-normal text-text-date shrink-0">
                      {result.date}
                    </p>
                  </div>
                </div>
                <p className="text-[15px] leading-[1.21] font-normal text-text-secondary">
                  {result.description}
                </p>
              </div>
            </div>
          ))}

          {/* Pagination - Inside the container */}
          <div className="bg-surface-white py-4.25 px-4.25 border-t border-border-light rounded-b-[8px]">
            <div className="flex items-center gap-1.5">
              {/* Navigation Buttons */}
              <div className="flex items-center gap-1.5">
                <button className="h-8.5 px-3.75 bg-[#F9F9FC] border border-border-light rounded-[8px] text-text-pagination hover:bg-[#eef0f2] transition-colors cursor-pointer flex items-center justify-center">
                  <ChevronsLeftIcon size={8} />
                </button>
                <button className="h-8.5 px-3.75 bg-[#F9F9FC] border border-border-light rounded-[8px] text-text-pagination hover:bg-[#eef0f2] transition-colors cursor-pointer flex items-center justify-center">
                  <ChevronLeftIcon size={8} />
                </button>
                <div className="w-14.75 h-8.5 px-2.5 py-1.75 bg-[#F9F9FC] border border-border-light rounded-[8px] text-[12px] text-[#04070D] flex items-center justify-center">
                  1/9
                </div>
                <button className="h-8.5 px-3.75 bg-[#F9F9FC] border border-border-light rounded-[8px] text-text-pagination hover:bg-[#eef0f2] transition-colors cursor-pointer flex items-center justify-center">
                  <ChevronRightIcon size={8} />
                </button>
                <button className="h-8.5 px-3.75 bg-[#F9F9FC] border border-border-light rounded-[8px] text-text-pagination hover:bg-[#eef0f2] transition-colors cursor-pointer flex items-center justify-center">
                  <ChevronsRightIcon size={8} />
                </button>
              </div>

              {/* Page Numbers */}
              <div className="flex items-center gap-1.5">
                <button className="w-9.75 h-8.5 px-2.5 py-2.25 bg-[#F9F9FC] border border-border-light rounded-[8px] text-[14px] text-text-pagination hover:bg-[#eef0f2] transition-colors cursor-pointer flex items-center justify-center">
                  1
                </button>
                <button className="w-9.75 h-8.5 px-2.5 py-2.25 bg-[#F9F9FC] border border-border-light rounded-[8px] text-[14px] text-text-pagination hover:bg-[#eef0f2] transition-colors cursor-pointer flex items-center justify-center">
                  2
                </button>
                <button className="w-9.75 h-8.5 px-2.5 py-2.25 bg-primary text-white rounded-[8px] text-[14px] cursor-pointer flex items-center justify-center">
                  3
                </button>
                <button className="w-9.75 h-8.5 px-2.5 py-2.25 bg-[#F9F9FC] border border-border-light rounded-[8px] text-[14px] text-text-pagination hover:bg-[#eef0f2] transition-colors cursor-pointer flex items-center justify-center">
                  4
                </button>
                <button className="w-9.75 h-8.5 px-2.5 py-2.25 bg-[#F9F9FC] border border-border-light rounded-[8px] text-[14px] text-text-pagination hover:bg-[#eef0f2] transition-colors cursor-pointer flex items-center justify-center">
                  5
                </button>
                <div className="w-9.75 h-8.5 px-2.5 py-2.25 bg-[#F9F9FC] border border-border-light rounded-[8px] text-[14px] text-text-pagination flex items-center justify-center">
                  ...
                </div>
                <button className="w-9.75 h-8.5 px-2.5 py-2.25 bg-[#F9F9FC] border border-border-light rounded-[8px] text-[14px] text-text-pagination hover:bg-[#eef0f2] transition-colors cursor-pointer flex items-center justify-center">
                  9
                </button>
              </div>

              {/* Spacer */}
              <div className="flex-1" />

              {/* Rows per page */}
              {/* <span className="text-[14px] leading-[1.21] font-normal text-text-pagination">
                Rows per page
              </span>
              <div className="w-14.75 h-8.5 px-2.5 py-1.75 bg-[#F9F9FC] border border-border-light rounded-[8px] flex items-center justify-center">
                <span className="text-[12px] leading-[1.21] font-normal text-[#04070D]">20</span>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default App;
