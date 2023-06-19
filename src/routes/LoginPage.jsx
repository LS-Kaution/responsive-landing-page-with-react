import '../style/LoginAndRegistration.scss'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { supabase } from '../backend/client'
import Header from '../components/Header'
import InputOne from '../components/InputOne'
import InputTwo from '../components/InputTwo'

export default function LoginPage() {
    let navigate = useNavigate()
    const [loginemail, setLoginemail] = useState('')
    const [loginpassword, setLoginpassword] = useState('')
    const [loginremember, setRemember] = useState(false)
    const [loginerror, setError] = useState(false)

    async function noSubmitLogin(e) {
        e.preventDefault()
        try {
            const { data, error } = await supabase.auth.signInWithPassword({
                email: loginemail,
                password: loginpassword,
            })

            if (loginemail === "" || loginpassword === "") {
                setError(true)
                return
            }
            setError(false)
            setLoginemail('')
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
            <Header />
            <form onSubmit={noSubmitLogin}>
                <h1>Login</h1>
                <InputOne type='email' value={loginemail} data={e => setLoginemail(e.target.value)} title='Email' icon={<ion-icon name="person-circle"></ion-icon>} />
                <InputOne type='password' value={loginpassword} data={e => setLoginpassword(e.target.value)} title='Password' icon={<ion-icon name="lock-closed"></ion-icon>} />
                <InputTwo id='remember-forgot' data={handleChangeLogin} check={loginremember} title='Remember me' ancor='Forgot Password?' link='/password-recovery' />
                <button type='submit'>Sign In</button>
                <InputTwo id='login-register' title="Don't have an account?" link='/registration' ancor='Sign Up' />
                {loginerror && <p>*** Please, enter your account ***</p>}
            </form>
        </section>
    )
}