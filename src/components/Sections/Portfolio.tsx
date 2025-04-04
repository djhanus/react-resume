import {FC, memo} from 'react';

import {portfolioItems, SectionId} from '../../data/data';
import {PortfolioItem} from '../../data/dataDef';
import Section from '../Layout/Section';

const Portfolio: FC = memo(() => {
  return (
    <Section className="bg-neutral-800" sectionId={SectionId.Portfolio}>
      <div className="flex flex-col items-center gap-y-8">
        <h2 className="text-3xl font-bold text-white">Featured Projects</h2>
        <div className="flex flex-col gap-y-6 w-full max-w-3xl">
          {portfolioItems.map((item, index) => (
            <div
              className="bg-neutral-900 border border-gray-700 p-4 rounded-lg shadow-md"
              key={index}
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

const ItemOverlay: FC<{item: PortfolioItem}> = memo(({item: {title, tags, description, details, client, website}}) => {
  return (
    <div className="flex flex-col gap-y-4 p-4">
      {/* Title */}
      <h2 className="text-2xl font-bold text-white">{title}</h2>

      {/* Client */}
      {/* <span className="text-sm font-medium text-gray-400 italic">{client}</span> */}

      {/* Website */}
      {website && (
        <span className="text-sm font-medium text-gray-400 italic">
          {client}
          {website && (
            <>
              {' '}
              •{' '}
              <a
          className="text-blue-400 hover:underline"
          href={website}
          rel="noopener noreferrer"
          target="_blank"
              >
          {website}
              </a>
            </>
          )}
        </span>
      )}

      {/* Description */}
      <p className="text-sm text-gray-300">{description}</p>

      {/* Details */}
      {details && (
        <ul className="list-disc list-inside text-sm text-gray-400">
          {details.map((detail, index) => (
            <li key={index}>{detail}</li>
          ))}
        </ul>
      )}

      {/* Tags */}
      <div className="flex flex-wrap gap-2">
        {tags.map((tag, index) => (
            <span
            className="bg-blue-500 font-medium px-3 py-1 rounded-full text-white text-xs"
            key={index}
            >
            {tag}
            </span>
        ))}
      </div>
    </div>
  );
});

ItemOverlay.displayName = 'ItemOverlay';