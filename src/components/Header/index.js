import { GiHamburgerMenu } from "react-icons/gi" 
import "./index.css"

export default function Header({openMenu}) {
    return <div className="header">
        <button className="hamburger-menu" onClick={() => openMenu()}>
            <GiHamburgerMenu className="square-header-item"/>
        </button>
    </div>
}