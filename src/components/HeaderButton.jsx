import { Link } from "react-router-dom";

export default function HeaderButton({ name, link }) {
    return (
        <>
            <button type="button">
                <Link to={link} className="header-buttons">{name}</Link>
            </button>
        </>
    )
}