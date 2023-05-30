export default function News({ link, title }) {
    return (
        <div>
            <h1>Breaking News</h1>
            <img src={link} />
            <h2>{title}</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipiscing elit, quisque venenatis iaculis aliquet auctor vehicula morbi, taciti dignissim per at lacus himenaeos. Mauris vel tristique ut nostra neque feugiat dignissim etiam class habitasse. Lorem ipsum dolor sit amet consectetur adipiscing elit. Iaculis aliquet auctor vehicula morbi.</p>
        </div>
    )
}