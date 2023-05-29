import './App.scss'
import HeaderButton from './components/HeaderButton'

export default function App() {
  return (
    <>
      <header>
        <img src="./src/resources/logo-header.png" alt="" />
        <article>
          <HeaderButton name="Home" />
          <HeaderButton name="Game" />
          <HeaderButton name="Media" />
          <HeaderButton name="Guide" />
          <HeaderButton name="Download" />
        </article>
      </header>
      <h1>Hello, world!</h1>
    </>
  )
}