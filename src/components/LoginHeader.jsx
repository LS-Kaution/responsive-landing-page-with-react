import HeaderButton from './HeaderButton'
import { useState } from 'react'

export default function LoginHeader() {
    const [displaynone, setDisplayNone] = useState(false)

    function displayActive() {
        setDisplayNone(displaynone => !displaynone)
    }

    let toggle = displaynone ? '-active' : '';

    return (
        <header id='login-header'>
            <figure>
                <img src="/header/img-logo.webp" alt="logo of header" />
            </figure>
            <nav className={`check${toggle}`}>
                <HeaderButton link='/' name="Home" />
                <HeaderButton name="Game" />
                <HeaderButton name="Media" />
                <HeaderButton name="Download" />
                <HeaderButton link='/login' name="Login" />
            </nav>
            <span id='span' onClick={displayActive}><ion-icon name="menu"></ion-icon></span>
        </header>
    )
}