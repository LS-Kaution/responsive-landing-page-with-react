export default function HeaderButton({ name, link }) {
    return (
        <>
            <button type="button">
                <a href="{link}" className="header-buttons">{name}</a>
            </button>
        </>
    )
}