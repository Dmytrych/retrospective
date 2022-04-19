import NavLink from '../NavLink';
import './index.css';

export default function Navbar() {
    return <div className={"menu-left navbar"} >
        <div className='display-flex flex-column'>
            <div>
                <NavLink text="Home" href="/"/>
            </div>
            <div>
                <NavLink text="Retrospective" href="/session"/>
            </div>
        </div>
    </div>
}