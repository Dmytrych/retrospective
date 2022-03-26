import NavLink from '../NavLink';
import './Navbar.css';

export default function Navbar() {
    return <div className='navbar menu-left'>
        <div className='display-flex flex-column'>
            <div>
                <NavLink className="maximize-width" text="Home" href=""/>
            </div>
            <div>
                <NavLink text="Retrospective"/>
            </div>
        </div>
    </div>
}