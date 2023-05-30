export default function CardCharacter({ link, title }) {
    return (
        <div>
            <h2>{title}</h2>
            <img src={link} />            
            <p>Lorem ipsum dolor sit amet consectetur adipiscing elit, quisque venenatis iaculis aliquet auctor vehicula morbi, taciti dignissim per at lacus himenaeos. Mauris vel tristique ut nostra neque feugiat dignissim etiam class habitasse.</p>
        </div>
    )
}