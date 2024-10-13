import { NavLink } from 'react-router-dom';

import './Header.scss';

const Header = () => {
    return (
        <header className="app-header container">
            <nav className="app-header__navigation">
                <NavLink
                    to="/"
                    className={({ isActive }) =>
                        isActive ? 'activeLink' : 'nonactiveLink'
                    }
                >
                    Domů
                </NavLink>
                <NavLink
                    to="/swimmingpools"
                    className={({ isActive }) =>
                        isActive ? 'activeLink' : 'nonactiveLink'
                    }
                >
                    Místa ke koupání
                </NavLink>
                <NavLink
                    to="/transport"
                    className={({ isActive }) =>
                        isActive ? 'activeLink' : 'nonactiveLink'
                    }
                >
                    Doprava
                </NavLink>
            </nav>
        </header>
    );
};

export default Header;
