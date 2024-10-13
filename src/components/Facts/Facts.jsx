import dataFacts from '../../data-facts';
import FactsItem from './FactsItem';

import './Facts.scss';

const Facts = () => {
    return (
        <section className="facts">
            <h2>Základní fakta o Berlíně</h2>
            <div className="facts__grid">
                {dataFacts.map((fact, index) => {
                    return <FactsItem key={index} {...fact} />;
                })}
            </div>
        </section>
    );
};

export default Facts;
