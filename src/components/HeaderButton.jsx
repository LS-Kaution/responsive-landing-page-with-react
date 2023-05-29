export default function HeaderButton({ name, link }) {
    return (
        <>
            <button type="button">
                <a href="{link}">{name}</a>
            </button>
        </>
    )
}