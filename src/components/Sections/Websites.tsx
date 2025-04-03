import React from 'react';

const Websites: React.FC = () => {
    const websites = [
        { name: 'GitHub', url: 'https://github.com' },
        { name: 'Stack Overflow', url: 'https://stackoverflow.com' },
        { name: 'React', url: 'https://reactjs.org' },
    ];

    return (
        <section className="flex justify-center items-center bg-neutral-800 py-12" id="websites">
            <div className="border border-gray-600 rounded-lg p-8 bg-gray-800">
                <h2 className="text-2xl font-bold text-white mb-6 text-center">
                Website Portfolio
                </h2>
                <ul className="space-y-4 text-center">
                {websites.map((website, index) => (
                <li key={index}>
                    <a
                    href={website.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:underline"
                    >
                    {website.url}
                    </a>
                </li>
                ))}
                </ul>
            </div>
        </section>
    );
};

export default Websites;