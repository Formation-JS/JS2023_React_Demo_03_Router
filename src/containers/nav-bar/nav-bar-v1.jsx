import { Link, NavLink } from 'react-router-dom';
import style from './nav-bar.module.css';

const NavBar = () => (
    <nav className={style.main}>
        <ul>
            <li>
                <NavLink
                    to=''
                    className={({isActive}) => isActive ? style.active : undefined }
                >
                    Accueil
                </NavLink>
            </li>
            <li>
                <NavLink
                    to='/contact'
                    className={({isActive}) => isActive ? style.active : undefined }
                >
                    Contact
                </NavLink>
            </li>
        </ul>
    </nav>
);

export default NavBar;