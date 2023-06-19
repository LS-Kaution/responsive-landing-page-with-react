import '../style/LoginAndRegistration.scss'
import { useState } from 'react'
import { supabase } from '../backend/client'
import { useNavigate } from 'react-router-dom'
import Header from '../components/Header'
import InputOne from '../components/InputOne'
import InputTwo from '../components/InputTwo'

export default function RegistrationPage() {
    let navigate = useNavigate()
    const [regnickname, setRegnickname] = useState("")
    const [regemail, setRegemail] = useState("")
    const [regpassword, setRegpassword] = useState("")
    const [regterms, setTerms] = useState(false)
    const [regerror, setError] = useState(false)

    async function noSubmitReg(e) {
        e.preventDefault()
        try {
            const { data, error } = await supabase.auth.signUp({
                email: regemail,
                password: regpassword,
                options: {
                    data: {
                        full_name: regnickname,
                    }
                }
            })
            if (regnickname === "" || regemail === "" || regpassword === "" || regterms === false) {
                setError(true)
                return
            }
            setError(false)
            setRegnickname('')
            setRegemail('')
            setRegpassword('')
            setTerms(false)
            alert('Check your email for verification link')
            navigate('/login')
        }
        catch (error) {
            console.error(error)
        }

    }

    const handleChangeReg = () => {
        setTerms(!regterms);
    }

    return (
        <section className='section-login-reg'>
            <Header />
            <form onSubmit={noSubmitReg}>
                <h1>Registration</h1>
                <InputOne type='text' value={regnickname} data={e => setRegnickname(e.target.value)} title='Enter a Nickname' icon={<ion-icon name="person-circle"></ion-icon>} />
                <InputOne type='email' value={regemail} data={e => setRegemail(e.target.value)} title='Enter a Email' icon={<ion-icon name="mail"></ion-icon>} />
                <InputOne type='password' value={regpassword} data={e => setRegpassword(e.target.value)} length={6} title='Enter a Password' icon={<ion-icon name="lock-closed"></ion-icon>} />
                <InputTwo id='remember-forgot' data={handleChangeReg} check={regterms} title='I agree to the terms & conditions' />
                <button type='submit'>Sign Up</button>
                <InputTwo id='login-register' title="Already have an account?" link='/login' ancor='Sign In' />
                {regerror && <p>*** All fields are necessary ***</p>}
            </form>
        </section>
    )
}    