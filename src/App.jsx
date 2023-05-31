import './style/Header.scss'
import './style/SectionCharacter.scss'
import './style/SectionNews.scss'
import './style/SectionPlaygame.scss'
import './style/Footer.scss'
import HeaderButton from './components/HeaderButton'
import ArrowSvg from './components/svg/ArrowSvg'
import CardCharacter from './components/CardCharacter'
import News from './components/News'
import TwitterSvg from './components/svg/TwitterSvg'
import DiscordSvg from './components/svg/DiscordSvg'
import YoutubeSvg from './components/svg/YoutubeSvg'
import TwitchSvg from './components/svg/TwitchSvg'

export default function App() {
  return (
    <>
      <header>
        <figure>
          <img src="./src/resources/logo.png" alt="logo header" />
        </figure>
        <article>
          <HeaderButton name="Home" />
          <HeaderButton name="Game" />
          <HeaderButton name="Media" />
          <HeaderButton name="Download" />
          <HeaderButton name="Login" />
        </article>
      </header>
      <main>
        <section className='section-character'>
          <ArrowSvg className="arrow-left" />
          <div>
            <h2 id='title-section-characters'>New characters</h2>
            <CardCharacter link='./src/resources/character-1.png' title='Pondrea' />
          </div>
          <ArrowSvg className="arrow-right" />
        </section>
        <section className='section-news'>
          <News link='./src/resources/news-1.png' title='New Maps: These 3 new maps full of adventure will make your days have to be well managed.' />
        </section>
        <section className='section-playgame'>
          <h2>Only you PROTECT the kingdom of Lotus</h2>
        </section>
        <footer>
          <div id='div-social'>
            <span>Follow us on social networks</span>
            <TwitterSvg />
            <DiscordSvg />
            <YoutubeSvg />
            <TwitchSvg />
          </div>
          <img src="./src/resources/footer-prevention.png" />
          <div id='div-span'>
            <span>© 2023 Lotus. All rights reserved.</span>
            <span><a href="">Privacy Policy</a></span>
          </div>
        </footer>
      </main>
    </>
  )
}