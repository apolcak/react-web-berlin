import { useState } from 'react'

import CodeInfo from '../components/CodeInfo'
import UsedLibs from "../components/UsedLibs"
import Stop from "../components/Stop"

import "./Transport.scss"

const usedLibs = [
    {
        'name': 'vbb-rest',
        'desc': 'Veřejná rest api dopravy.',
        'url': 'https://github.com/derhuerst/vbb-rest'
    }
]

const Transport = () => {

    const [stopSearch, setStopSearch] = useState('')
    const [foundStops, setFoundStops] = useState([])

    const handleStopSearchSubmit = (e) => {
        e.preventDefault();

        // Check the input
        if ( ! stopSearch || stopSearch.length <3 ) {
            alert('Musíte vyplnit alespoň 3 znaky názvu zastávky!')
            return
        }

        setFoundStops([])

        let curlUrl = `https://v6.vbb.transport.rest/locations?poi=false&addresses=false&query=${stopSearch}`
        fetch(curlUrl, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            }
        })
            .then(response => response.json())
            .then(data => {
                setFoundStops(data)
            })
            .catch(error => console.error('Error:', error));
    }

    return (
        <div className="container">
            <h1>Doprava</h1>
            <CodeInfo info="Tato stránka na základě zadaného řetězce vyhledá zastávky hromadné dopravy. U každé z nich jde dále vyžádat seznam nejdřívějších spojů." />
            <section>
                <form onSubmit={handleStopSearchSubmit} className="transport-form">
                    <label htmlFor="search-stop">Zadejte název zastávky:&nbsp;</label>
                    <div className="search-wrap">
                        <input type="text"
                            placeholder="Název zastávky"
                            name="stop"
                            id="search-stop"
                            value={stopSearch}
                            onChange={ (e) => { setStopSearch(e.target.value) } }
                        />
                        <button type="submit">Hledat</button>
                    </div>
                    <p><i>Např. Brandenburg, Marzahn, Antonplatz, Kaiserdamm, ...</i></p>
                </form>
                {
                    foundStops.length>0 &&
                    <div className="stops">
                        <h2 className="stops__title">Prvních 10 výsledků vyhledávání</h2>
                        <div className="stops__list">
                            {
                                foundStops.map((stop,index) => {
                                    return (
                                        <Stop key={index} stop={stop} index={index} />
                                    )
                                })
                            }
                        </div>
                    </div>
                }
            </section>
            <UsedLibs sources={usedLibs} />
        </div>
    )
}

export default Transport