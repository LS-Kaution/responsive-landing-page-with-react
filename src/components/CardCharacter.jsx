export default function ({ link, title, description }) {
    return (
        <div>
            <h2>{title}</h2>
            <img src={link} />            
            <p>{description}</p>
        </div>
    )
}