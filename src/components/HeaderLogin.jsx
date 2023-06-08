import HeaderButton from './HeaderButton'

export default function HeaderLogin() {
    return (
        <header id='header-login'>
            <figure>
                <img src="/img-logo.png" alt="logo of header" />
            </figure>
            <nav>
                <HeaderButton link='/' name="Home" />
                <HeaderButton name="Game" />
                <HeaderButton name="Media" />
                <HeaderButton name="Download" />
                <HeaderButton link='/login' name="Login" />
            </nav>
        </header>
    )
}