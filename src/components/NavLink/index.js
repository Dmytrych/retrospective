import './index.css'

export default function NavLink({ text, href, onClick, disabled = false, visible = true }) {
    return visible ? 
    <a href={href} disabled={disabled}>
        <button className="nav-button">{text}</button>
    </a> : <></>
}