export default function RememberRegister({ id, title, ancor }) {
    return (
        <div id={id}>
            <label htmlFor=""><input type="checkbox" />{title}</label>
            <a href="#">{ancor}</a>
        </div>
    )
}