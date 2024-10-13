import parse from 'html-react-parser'; // Import html-react-parser to parse string to html

import './FactsItem.scss';

const FactsItem = ({ icon: Icon, title, value }) => {
    return (
        <article className="fact">
            <figure>
                <Icon />
            </figure>
            <strong className="fact__title">{title}</strong>
            <span className="fact__value">{parse(value)}</span>
        </article>
    );
};

export default FactsItem;
