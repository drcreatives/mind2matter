import './index.css';
import { useState, useEffect, useCallback } from 'react';
import { Typography, ThumbsUpIcon, ChevronsLeftIcon, ChevronLeftIcon, ChevronRightIcon, ChevronsRightIcon } from '@/components/ui';
import { Layout } from '@/components/layout';

// Mock data - expanded for pagination demo
const allMockResults = [
  { id: 1, title: 'What to look for in an Investigation', breadcrumb: 'SERA Help > SERA User Guides > Safety Assurance - Investigations', date: 'ASM February 25, 2013 at 1:42 AM', description: 'Personnel, Property and activities are: reported and investigated have corrective actions initiated, and are recorded', likes: 1 },
  { id: 2, title: 'Investigation Report Template', breadcrumb: 'SERA Help > Templates > Investigations', date: 'JKL March 15, 2014 at 9:30 AM', description: 'Standard template for conducting and documenting safety investigations within the organization', likes: 3 },
  { id: 3, title: 'Root Cause Analysis Methods', breadcrumb: 'SERA Help > SERA User Guides > Safety Assurance', date: 'RMN April 2, 2015 at 11:15 AM', description: 'Overview of root cause analysis methodologies including 5 Whys, Fishbone diagrams, and fault tree analysis', likes: 5 },
  { id: 4, title: 'Investigation Interview Techniques', breadcrumb: 'SERA Help > SERA User Guides > Investigations', date: 'PKS June 18, 2016 at 3:45 PM', description: 'Best practices for conducting effective interviews during safety investigations', likes: 2 },
  { id: 5, title: 'Corrective Action Tracking', breadcrumb: 'SERA Help > SERA User Guides > Safety Assurance', date: 'TLM August 10, 2017 at 2:20 PM', description: 'Guidelines for tracking and monitoring corrective actions from safety investigations', likes: 4 },
  { id: 6, title: 'Safety Investigation Workflow', breadcrumb: 'SERA Help > SERA User Guides > Workflows', date: 'ABC December 5, 2017 at 10:00 AM', description: 'Step-by-step workflow for conducting comprehensive safety investigations from initial report to closure', likes: 7 },
  { id: 7, title: 'Evidence Collection Guidelines', breadcrumb: 'SERA Help > SERA User Guides > Investigations', date: 'DEF January 22, 2018 at 3:15 PM', description: 'How to properly collect, document, and preserve evidence during safety investigations', likes: 2 },
  { id: 8, title: 'Investigation Team Roles', breadcrumb: 'SERA Help > SERA User Guides > Team Management', date: 'GHI March 8, 2018 at 9:45 AM', description: 'Defining roles and responsibilities for investigation team members including lead investigator and SMEs', likes: 6 },
  { id: 9, title: 'Regulatory Compliance in Investigations', breadcrumb: 'SERA Help > Compliance > Regulatory', date: 'JKL May 14, 2018 at 2:30 PM', description: 'Ensuring investigations meet all regulatory requirements and reporting obligations', likes: 3 },
  { id: 10, title: 'Investigation Timeline Management', breadcrumb: 'SERA Help > SERA User Guides > Project Management', date: 'MNO July 20, 2018 at 11:00 AM', description: 'Managing investigation timelines and milestones to ensure timely completion', likes: 1 },
  { id: 11, title: 'Witness Statement Best Practices', breadcrumb: 'SERA Help > SERA User Guides > Investigations', date: 'PQR September 3, 2018 at 4:20 PM', description: 'Guidelines for obtaining accurate and comprehensive witness statements', likes: 4 },
  { id: 12, title: 'Investigation Report Writing', breadcrumb: 'SERA Help > Templates > Reports', date: 'STU November 15, 2018 at 1:45 PM', description: 'How to write clear, concise, and actionable investigation reports', likes: 8 },
  { id: 13, title: 'Hazard Identification Methods', breadcrumb: 'SERA Help > SERA User Guides > Safety Assurance', date: 'VWX January 28, 2019 at 10:30 AM', description: 'Systematic approaches to identifying hazards during safety investigations', likes: 5 },
  { id: 14, title: 'Risk Assessment Integration', breadcrumb: 'SERA Help > SERA User Guides > Risk Management', date: 'YZA March 12, 2019 at 3:00 PM', description: 'Integrating risk assessment findings into the investigation process', likes: 2 },
  { id: 15, title: 'Follow-up Investigation Procedures', breadcrumb: 'SERA Help > SERA User Guides > Investigations', date: 'BCD May 25, 2019 at 9:15 AM', description: 'Procedures for conducting follow-up investigations to verify corrective action effectiveness', likes: 3 },
  { id: 16, title: 'Investigation Data Analytics', breadcrumb: 'SERA Help > Analytics > Investigations', date: 'EFG July 8, 2019 at 2:45 PM', description: 'Using data analytics to identify trends and patterns in safety investigations', likes: 6 },
  { id: 17, title: 'Cross-functional Investigation Coordination', breadcrumb: 'SERA Help > SERA User Guides > Coordination', date: 'HIJ September 20, 2019 at 11:30 AM', description: 'Coordinating investigations across multiple departments and stakeholders', likes: 1 },
  { id: 18, title: 'Investigation Lessons Learned', breadcrumb: 'SERA Help > Knowledge Base > Lessons', date: 'KLM November 5, 2019 at 4:00 PM', description: 'Capturing and sharing lessons learned from safety investigations', likes: 9 },
  { id: 19, title: 'Digital Investigation Tools', breadcrumb: 'SERA Help > Tools > Digital', date: 'NOP January 18, 2020 at 10:00 AM', description: 'Overview of digital tools and software for supporting safety investigations', likes: 4 },
  { id: 20, title: 'Investigation Quality Assurance', breadcrumb: 'SERA Help > Quality > Investigations', date: 'QRS March 30, 2020 at 2:15 PM', description: 'Quality assurance processes for ensuring investigation thoroughness and accuracy', likes: 7 },
  { id: 21, title: 'Human Factors in Investigations', breadcrumb: 'SERA Help > SERA User Guides > Human Factors', date: 'TUV June 12, 2020 at 9:30 AM', description: 'Understanding and analyzing human factors during safety investigations', likes: 5 },
  { id: 22, title: 'Investigation Communication Protocols', breadcrumb: 'SERA Help > Communications > Protocols', date: 'WXY August 24, 2020 at 3:45 PM', description: 'Communication protocols for keeping stakeholders informed during investigations', likes: 2 },
  { id: 23, title: 'Advanced Root Cause Techniques', breadcrumb: 'SERA Help > SERA User Guides > Advanced', date: 'ZAB October 6, 2020 at 11:00 AM', description: 'Advanced techniques for root cause analysis including STAMP and AcciMap', likes: 8 },
  { id: 24, title: 'Investigation Confidentiality', breadcrumb: 'SERA Help > Legal > Confidentiality', date: 'CDE December 18, 2020 at 1:30 PM', description: 'Managing confidentiality and data protection during safety investigations', likes: 3 },
  { id: 25, title: 'Mobile Investigation Documentation', breadcrumb: 'SERA Help > Tools > Mobile', date: 'FGH February 1, 2021 at 10:45 AM', description: 'Using mobile devices for on-site investigation documentation and data collection', likes: 4 },
  { id: 26, title: 'Investigation Metrics and KPIs', breadcrumb: 'SERA Help > Analytics > Metrics', date: 'IJK April 15, 2021 at 2:00 PM', description: 'Key performance indicators for measuring investigation effectiveness', likes: 6 },
  { id: 27, title: 'Third-party Investigation Support', breadcrumb: 'SERA Help > External > Third-party', date: 'LMN June 28, 2021 at 9:00 AM', description: 'Working with external consultants and third-party investigators', likes: 1 },
  { id: 28, title: 'Investigation Archive Management', breadcrumb: 'SERA Help > Records > Archives', date: 'OPQ September 10, 2021 at 3:30 PM', description: 'Long-term storage and retrieval of investigation records and documentation', likes: 2 },
  { id: 29, title: 'Continuous Improvement from Investigations', breadcrumb: 'SERA Help > Improvement > Continuous', date: 'RST November 22, 2021 at 11:15 AM', description: 'Using investigation findings to drive continuous improvement initiatives', likes: 10 },
  { id: 30, title: 'Investigation Training Programs', breadcrumb: 'SERA Help > Training > Investigations', date: 'UVW January 4, 2022 at 4:45 PM', description: 'Training programs for developing investigation skills across the organization', likes: 5 },
];

