import '../style/LoginPage.scss'
import NickPass from '../components/LoginContainerOne'
import RememberRegister from '../components/LoginContainerTwo'

export default function LoginPage() {
    return (
        <section>
            <form action="#">
                <h2>Login</h2>
                <NickPass type='text' title='Nickname' icon={<ion-icon name="person-circle"></ion-icon>} />
                <NickPass type='password' title='Password' icon={<ion-icon name="lock-closed"></ion-icon>} />
                <RememberRegister id='remember-forgot' title='Remember me' ancor='Forgot Password?' />
                <button type='submit'>Sign In</button>
                <RememberRegister id='login-register' title="Don't have an account?" ancor='Sign Up' />
            </form>
        </section>
    )
}