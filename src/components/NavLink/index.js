import './index.css'

export default function NavLink({ text, href, onClick, disabled = false, visible = true }) {
    return visible ? 
    <a href={href}>
        <button className="nav-button text-default">{text}</button>
    </a> : <></>
}