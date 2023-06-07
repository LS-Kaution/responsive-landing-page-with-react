export default function NickPass({ type, title, icon }) {
    return (
        <div className='login-container'>
            <input type={type} placeholder={title} />
            <span className='icon'>{icon}</span>
        </div>
    )
}