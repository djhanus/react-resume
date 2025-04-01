import {ArrowTopRightOnSquareIcon} from '@heroicons/react/24/outline';
import {FC, memo} from 'react';

import {portfolioItems, SectionId} from '../../data/data';
import {PortfolioItem} from '../../data/dataDef';
import Section from '../Layout/Section';

const Portfolio: FC = memo(() => {
  return (
    <Section className="bg-neutral-800" sectionId={SectionId.Portfolio}>
      <div className="flex flex-col items-center gap-y-8">
        <h2 className="text-xl font-bold text-white">Selected Featured Projects Accomplishments</h2>
        <div className="w-full max-w-3xl flex flex-col gap-y-6">
          {portfolioItems.map((item, index) => (
            <div
              key={index}
              className="border border-gray-700 rounded-lg p-4 bg-neutral-900 shadow-md"
            >
              <ItemOverlay item={item} />
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
});

Portfolio.displayName = 'Portfolio';
export default Portfolio;

const ItemOverlay: FC<{item: PortfolioItem}> = memo(({item: {title, tags, description}}) => {
  return (
    <div className="flex flex-col gap-y-4">
      {/* Title */}
      <h2 className="text-lg font-bold text-white">{title}</h2>

      {/* Description */}
      <p className="text-sm text-gray-300">{description}</p>

      {/* Tags */}
      <div className="flex flex-wrap gap-2">
        {tags.map((tag, index) => (
          <span
            key={index}
            className="px-3 py-1 text-xs font-medium text-white bg-blue-500 rounded-full"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
});

ItemOverlay.displayName = 'ItemOverlay';