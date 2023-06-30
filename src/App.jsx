import './style/Header.scss'
import './style/SectionHome.scss'
import './style/SectionGame.scss'
import './style/SectionMedia.scss'
import './style/SectionPlaygame.scss'
import './style/Footer.scss'
import Header from './components/Header'
import SectionHomeCard from './components/SectionHomeCard'
import ManualCarousel from './components/ManualCarousel'
import AutomaticCarousel from './components/AutomaticCarousel'
import TwitterSvg from './components/svg/TwitterSvg'
import DiscordSvg from './components/svg/DiscordSvg'
import YoutubeSvg from './components/svg/YoutubeSvg'
import TwitchSvg from './components/svg/TwitchSvg'

export default function App() {
  return (
    <>
      <Header />
      <main>
        <section className='section home'>
          <div className='container mother'>
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
              <img src="/shield-playgame.png" />
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
          <img src="/footer-prevention.png" />
          <div id='div-span'>
            <span>© 2023 Hunters. All rights reserved.</span>
            <span><a href="">Privacy Policy</a></span>
          </div>
        </footer>
      </main>
    </>
  )
}