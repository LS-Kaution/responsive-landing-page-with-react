import { useState } from 'react'
import HeaderLogin from '../components/HeaderLogin'
import InputOne from '../components/InputOne'
import InputTwo from '../components/InputTwo'

export default function RegistrationPage() {
    const [regnickname, setRegnickname] = useState("")
    const [regemail, setRegemail] = useState("")
    const [regpassword, setRegpassword] = useState("")
    const [regterms, setTerms] = useState(false)
    const [regerror, setError] = useState(false)

    const noSubmit = (e) => {
        e.preventDefault()

        if (regnickname === "" || regemail === "" || regpassword === "" || regterms === false) {
            setError(true)
            return
        }
        setError(false)
    }

    const handleChange = () => {
        setTerms(!regterms);
      }

    return (
        <section>
            <HeaderLogin />
            <form onSubmit={noSubmit}>
                <h2>Registration</h2>

                <InputOne type='text' value={regnickname} data={e => setRegnickname(e.target.value)} title='Enter a Nickname' icon={<ion-icon name="person-circle"></ion-icon>} />

                <InputOne type='email' value={regemail} data={e => setRegemail(e.target.value)} title='Enter a Email' icon={<ion-icon name="mail"></ion-icon>} />

                <InputOne type='password' value={regpassword} data={e => setRegpassword(e.target.value)} title='Enter a Password' icon={<ion-icon name="lock-closed"></ion-icon>} />

                <InputTwo id='remember-forgot' data={handleChange} check={regterms} title='I agree to the terms & conditions' />
                
                <button type='submit'>Sign Up</button>

                <InputTwo id='login-register' title="Already have an account?" link='/login' ancor='Sign In' />
                {regerror && <p>All fields are necessary</p>}
            </form>
        </section>
    )
}