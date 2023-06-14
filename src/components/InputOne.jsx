export default function InputOne({ type, value, data, length, title, icon }) {
    return (
        <div className='login-container'>
            <input type={type} value={value} onChange={data} minLength={length} placeholder={title} />
            <span className='icon'>{icon}</span>
        </div>
    )
}