import data from '../../data-path-of-visionaries'
import CodeInfo from '../CodeInfo/CodeInfo';

import Plaque from '../Plaque/Plaque';

const PathOfVisionaries = () => {

    const plaqueRandomPick = data[Math.floor(Math.random()*data.length)];

    return (
        <section className="plaque-pick">
            <h2>Pfad der Visionäre</h2>
            <p>V Berlíně, v části zvané Kreuzberg, se nachází umělecký projekt s názvem Pfad der Visionäre, který sestává z desek umístěných na povrchu chodníku pěší zóny. Každá deska obsahuje citát významné osoby každé členské země EU.</p>
            <CodeInfo info="Tato sekce při každé návštěvě náhodně vybere jeden z citátů." />
            <Plaque {...plaqueRandomPick} />
        </section>
    )
}

export default PathOfVisionaries