import { Link } from "react-router-dom";

export default function HeaderButton({ link, name }) {
    return (
        <>
            <button type="button">
                <Link to={link} className="header-buttons">{name}</Link>
            </button>
        </>
    )
}