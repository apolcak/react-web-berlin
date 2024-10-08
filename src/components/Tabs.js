import { useState } from 'react'

import tabs from './../data-tabs'

import Tab from './Tab'
import './Tabs.scss'

const Tabs = () => {

    const [visibleTab, setVisibleTab] = useState(0)

    function handleTabChange(index) {
        setVisibleTab(index)
    }

    return (
        <section className="tabs">
            <h2>Pár historických milníků</h2>
            <div className="tabs__tabs">
                {
                    tabs.map((tab,index) => {
                        let buttonClass = 'tab-title'

                        buttonClass += (index==visibleTab) ? ' active' : ''

                        return (
                            <button key={index} className={buttonClass} onClick={()=>handleTabChange(index)}>
                                {tab.title}
                            </button>
                        )
                    })
                }
            </div>
            <div className="tabs__contents">
                {
                    tabs.map((tab,index) => {
                        let show = (index===visibleTab)

                        return (
                            show && <Tab key={index} {...tab} />
                        )
                    })
                }
            </div>
        </section>
    )
}

export default Tabs