export default function SectionHomeCard({className, src, alt, description}) {
    return (
        <div className={className}>
            <img src={src} alt={alt} />
            <p>{description}</p>
        </div>
    )
}