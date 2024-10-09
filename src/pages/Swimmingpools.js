import { useEffect, useState, useRef } from 'react'

import CodeInfo from '../components/CodeInfo';
import UsedLibs from "../components/UsedLibs"
import Select from 'react-select';
import Pool from '../components/Pool';

import "./Swimmingpools.scss"

const sourceUrl = 'https://www.berlin.de/lageso/gesundheit/gesundheitsschutz/badegewaesser/liste-der-badestellen/index.php/index/all.json?q=';

const usedLibs = [
    {
        'name': 'Oficiální seznam míst ke koupání',
        'desc': 'Veřejně dostupný výpis míst ve formátu json.',
        'url': sourceUrl
    },
    {
        'name': 'Pretty checkbox',
        'desc': 'Vlastní stylování pro checkbox input.',
        'url': "https://www.npmjs.com/package/pretty-checkbox"
    }
]

const options = []

const Swimmingpools = () => {

    const checkResetButtonState = () => {
        if ( !selectedDistrict && !withNote && !containsString ) {
            setResetDisabled(true)
        } else {
            setResetDisabled(false)
        }
    }

    const [loading, setLoading] = useState(true)
    const [pools, setPools] = useState([])
    const [selectedDistrict, setSelectedDistrict] = useState('')
    const [withNote, setWithNote] = useState(false)
    const [containsString, setContainsString] = useState('')
    const [resetDisabled, setResetDisabled] = useState(true)

    const withNoteFilter = useRef('')
    const containsStringFilter = useRef('')

    const handleFilterByDistrict = (optionObject) => {
        if ( optionObject.value ) {
            setSelectedDistrict(optionObject)
        }
    }

    const handleFilterWithNote = (event) => {
        setWithNote( event.target.checked )
    }

    const handleFilterByName = (event) => {
        setContainsString( event.target.value.toLowerCase() )
    }

    const handleResetFiltration = (event) => {
        // Prevent form submit
        event.preventDefault()

        // - reset district selection
        setSelectedDistrict('')

        // - reset note include
        withNoteFilter.current.checked = false
        setWithNote(false)

        // - reset searching by name
        containsStringFilter.current.value = ''
        setContainsString('')

        setResetDisabled(false)
    }

    const filteredPools = pools.filter((pool) => {

        let isInDistrict = false,
            hasNote = false,
            hasString = false

        // Filter by selected district
        if ( selectedDistrict ) {
            if ( pool.bezirk == selectedDistrict.value ) isInDistrict = true
        } else {
            // Fallback
            isInDistrict = true
        }

        // Filter by has note
        if ( withNote ) {
            if ( pool.bemerkung || pool.weitere_hinweise ) hasNote = true
        } else {
            // Fallback
            hasNote = true
        }

        // Filter by name substring
        if ( containsString ) {
            if ( pool.badname.toLowerCase().indexOf(containsString) >= 0 ) hasString = true
        } else {
            // Fallback
            hasString = true
        }

        return (isInDistrict && hasNote && hasString) ?? pool
    } )

    let districts = [],
        uniqueDistricts = [],
        myPools = []

    useEffect(() => {
        fetch(sourceUrl)
            .then( (response) => response.json() )
            .then( (data) => data.index )
            .then( (allSwimmingPools) => {
                myPools = allSwimmingPools
                myPools.map((pool) => {
                    districts.push(pool.bezirk)
                })
                uniqueDistricts = [...new Set(districts)]
            } )
            .then( () => {
                setPools( myPools )
                // Prepare options for district filtration
                uniqueDistricts.map((districtName,index) => {
                    return options.push({
                        'value': districtName,
                        'label': districtName
                    })
                })
            } )
            .then( setLoading(false) )
    }, [])

    useEffect(() => {
        checkResetButtonState()
    }, [containsString,withNote,selectedDistrict])

    if ( loading ) {
        return <h2>Načítání dat...</h2>
    }

    return (
        <div className='container'>
            <h1>Kde si zaplavat</h1>
            <CodeInfo info="Tato stránka zpracuje data ve formátu json. Některá data rovnou použije pro umožnění filtrace výpisu." />
            <UsedLibs sources={usedLibs} />
            <div className="filtration">
                <div>
                    <h2>Přehled míst</h2>
                    <p>Filtrace funguje jako kombinace všech pravidel. V prvním sloupci výpisu je značka kvality vody ke koupání, následuje datum posledního testování vody a název místa.</p>
                    <h3>Vysvětlivky kvality vody</h3>
                    <dl>
                        <dt><span className="state state--1"></span></dt>
                        <dd>Vhodné ke koupání</dd>
                        <dt><span className="state state--3"></span></dt>
                        {/* TODO: rot farbe id */}
                        <dd>Dávejte pozor, čtěte upozornění</dd>
                        <dt><span className="state state--2"></span></dt>
                        <dd>Zákaz koupání</dd>
                    </dl>
                    <form action="">
                        <div className="cols">
                            <div className="col">
                                <h5 className='filtrationCol'>Dle okresu</h5>
                                <Select
                                    id="filter-by-district"
                                    placeholder="Vyberte okres"
                                    isSearchable={false}
                                    value={selectedDistrict}
                                    onChange={handleFilterByDistrict}
                                    options={options}
                                    styles={{
                                        control: (provided) => ({
                                            ...provided,
                                            borderRadius: '0.5rem',
                                            border: '2px solid var(--greeny)',
                                            height: '35px',
                                            minHeight: '35px',
                                        }),
                                        valueContainer: (provided) => ({
                                            ...provided,
                                            height: '100%',
                                            padding: '0 8px',
                                        }),
                                        input: (provided) => ({
                                            ...provided,
                                            height: '100%',
                                            margin: '0',
                                            padding: '0',
                                        }),
                                        singleValue: (provided) => ({
                                            ...provided,
                                            display: 'flex',
                                            alignItems: 'center',
                                            height: '100%',
                                        }),
                                        placeholder: (provided) => ({
                                            ...provided,
                                            display: 'flex',
                                            alignItems: 'center',
                                            height: '100%',
                                        }),
                                        dropdownIndicator: (provided) => ({
                                            ...provided,
                                            padding: '0',
                                            height: '100%',
                                            display: 'flex',
                                            alignItems: 'center',
                                        }),
                                        option: (provided, state) => ({
                                            ...provided,
                                            backgroundColor: state.isSelected ? 'var(--greeny)' : 'white',
                                            color: 'black',
                                            ':hover': {
                                                backgroundColor: 'var(--yellow)',
                                                color: 'black',
                                            },
                                        }),
                                    }}
                                />
                            </div>
                            <div className="col">
                                <h5 className='filtrationCol'>Dle poznámky</h5>
                                <div className="pretty p-default p-curve">
                                    <input type="checkbox"
                                           name="filter-by-note"
                                           id="filter-by-note"
                                           ref={withNoteFilter}
                                           onChange={handleFilterWithNote}
                                    />
                                    <div className="state p-success">
                                        <label htmlFor="filter-by-note">Pouze s poznámkou</label>
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                <h5 className='filtrationCol'>Dle názvu</h5>
                                <label htmlFor="filter-by-name">
                                    <input type="text"
                                        placeholder="Hledat dle názvu"
                                        name="filter-by-name"
                                        id="filter-by-name"
                                        ref={containsStringFilter}
                                        onChange={handleFilterByName}
                                    />
                                </label>
                            </div>
                        </div>
                        <hr />
                        <div className='reset-form-wrapper'><button id="reset-form" onClick={handleResetFiltration} disabled={resetDisabled}>Resetovat filtraci</button></div>
                    </form>
                </div>
            </div>
            <div className="pools">
                {
                    // All pools matching the filters
                    filteredPools.map((pool) => {
                        return <Pool key={pool.id} {...pool} />
                    })
                }
                {
                    // No results message
                    filteredPools.length<=0 && <div id="no-results">Filtraci neodpovídají žádné položky</div>
                }
            </div>
        </div>
    )
}

export default Swimmingpools