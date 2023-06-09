import '../style/LoginPage.scss'
import '../style/HeaderLogin.scss'
import HeaderLogin from '../components/HeaderLogin'
import InputOne from '../components/InputOne'
import InputTwo from '../components/InputTwo'
import { useState } from 'react'

export default function LoginPage() {
    const [loginnickname, setLoginnickname] = useState('')
    const [loginpassword, setLoginpassword] = useState('')
    const [loginremember, setRemember] = useState(false)
    const [loginerror, setError] = useState(false)

    function noSubmitLogin(e) {
        e.preventDefault()
        if (loginnickname === "" || loginpassword === "") {
            setError(true)
            return
        }
        setError(false)
        setLoginnickname('')
        setLoginpassword('')
        setRemember(false)
    }

    const handleChangeLogin = () => {
        setRemember(!loginremember);
    }

    return (
        <section>
            <HeaderLogin />
            <form onSubmit={noSubmitLogin}>
                <h2>Login</h2>
                <InputOne type='text' value={loginnickname} data={e => setLoginnickname(e.target.value)} title='Nickname' icon={<ion-icon name="person-circle"></ion-icon>} />
                <InputOne type='password' value={loginpassword} data={e => setLoginpassword(e.target.value)} title='Password' icon={<ion-icon name="lock-closed"></ion-icon>} />
                <InputTwo id='remember-forgot' data={handleChangeLogin} check={loginremember} title='Remember me' ancor='Forgot Password?' />
                <button type='submit'>Sign In</button>
                <InputTwo id='login-register' title="Don't have an account?" link='/registration' ancor='Sign Up' />
                {loginerror && <p>*** All fields are necessary ***</p>}
            </form>
        </section>
    )
}
