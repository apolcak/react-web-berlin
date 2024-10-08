import parse from 'html-react-parser'   // Import html-react-parser to parse string to html

import "./Fact.scss"

const Fact = ({Icon,title,value}) => {
    return (
        <article className="fact">
            <figure><Icon /></figure>
            <strong className="fact__title">{title}</strong>
            <span className="fact__value">{parse(value)}</span>
        </article>
    )
}

export default Fact