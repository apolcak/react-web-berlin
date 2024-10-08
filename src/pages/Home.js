import ThePathOfVisionaries from "./../components/ThePathOfVisionaries"
import UsedLibs from "../components/UsedLibs"
import Facts from "./../components/Facts"
import Tabs from "./../components/Tabs"

import "./Home.scss"

const usedLibs = [
    {
        'name': 'Základní informace z Wikipedie',
        'url': 'https://en.wikipedia.org/wiki/Path_of_Visionaries'
    },
    {
        'name': 'Oficiální web Pfad der Visionäre',
        'url': "https://pfaddervisionaere.de/"
    }
]

const Home = () => {
    return (
        <div className="container">
            <h1>Berlín</h1>
            <section className="hero">
                <p>Tento web je vytvořen pomocí knihovny React a zaměřuje se na prezentaci využití jeho základních hooků a technik.<br />Tématem webu je hlavní město Německa, které jsem měl možnost nedávno navštívit.</p>
            </section>
            <ThePathOfVisionaries />
            <Facts />
            <Tabs />
            <UsedLibs sources={usedLibs} />
        </div>
    )
}

export default Home