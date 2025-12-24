import './index.css';
import { useState } from 'react';
import { Typography, Card, ThumbsUpIcon } from '@/components/ui';
import { Layout } from '@/components/layout';

function App() {
  const [searchValue, setSearchValue] = useState('investigation');

  return (
    <Layout
      searchValue={searchValue}
      onSearchChange={setSearchValue}
    >
      {/* Main Content Area */}
      <div className="p-[23px] flex flex-col gap-[23px]">
        {/* Results Header */}
        <div className="flex items-center justify-between">
          <Typography variant="body" color="muted">
            Showing 8 results for "<span className="text-primary font-medium">{searchValue}</span>"
          </Typography>
        </div>

        {/* Search Results */}
        <div className="flex flex-col gap-0">
          {/* Result Card 1 */}
          <Card hoverable className="py-[25px] px-[20px] rounded-none first:rounded-t-[10px] last:rounded-b-[10px]">
            <div className="flex flex-col gap-[10px]">
              <div className="flex flex-col gap-[6px]">
                <div className="flex items-center justify-between gap-[6px]">
                  <Typography variant="heading-md" className="text-primary flex-1">
                    What to look for in an Investigation
                  </Typography>
                  <div className="flex items-center gap-[6px] shrink-0">
                    <ThumbsUpIcon />
                    <Typography variant="label" color="like">1</Typography>
                  </div>
                </div>
                <div className="flex items-center justify-between gap-[6px]">
                  <Typography variant="body-sm" color="light" className="flex-1">
                    SERA Help &gt; SERA User Guides &gt; Safety Assurance - Investigations
                  </Typography>
                  <Typography variant="body-sm" color="date" className="shrink-0">
                    ASM February 25, 2013 at 1:42 AM
                  </Typography>
                </div>
              </div>
              <Typography variant="body" color="secondary">
                Personnel, Property and activities are: reported and investigated have corrective actions initiated, and are recorded
              </Typography>
            </div>
          </Card>

          {/* Result Card 2 */}
          <Card hoverable className="py-[25px] px-[20px] rounded-none first:rounded-t-[10px] last:rounded-b-[10px]">
            <div className="flex flex-col gap-[10px]">
              <div className="flex flex-col gap-[6px]">
                <div className="flex items-center justify-between gap-[6px]">
                  <Typography variant="heading-md" className="text-primary flex-1">
                    Investigation Report Template
                  </Typography>
                  <div className="flex items-center gap-[6px] shrink-0">
                    <ThumbsUpIcon />
                    <Typography variant="label" color="like">3</Typography>
                  </div>
                </div>
                <div className="flex items-center justify-between gap-[6px]">
                  <Typography variant="body-sm" color="light" className="flex-1">
                    SERA Help &gt; Templates &gt; Investigations
                  </Typography>
                  <Typography variant="body-sm" color="date" className="shrink-0">
                    JKL March 15, 2014 at 9:30 AM
                  </Typography>
                </div>
              </div>
              <Typography variant="body" color="secondary">
                Standard template for conducting and documenting safety investigations within the organization
              </Typography>
            </div>
          </Card>

          {/* Result Card 3 */}
          <Card hoverable className="py-[25px] px-[20px] rounded-none first:rounded-t-[10px] last:rounded-b-[10px]">
            <div className="flex flex-col gap-[10px]">
              <div className="flex flex-col gap-[6px]">
                <div className="flex items-center justify-between gap-[6px]">
                  <Typography variant="heading-md" className="text-primary flex-1">
                    Root Cause Analysis Methods
                  </Typography>
                  <div className="flex items-center gap-[6px] shrink-0">
                    <ThumbsUpIcon />
                    <Typography variant="label" color="like">5</Typography>
                  </div>
                </div>
                <div className="flex items-center justify-between gap-[6px]">
                  <Typography variant="body-sm" color="light" className="flex-1">
                    SERA Help &gt; SERA User Guides &gt; Safety Assurance
                  </Typography>
                  <Typography variant="body-sm" color="date" className="shrink-0">
                    RMN April 2, 2015 at 11:15 AM
                  </Typography>
                </div>
              </div>
              <Typography variant="body" color="secondary">
                Overview of root cause analysis methodologies including 5 Whys, Fishbone diagrams, and fault tree analysis
              </Typography>
            </div>
          </Card>

          {/* Result Card 4 */}
          <Card hoverable className="py-[25px] px-[20px] rounded-none first:rounded-t-[10px] last:rounded-b-[10px]">
            <div className="flex flex-col gap-[10px]">
              <div className="flex flex-col gap-[6px]">
                <div className="flex items-center justify-between gap-[6px]">
                  <Typography variant="heading-md" className="text-primary flex-1">
                    Investigation Interview Techniques
                  </Typography>
                  <div className="flex items-center gap-[6px] shrink-0">
                    <ThumbsUpIcon />
                    <Typography variant="label" color="like">2</Typography>
                  </div>
                </div>
                <div className="flex items-center justify-between gap-[6px]">
                  <Typography variant="body-sm" color="light" className="flex-1">
                    SERA Help &gt; SERA User Guides &gt; Investigations
                  </Typography>
                  <Typography variant="body-sm" color="date" className="shrink-0">
                    PKS June 18, 2016 at 3:45 PM
                  </Typography>
                </div>
              </div>
              <Typography variant="body" color="secondary">
                Best practices for conducting effective interviews during safety investigations
              </Typography>
            </div>
          </Card>
        </div>

        {/* Pagination */}
        <div className="flex items-center justify-between py-[16px]">
          {/* Page Navigation */}
          <div className="flex items-center gap-[8px]">
            <button className="px-[12px] py-[8px] bg-surface-input border border-border-light rounded-[8px] text-[14px] text-text-pagination hover:bg-[#eef0f2] transition-colors cursor-pointer">
              ««
            </button>
            <button className="px-[12px] py-[8px] bg-surface-input border border-border-light rounded-[8px] text-[14px] text-text-pagination hover:bg-[#eef0f2] transition-colors cursor-pointer">
              «
            </button>
            <span className="px-[12px] py-[8px] text-[14px] text-text-primary">
              1/9
            </span>
            <button className="px-[12px] py-[8px] bg-surface-input border border-border-light rounded-[8px] text-[14px] text-text-pagination hover:bg-[#eef0f2] transition-colors cursor-pointer">
              »
            </button>
            <button className="px-[12px] py-[8px] bg-surface-input border border-border-light rounded-[8px] text-[14px] text-text-pagination hover:bg-[#eef0f2] transition-colors cursor-pointer">
              »»
            </button>
          </div>

          {/* Page Numbers */}
          <div className="flex items-center gap-[4px]">
            <button className="px-[12px] py-[8px] bg-primary text-white rounded-[8px] text-[14px] font-medium cursor-pointer">
              1
            </button>
            <button className="px-[12px] py-[8px] bg-surface-input border border-border-light rounded-[8px] text-[14px] text-text-pagination hover:bg-[#eef0f2] transition-colors cursor-pointer">
              2
            </button>
            <button className="px-[12px] py-[8px] bg-surface-input border border-border-light rounded-[8px] text-[14px] text-text-pagination hover:bg-[#eef0f2] transition-colors cursor-pointer">
              3
            </button>
            <button className="px-[12px] py-[8px] bg-surface-input border border-border-light rounded-[8px] text-[14px] text-text-pagination hover:bg-[#eef0f2] transition-colors cursor-pointer">
              4
            </button>
            <button className="px-[12px] py-[8px] bg-surface-input border border-border-light rounded-[8px] text-[14px] text-text-pagination hover:bg-[#eef0f2] transition-colors cursor-pointer">
              5
            </button>
            <span className="px-[8px] text-[14px] text-text-muted">...</span>
            <button className="px-[12px] py-[8px] bg-surface-input border border-border-light rounded-[8px] text-[14px] text-text-pagination hover:bg-[#eef0f2] transition-colors cursor-pointer">
              9
            </button>
          </div>

          {/* Rows per page */}
          <div className="flex items-center gap-[8px]">
            <Typography variant="body-sm" color="muted">
              Rows per page
            </Typography>
            <select className="px-[12px] py-[8px] bg-surface-input border border-border-light rounded-[8px] text-[14px] text-text-primary cursor-pointer">
              <option>20</option>
              <option>50</option>
              <option>100</option>
            </select>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default App;
