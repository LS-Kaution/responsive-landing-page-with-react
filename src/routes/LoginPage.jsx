import '../style/LoginPage.scss'
import '../style/HeaderLogin.scss'
import HeaderLogin from '../components/HeaderLogin'
import InputOne from '../components/InputOne'
import InputTwo from '../components/InputTwo'

export default function LoginPage() {
    return (
        <section>
            <HeaderLogin />
            <form action="#">
                <h2>Login</h2>
                <InputOne type='text' title='Nickname' icon={<ion-icon name="person-circle"></ion-icon>} />
                <InputOne type='password' title='Password' icon={<ion-icon name="lock-closed"></ion-icon>} />
                <InputTwo id='remember-forgot' title='Remember me' ancor='Forgot Password?' />
                <button type='submit'>Sign In</button>
                <InputTwo id='login-register' title="Don't have an account?" link='/registration' ancor='Sign Up' />
            </form>
        </section>
    )
}