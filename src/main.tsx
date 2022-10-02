import { createSignal } from 'solid-js'
import { render } from 'solid-js/web'
import './style.css'
import typescriptLogo from './typescript.svg'

const App = () => {
  const [counter, setCounter] = createSignal(0)

  return (
    <div>
      <a href="https://vitejs.dev" target="_blank">
        <img src="/vite.svg" class="logo" alt="Vite logo" />
      </a>
      <a href="https://www.typescriptlang.org/" target="_blank">
        <img src={`${typescriptLogo}`} class="logo vanilla" alt="TypeScript logo" />
      </a>
      <h1>Vite + TypeScript</h1>
      <div class="card">
        <button onClick={(e) => {
          e.preventDefault();
          setCounter(counter() + 1)
        }}>count is {counter()}</button>
      </div>
      <p class="read-the-docs">
        Click on the Vite and TypeScript logos to learn more
      </p>
    </div>
  )
}

render(() => <App />, document.getElementById('app') as HTMLElement)
