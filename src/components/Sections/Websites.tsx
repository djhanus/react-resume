import React from 'react';

const Websites: React.FC = React.memo(() => {
    const websites = [
        {name: 'Doriot', url: 'https://doriot.com', displayUrl: 'doriot.com'},
        {name: 'Outside Studio', url: 'https://outsidestudio.design', displayUrl: 'outsidestudio.design'},
        {name: 'The Restaurant HQ', url: 'https://therestauranthq.com', displayUrl: 'therestauranthq.com'},
        {name: 'Channel Insider', url: 'https://channelinsider.com', displayUrl: 'channelinsider.com'},
        {name: 'Count the Kicks', url: 'https://countthekicks.org', displayUrl: 'countthekicks.org'},
        {name: 'Iowa Finance Authority', url: 'https://www.iowafinance.com', displayUrl: 'iowafinance.com'},
        {name: 'The Art of Education', url: 'https://theartofeducation.edu', displayUrl: 'theartofeducation.edu'},
        {name: 'Bloom HF', url: 'https://bloomhf.org/', displayUrl: 'bloomhf.org'},
        {name: 'Sycamore Land Trust', url: 'https://sycamorelandtrust.org/', displayUrl: 'sycamorelandtrust.org'},
    ];

    return (
        <section className="flex justify-center items-center bg-neutral-800 py-12" id="websites">
            <div className="border border-gray-600 rounded-2xl p-12 bg-gray-800">
                <h2 className="text-2xl font-bold text-white mb-6 text-center">
                Website Portfolio
                </h2>
                <p className="text-white text-center mb-8 max-w-sm">
                    Explore a collection of live websites that I have designed, developed or contributed to.
                </p>
                <ul className="space-y-4 text-center">
                {websites.map((website, index) => (
                <li className="leading-tight" key={index}>
                    <a
                    className="text-blue-400 hover:underline text-lg font-medium font-sans"
                    href={website.url}
                    rel="noopener noreferrer"
                    target="_blank"
                    >
                    {website.displayUrl}
                    </a>
                </li>
                ))}
                </ul>
                <p className="text-white text-center p-4"> : )</p>
            </div>
        </section>
    );
});

export default React.memo(Websites);