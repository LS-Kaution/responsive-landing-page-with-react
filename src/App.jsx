import './style/SectionHome.scss'
import './style/SectionCharacter.scss'
import './style/SectionNews.scss'
import './style/SectionPlaygame.scss'
import './style/Footer.scss'
import Header from './components/Header'
import SectionHomeCard from './components/SectionHomeCard'
import ManualCarousel from './components/ManualCarousel'
import ArrowLeftSvg from './components/svg/ArrowLeftSvg'
import ArrowRigthSvg from './components/svg/ArrowRigthSvg'
import CardCharacter from './components/CardCharacter'
import News from './components/News'
import TwitterSvg from './components/svg/TwitterSvg'
import DiscordSvg from './components/svg/DiscordSvg'
import YoutubeSvg from './components/svg/YoutubeSvg'
import TwitchSvg from './components/svg/TwitchSvg'

export default function App() {
  const slides = [
    {
      title: 'Slide 1',
      imgmen: '/characters/human-men.png',
      imggirl: '/characters/human-girl.png',
      description: 'Descripción del Slide 1',
    },
    {
      title: 'Slide 2',
      imgmen: '/characters/elf-men.png',
      imggirl: '/characters/elf-girl.png',
      description: 'Descripción del Slide 2',
    },
    {
      title: 'Slide 3',
      imgmen: '/characters/orc-men.png',
      imggirl: '/characters/orc-girl.png',
      description: 'Descripción del Slide 3',
    },
    {
      title: 'Slide 4',
      imgmen: '/characters/deserter-men.png',
      imggirl: '/characters/deserter-girl.png',
      description: 'Descripción del Slide 4',
    },
  ];

  return (
    <>
      <Header />
      <main>
        <section className='section home'>
          <div className='container mother'>
            <h1>Hunters is an open world mmorpg videogame</h1>
            <figure>
              <SectionHomeCard className='container child-1' src='/img-home-1.png' alt='Deserters, be careful' description='Protect yourself from deserters' />
              <SectionHomeCard className='container child-2' src='/img-home-2.png' alt='Hunters, choice your future' description='Make friends, belong to a guild and survive' />
            </figure>
            <SectionHomeCard className='container child-3' description='Your actions have consequences and results. Depending on your class, you will have advantages or disadvantages. Take into account that in this world there is real estate, mounts (tameable creatures that are used as means of transportation), a banking system, professions and an endless commerce.' />
          </div>
        </section>
        <section className='section game'>
          <ManualCarousel slides={slides} />
        </section>
        {/*          <section className='section-news'>
          <News link='/news-1.png' title='New Maps: These 3 new maps full of adventure will make your days have to be well managed.' />
          <News link='./src/resources/news-2.png' title='New potion: Incorporated to all Lotus taverns.' />
            <News link='./src/resources/news-3.gif' title='New dungeon: In Hitom, discover it.' />
  <News link='./src/resources/news-4.jpg' title='Secret Missions: In the castles of the Viceroyalty of Lotus.' />
        </section>
        <section className='section-playgame'>
          <div id='container-playnow'>
            <div>
              <img src="/shield-playgame.png" />
              <h2>PLAY NOW</h2>
            </div>
          </div>
          <div id='container-protect'>
            <h3>Only you PROTECT the kingdom of Lotus</h3>
          </div>
        </section>
        <footer>
          <div id='div-social'>
            <span>Follow us on social networks</span>
            <TwitterSvg />
            <DiscordSvg />
            <YoutubeSvg />
            <TwitchSvg />
          </div>
          <img src="/footer-prevention.png" />
          <div id='div-span'>
            <span>© 2023 Lotus. All rights reserved.</span>
            <span><a href="">Privacy Policy</a></span>
          </div>
            </footer>*/}
      </main>
    </>
  )
}