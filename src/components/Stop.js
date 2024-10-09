import { useState, useEffect, useRef } from 'react'

import "./Stop.scss"

const Stop = ({stop,index}) => {

    const refButton = useRef(null)

    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)
    const [departures, setDepartures] = useState([])
    const [noDepartures, setNoDepartures] = useState('')
    const [selectedStop, setSelectedStop] = useState(null)

    // Helper function to render proper date/time format
    const timeFormat = (dateTimeString) => {
        const date = new Date(dateTimeString);

        let datePart = new Intl.DateTimeFormat('cs-CZ', {
            year: 'numeric',
            month: '2-digit',
            day: '2-digit',
            timeZone: 'Europe/Prague',
        }).format(date)

        let timePart = new Intl.DateTimeFormat('cs-CZ', {
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
            timeZone: 'Europe/Prague',
        }).format(date)

        return datePart + ' - ' + timePart
    }

    const handleGetDeparturesForStop = (stopId,stopIndex) => {
        setSelectedStop(stopId)
        fetchDepartures(stopId)
    }

    const fetchDepartures = (fetchedStopId) => {

        setLoading(true); // Set loading to true when starting the fetch
        setError(null); // Reset the error state before fetching new data

        let curlUrl = `https://v6.vbb.transport.rest/stops/${fetchedStopId}/departures?results=10`
        fetch(curlUrl, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            }
        })
            .then(response => response.json())
            .then(data => {
                if ( data.departures.length>0 ) {
                    setDepartures(data.departures)
                } else {
                    // No departures at this moment
                    setNoDepartures('Nenalezeny žádné příjezdy')
                }
                setLoading(false)
                refButton.current.innerText = 'Aktualizovat'
            })
            .catch(error => {
                console.error('Error:', error)
                setError(true)
            });
    }

    useEffect(() => {

        if (selectedStop === null) return; // Do nothing if no bus stop is selected

        setLoading(true); // Set loading to true when starting the fetch
        setError(null); // Reset the error state before fetching new data

        fetchDepartures(selectedStop)

    }, [selectedStop])

    return (
        <article className="stop">
            <header className="stop__header">
                <h4 className="stop__name" onClick={() => handleGetDeparturesForStop(stop.id,index)}>{index + 1}) {stop.name}</h4>
                <button className="stop__departure-cta"
                        onClick={() => handleGetDeparturesForStop(stop.id,index)}
                        ref={refButton}
                >Načíst příjezdy</button>
            </header>
            {
                // If this bus stop is selected, show the departures below it
                selectedStop === stop.id && departures.length>0 &&
                <div>
                    {loading && <p>Načítám příjezdy...</p>}
                    {error && <p>Došlo k chybě :( zkuste to později.</p>}
                    <ul className="stop__departures-list">
                        {departures.map((departure, index) => (
                            <li key={index} className="departure">
                                {timeFormat(departure.when)}
                                {departure.delay > 0 && <small className="time-info time-info--late">+{departure.delay}s</small>}
                                {departure.delay < 0 && <small className='time-info time-info--soon'>{departure.delay}s</small>}
                                <p className="departure__direction"><span>→</span> {departure.direction}</p>
                            </li>
                        ))}
                    </ul>
                </div>
            }
            {
                noDepartures && <p className="no-departures-found">{noDepartures}</p>
            }
        </article>
    )
}

export default Stop