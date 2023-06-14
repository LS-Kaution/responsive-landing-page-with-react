import '../style/LoginAndRegistration.scss'
import '../style/HeaderLogin.scss'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { supabase } from '../backend/client'
import HeaderLogin from '../components/HeaderLogin'
import InputOne from '../components/InputOne'
import InputTwo from '../components/InputTwo'

export default function LoginPage() {
    let navigate = useNavigate()
    const [loginnickname, setLoginnickname] = useState('')
    const [loginpassword, setLoginpassword] = useState('')
    const [loginremember, setRemember] = useState(false)
    const [loginerror, setError] = useState(false)

    async function noSubmitLogin(e) {
        e.preventDefault()
        try {
            const { data, error } = await supabase.auth.signInWithPassword({
                email: loginnickname,
                password: loginpassword,
            })

            if (loginnickname === "" || loginpassword === "") {
                setError(true)
                return
            }
            setError(false)
            setLoginnickname('')
            setLoginpassword('')
            setRemember(false)
            alert('Succesful Login')
            navigate('/')
            console.log(data)
        } catch (error) {
            console.error(error)
        }


    }

    const handleChangeLogin = () => {
        setRemember(!loginremember);
    }

    return (
        <section className='section-login-reg'>
            <HeaderLogin />
            <form onSubmit={noSubmitLogin}>
                <h1>Login</h1>
                <InputOne type='text' value={loginnickname} data={e => setLoginnickname(e.target.value)} title='Nickname' icon={<ion-icon name="person-circle"></ion-icon>} />
                <InputOne type='password' value={loginpassword} data={e => setLoginpassword(e.target.value)} title='Password' icon={<ion-icon name="lock-closed"></ion-icon>} />
                <InputTwo id='remember-forgot' data={handleChangeLogin} check={loginremember} title='Remember me' ancor='Forgot Password?' link='/password-recovery' />
                <button type='submit'>Sign In</button>
                <InputTwo id='login-register' title="Don't have an account?" link='/registration' ancor='Sign Up' />
                {loginerror && <p>*** Please, enter your account ***</p>}
            </form>
        </section>
    )
}