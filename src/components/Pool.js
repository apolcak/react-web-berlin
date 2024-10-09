import { useState } from 'react'

import './Pool.scss'

const Pool = ({id,badname,wasserqualitaet,dat,bemerkung,weitere_hinweise}) => {

    const [noteOpened, setNoteOpened] = useState(false)

    const handlePoolInfoToggle = (event,element) => {
        event.preventDefault();

        setNoteOpened(!noteOpened)  // toggle bool value
    }

    return (
        <article className="pool">
            <div className="pool__state"><span className={`state state--${wasserqualitaet}`} title="Stav vody"></span></div>
            <small className="pool__last-check">{dat}</small>
            <strong className="pool__title">{badname}</strong>
            {
                // Conditional rendering - if some type of note, include it
                (bemerkung || weitere_hinweise) &&
                <div className="note">
                    <a className="note__open" onClick={handlePoolInfoToggle}>{noteOpened ? 'Zobrazit podrobné informace' : 'Skrýt podrobné informace'}</a>
                    <div className={`note__info${ noteOpened ? ' active' : ''} `}>
                        <table>
                            <tbody>
                                {
                                    bemerkung &&
                                    <tr>
                                        <th>Poznámka</th>
                                        <td>{bemerkung}</td>
                                    </tr>
                                }
                                {
                                    weitere_hinweise &&
                                    <tr>
                                        <th>Dodatek</th>
                                        <td>{weitere_hinweise}</td>
                                    </tr>
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            }
        </article>
    )
}

export default Pool