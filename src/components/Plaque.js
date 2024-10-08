import './Plaque.scss'

const Plaque = ({country,flag,image,text,author}) => {
    return (
        <article className="plaque">
            <figure className="plaque__country">
                <strong className="plaque__country-name">{country}</strong>
                {
                    flag && <img src={flag} alt={country} title={country} className="plaque__flag" />
                }
            </figure>
            <blockquote>
                <p>"{text}"</p>
                <cite>{author}</cite>
            </blockquote>
            {
                image && <figure className="plaque__image"><img src={image} alt="Celkový obrázek desky státu" /></figure>
            }
        </article>
    )
}

export default Plaque