// Skeleton loader component
function ResultSkeleton() {
  return (
    <div className="bg-surface-white py-6.25 px-5 border-b border-border animate-pulse">
      <div className="flex flex-col gap-2.5">
        <div className="flex flex-col gap-1.5">
          <div className="flex items-center gap-1.5">
            <div className="h-5 bg-gray-200 rounded w-3/4" />
            <div className="h-4 bg-gray-200 rounded w-8" />
          </div>
          <div className="flex items-center gap-1.5">
            <div className="h-4 bg-gray-200 rounded w-1/2" />
            <div className="h-4 bg-gray-200 rounded w-40 ml-auto" />
          </div>
        </div>
        <div className="h-4 bg-gray-200 rounded w-full" />
      </div>
    </div>
  );
}

// Empty state component
function EmptyState() {
  return (
    <div className="flex flex-col items-center justify-center py-20 text-center">
      <svg width="64" height="64" viewBox="0 0 64 64" fill="none" className="mb-4 text-text-muted">
        <circle cx="28" cy="28" r="20" stroke="currentColor" strokeWidth="4" />
        <path d="M44 44L56 56" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
      </svg>
      <h3 className="text-[18px] font-semibold text-text-primary mb-2">Start searching</h3>
      <p className="text-[14px] text-text-muted max-w-sm">
        Enter a search term above to find articles, documents, and resources in the SERA knowledge base.
      </p>
    </div>
  );
}

