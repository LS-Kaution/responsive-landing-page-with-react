import '../style/PasswordRecovery.scss'
import Header from "../components/Header";
import InputOne from "../components/InputOne";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function PasswordRecovery() {
    let navigate = useNavigate()
    const [recovery, setRecovery] = useState('')
    const [loginerror, setError] = useState(false)

    function preventDefault(e) {
        e.preventDefault()
        if (recovery === '') {
            setError(true)
            return
        }
        navigate('/login')
        alert('Check your email to recover your password')
    }

    return (
        <>
            <section id='section-forgot-password'>
                <Header />
                <form onSubmit={preventDefault}>
                    <h1>Password recovery</h1>
                    <p id='subtitle'>The one that you use to sign in with.</p>
                    <InputOne type='email' value={recovery} data={e => setRecovery(e.target.value)} title='Enter your email' icon={<ion-icon name="mail"></ion-icon>} />
                    <button id='button-submit'>Submit</button>
                    <div>
                        <span id='icon-return'><ion-icon name="arrow-undo"></ion-icon></span>
                        <Link to='/login'><button id='button-return'>Back to Login</button></Link>
                    </div>
                    {loginerror && <p id='required'>*** Email address is required ***</p>}
                </form>
            </section>
        </>
    )
}