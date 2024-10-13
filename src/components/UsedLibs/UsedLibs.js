import React from 'react';

import './UsedLibs.scss';

const UsedLibs = ({ sources }) => {
    if (sources.length <= 0) {
        return;
    }

    return (
        <section className="used-libs">
            <h2 className="used-libs__title">Použité knihovny či zdroje</h2>
            <ul className="used-libs__list">
                {sources.map((source, index) => {
                    return (
                        <li key={index}>
                            {source.name} [<a href={source.url}>URL</a>]
                            {source.desc && (
                                <>
                                    <br />
                                    <small>{source.desc}</small>
                                </>
                            )}
                        </li>
                    );
                })}
            </ul>
        </section>
    );
};

export default UsedLibs;
