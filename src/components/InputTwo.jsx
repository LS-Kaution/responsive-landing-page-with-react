import { Link } from "react-router-dom";

export default function InputTwo({ id, title, link, ancor }) {
    return (
        <div className={id}>
            <label htmlFor=""><input type="checkbox" />{title}</label>
            <Link to={link}>{ancor}</Link>
        </div>
    )
}