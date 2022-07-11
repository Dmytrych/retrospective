import './index.css'
import { useNavigate } from 'react-router-dom'

export default function NavLink({ text, href, disabled = false, visible = true }) {
    const navigate = useNavigate()

    return visible ? 
    <button className="nav-button text-default" onClick={() => navigate(href, {replace: true})}>{text}</button> : <></>
}