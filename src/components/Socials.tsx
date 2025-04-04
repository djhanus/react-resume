import {FC, memo} from 'react';

import {socialLinks} from '../data/data';

const Socials: FC = memo(() => {
  return (
    <>
      {socialLinks.map(({label, Icon, href}) => (
        <a
          aria-label={label}
          className="-m-1.5 rounded-md p-1.5 transition-all duration-300 hover:text-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500  sm:-m-3 sm:p-3"
          href={href}
          key={label}>
          <Icon className="h-6 w-6 align-baseline sm:h-9 sm:w-9" />
        </a>
      ))}
    </>
  );
});

Socials.displayName = 'Socials';
export default Socials;
