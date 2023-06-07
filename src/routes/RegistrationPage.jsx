import { useState } from 'react'
import InputOne from '../components/InputOne'
import InputTwo from '../components/InputTwo'

export default function RegistrationPage() {
    const [regnickname, setRegnickname] = useState("")
    const [regemail, setRegemail] = useState("")
    const [regpassword, setRegpassword] = useState("")

    const noSubmit = (e) => {
        e.preventDefault()
    }

    function handleChange(evento) {
        setRegnickname(evento.target.value)
        console.log(regnickname)
    }

    return (
        <section>
            <form onSubmit={noSubmit}>
                <h2>Registration</h2>

                <InputOne type='text' value={regnickname} data={handleChange} title='Enter a Nickname' icon={<ion-icon name="person-circle"></ion-icon>} />

                <InputOne type='email' value={regemail} data={handleChange} title='Enter a Email' icon={<ion-icon name="mail"></ion-icon>} />

                <InputOne type='password' value={regpassword} data={handleChange} title='Enter a Password' icon={<ion-icon name="lock-closed"></ion-icon>} />

                <InputTwo id='remember-forgot' title='I agree to the terms & conditions' />
                <button type='submit'>Sign Up</button>

                <InputTwo id='login-register' title="Already have an account?" link='/login' ancor='Sign In' />
            </form>
        </section>
    )
}