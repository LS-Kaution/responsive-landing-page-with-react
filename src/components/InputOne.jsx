export default function InputOne({ type, value, data, title, icon }) {
    return (
        <div className='login-container'>
            <input type={type} value={value} onChange={data} placeholder={title} />
            <span className='icon'>{icon}</span>
        </div>
    )
}