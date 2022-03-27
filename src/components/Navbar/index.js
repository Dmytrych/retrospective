import NavLink from '../NavLink';
import './index.css';

export default function Navbar() {
    return <div className={"menu-left navbar"} >
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