import './style/Header.scss'
import './style/SectionCharacter.scss'
import HeaderButton from './components/HeaderButton'
import ArrowSvg from './components/ArrowSvg'
import CardCharacter from './components/CardCharacter'

export default function App() {
  return (
    <>
      <header>
        <figure>
          <img src="./src/resources/logo-header.png" alt="logo header" />
          <h1>LOTUS</h1>
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
            <h1>New characters</h1>
            <div>
              <CardCharacter link='./src/resources/character-1.png' title='Pondrea' description='Lorem ipsum dolor sit amet consectetur adipiscing elit, quisque venenatis iaculis aliquet auctor vehicula morbi, taciti dignissim per at lacus himenaeos. Mauris vel tristique ut nostra neque feugiat dignissim etiam class habitasse.' />
              {/*<CardCharacter link='./src/resources/character-3.png' title='Santoro' description='Lorem ipsum dolor sit amet consectetur adipiscing elit, quisque venenatis iaculis aliquet auctor vehicula morbi, taciti dignissim per at lacus himenaeos. Mauris vel tristique ut nostra neque feugiat dignissim etiam class habitasse.' />*/}
            </div>
          </div>
          <ArrowSvg className="arrow-right" />
        </section>
      </main>
    </>
  )
}