import { NavLink } from 'react-router-dom';

import './Header.scss';

const Header = () => {
    return (
        <header className="app-header container">
            <nav className="app-header__navigation">
                <NavLink to="/">Domů</NavLink>
                <NavLink to="/swimmingpools">Místa ke koupání</NavLink>
                <NavLink to="/transport">Doprava</NavLink>
            </nav>
        </header>
    );
};

export default Header;