// No results component
function NoResults({ searchTerm }: { searchTerm: string }) {
  return (
    <div className="flex flex-col items-center justify-center py-20 text-center">
      <svg width="64" height="64" viewBox="0 0 64 64" fill="none" className="mb-4 text-text-muted">
        <circle cx="28" cy="28" r="20" stroke="currentColor" strokeWidth="4" />
        <path d="M44 44L56 56" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
        <path d="M20 28H36" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
      </svg>
      <h3 className="text-[18px] font-semibold text-text-primary mb-2">No results found</h3>
      <p className="text-[14px] text-text-muted max-w-sm">
        No articles match "<span className="text-primary font-medium">{searchTerm}</span>". Try different keywords or check your spelling.
      </p>
    </div>
  );
}

const RESULTS_PER_PAGE = 5;

function App() {
  const [searchValue, setSearchValue] = useState('');
  const [debouncedSearch, setDebouncedSearch] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [searchResults, setSearchResults] = useState<typeof allMockResults>([]);
  const [totalResults, setTotalResults] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedResultId, setSelectedResultId] = useState<number | null>(null);

  // Calculate pagination
  const totalPages = Math.ceil(totalResults / RESULTS_PER_PAGE);

  // Debounce search input
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearch(searchValue);
    }, 300);
    return () => clearTimeout(timer);
  }, [searchValue]);

  // Simulate API search
  const performSearch = useCallback((term: string, page: number) => {
    if (!term.trim()) {
      setSearchResults([]);
      setTotalResults(0);
      setIsLoading(false);
      return;
    }

    setIsLoading(true);
    
    // Simulate API delay
    setTimeout(() => {
      const filtered = allMockResults.filter(item => 
        item.title.toLowerCase().includes(term.toLowerCase()) ||
        item.description.toLowerCase().includes(term.toLowerCase()) ||
        item.breadcrumb.toLowerCase().includes(term.toLowerCase())
      );
      
      const startIndex = (page - 1) * RESULTS_PER_PAGE;
      const paginatedResults = filtered.slice(startIndex, startIndex + RESULTS_PER_PAGE);
      
      setSearchResults(paginatedResults);
      setTotalResults(filtered.length);
      setIsLoading(false);
      setSelectedResultId(null);
    }, 800); // Simulate network delay
  }, []);

  // Trigger search when debounced value changes
  useEffect(() => {
    setCurrentPage(1);
    performSearch(debouncedSearch, 1);
  }, [debouncedSearch, performSearch]);

  // Handle page change
  const handlePageChange = (page: number) => {
    if (page < 1 || page > totalPages || page === currentPage) return;
    setCurrentPage(page);
    performSearch(debouncedSearch, page);
  };

  // Generate page numbers to display
  const getPageNumbers = () => {
    const pages: (number | string)[] = [];
    
    if (totalPages <= 7) {
      for (let i = 1; i <= totalPages; i++) pages.push(i);
    } else {
      if (currentPage <= 4) {
        pages.push(1, 2, 3, 4, 5, '...', totalPages);
      } else if (currentPage >= totalPages - 3) {
        pages.push(1, '...', totalPages - 4, totalPages - 3, totalPages - 2, totalPages - 1, totalPages);
      } else {
        pages.push(1, '...', currentPage - 1, currentPage, currentPage + 1, '...', totalPages);
      }
    }
    
    return pages;
  };

  const hasSearchTerm = debouncedSearch.trim().length > 0;
  const hasResults = searchResults.length > 0;

  return (
    <Layout
      searchValue={searchValue}
      onSearchChange={setSearchValue}
    >
      {/* Main Content Area */}
      <div className="p-5.75 flex flex-col gap-5.75">
        {/* Results Header - Only show when there's a search term */}
        {hasSearchTerm && !isLoading && (
          <div className="flex items-center gap-1.75 pl-0.75">
            <h2 className="text-[18px] leading-[1.21] font-semibold text-text-primary tracking-[-0.01em]">
              {totalResults > 0 ? (
                <>Showing {totalResults} result{totalResults !== 1 ? 's' : ''} for "<span className='text-primary'>{debouncedSearch}</span>"</>
              ) : (
                <>No results for "<span className='text-primary'>{debouncedSearch}</span>"</>
              )}
            </h2>
          </div>
        )}

        {/* Empty state when no search term */}
        {!hasSearchTerm && !isLoading && (
          <EmptyState />
        )}

        {/* Search Results Container */}
        {(hasSearchTerm || isLoading) && (
          <div className="flex flex-col border border-border rounded-card overflow-hidden">
            {/* Top Articles Results Header */}
            <div className="bg-surface-white py-3.75 px-5 border-b border-border text-center">
              <Typography variant="label" color="secondary" className="font-medium">
                Top Articles Results
              </Typography>
            </div>

            {/* Loading State - Skeleton Loaders */}
            {isLoading && (
              <>
                <ResultSkeleton />
                <ResultSkeleton />
                <ResultSkeleton />
                <ResultSkeleton />
                <ResultSkeleton />
              </>
            )}

            {/* No Results State */}
            {!isLoading && hasSearchTerm && !hasResults && (
              <NoResults searchTerm={debouncedSearch} />
            )}

            {/* Search Result Items */}
            {!isLoading && hasResults && searchResults.map((result) => (
              <div
                key={result.id}
                onClick={() => setSelectedResultId(result.id === selectedResultId ? null : result.id)}
                className={`bg-surface-white py-6.25 px-5 border-b border-border cursor-pointer hover:bg-primary-light transition-colors duration-150 ${
                  result.id === selectedResultId ? 'bg-primary-light' : ''
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

            {/* Pagination - Only show when there are results and multiple pages */}
            {!isLoading && hasResults && totalPages > 1 && (
              <div className="bg-surface-white py-4.25 px-4.25 border-t border-border-light rounded-b-[8px]">
                <div className="flex items-center gap-1.5">
                  {/* Navigation Buttons */}
                  <div className="flex items-center gap-1.5">
                    <button 
                      onClick={() => handlePageChange(1)}
                      disabled={currentPage === 1}
                      className={`h-8.5 px-3.75 bg-[#F9F9FC] border border-border-light rounded-[8px] transition-colors flex items-center justify-center ${
                        currentPage === 1 ? 'cursor-not-allowed' : 'hover:bg-[#eef0f2] cursor-pointer text-text-pagination'
                      }`}
                    >
                      <ChevronsLeftIcon size={8} disabled={currentPage === 1} />
                    </button>
                    <button 
                      onClick={() => handlePageChange(currentPage - 1)}
                      disabled={currentPage === 1}
                      className={`h-8.5 px-3.75 bg-[#F9F9FC] border border-border-light rounded-[8px] transition-colors flex items-center justify-center ${
                        currentPage === 1 ? 'cursor-not-allowed' : 'hover:bg-[#eef0f2] cursor-pointer text-text-pagination'
                      }`}
                    >
                      <ChevronLeftIcon size={8} disabled={currentPage === 1} />
                    </button>
                    <div className="w-14.75 h-8.5 px-2.5 py-1.75 bg-[#F9F9FC] border border-border-light rounded-[8px] text-[12px] text-[#04070D] flex items-center justify-center">
                      {currentPage}/{totalPages}
                    </div>
                    <button 
                      onClick={() => handlePageChange(currentPage + 1)}
                      disabled={currentPage === totalPages}
                      className={`h-8.5 px-3.75 bg-[#F9F9FC] border border-border-light rounded-[8px] transition-colors flex items-center justify-center ${
                        currentPage === totalPages ? 'cursor-not-allowed' : 'hover:bg-[#eef0f2] cursor-pointer text-text-pagination'
                      }`}
                    >
                      <ChevronRightIcon size={8} disabled={currentPage === totalPages} />
                    </button>
                    <button 
                      onClick={() => handlePageChange(totalPages)}
                      disabled={currentPage === totalPages}
                      className={`h-8.5 px-3.75 bg-[#F9F9FC] border border-border-light rounded-[8px] transition-colors flex items-center justify-center ${
                        currentPage === totalPages ? 'cursor-not-allowed' : 'hover:bg-[#eef0f2] cursor-pointer text-text-pagination'
                      }`}
                    >
                      <ChevronsRightIcon size={8} disabled={currentPage === totalPages} />
                    </button>
                  </div>

                  {/* Page Numbers */}
                  <div className="flex items-center gap-1.5">
                    {getPageNumbers().map((page, index) => (
                      typeof page === 'number' ? (
                        <button 
                          key={index}
                          onClick={() => handlePageChange(page)}
                          className={`w-9.75 h-8.5 px-2.5 py-2.25 rounded-[8px] text-[14px] flex items-center justify-center transition-colors ${
                            page === currentPage 
                              ? 'bg-primary text-white cursor-default' 
                              : 'bg-[#F9F9FC] border border-border-light text-text-pagination hover:bg-[#eef0f2] cursor-pointer'
                          }`}
                        >
                          {page}
                        </button>
                      ) : (
                        <div 
                          key={index}
                          className="w-9.75 h-8.5 px-2.5 py-2.25 bg-[#F9F9FC] border border-border-light rounded-[8px] text-[14px] text-text-pagination flex items-center justify-center"
                        >
                          ...
                        </div>
                      )
                    ))}
                  </div>

                  {/* Spacer */}
                  <div className="flex-1" />
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </Layout>
  );
}

export default App;
