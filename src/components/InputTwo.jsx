import { Link } from "react-router-dom";

export default function InputTwo({ id, data, check, title, link, ancor }) {
    return (
        <div className={id}>
            <label htmlFor=""><input type="checkbox" onChange={data} checked={check} />{title}</label>
            <Link to={link}>{ancor}</Link>
        </div>
    )
}