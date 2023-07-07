import './style/PrincipalHeader.scss'
import './style/SectionHome.scss'
import './style/SectionGame.scss'
import './style/SectionMedia.scss'
import './style/SectionPlaygame.scss'
import './style/Footer.scss'
import PrincipalHeader from './components/PrincipalHeader'
import ManualCarousel from './components/ManualCarousel'
import AutomaticCarousel from './components/AutomaticCarousel'
import TwitterSvg from './components/svg/TwitterSvg'
import DiscordSvg from './components/svg/DiscordSvg'
import YoutubeSvg from './components/svg/YoutubeSvg'
import TwitchSvg from './components/svg/TwitchSvg'

export default function App() {
  return (
    <>
      <PrincipalHeader />
      <main>
        <section className='section home'>
          <div className='container-mother'>
            <figure>
              <img id='app-store' src="/home/app-store.webp" alt="Available on the App Store" />
              <img id='epic-games' src="/home/epic-games.webp" alt="Available in Epic Games" />
              <img id='steam' src="/home/steam.webp" alt="Available in Steam" />
              <img id='play-store' src="/home/play-store.webp" alt="Available on the Play Store" />
            </figure>
            <h1>HUNTERS</h1>
          </div>
        </section>
        <section className='section game'>
          <ManualCarousel />
        </section>
        <section className='section media'>
          <AutomaticCarousel />
        </section>
        <section className='section-playgame'>
          <div id='container-playnow'>
            <div>
              <img src="/playgame/shield-playgame.webp" alt='Play now' />
              <h2>PLAY NOW</h2>
            </div>
          </div>
          <div id='container-protect'>
            <h3>Only you PROTECT the kingdom</h3>
          </div>
        </section>
        <footer>
          <div id='div-social'>
            <span>Follow us on social networks</span>
            <div id='div-networks'>
              <TwitterSvg />
              <DiscordSvg />
              <YoutubeSvg />
              <TwitchSvg />
            </div>
          </div>
          <img src="/footer/footer-prevention.webp" alt='Legal prevention' />
          <div id='div-span'>
            <span>© 2023 Hunters. All rights reserved.</span>
            <span><a href="https://twitter.com/home" target='_blank'>Privacy Policy</a></span>
          </div>
        </footer>
      </main>
    </>
  )
}