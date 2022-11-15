import { createSignal } from 'solid-js'
import { render } from 'solid-js/web'
import './style.css'

const App = () => {
  const [counter, setCounter] = createSignal(0)

  return (
    <div>
      <a href="https://vitejs.dev" target="_blank">
        <img src="/vite.svg" class="logo" alt="Vite logo" />
      </a>
      <a href="https://www.solidjs.com/" target="_blank">
        <img src="/solid.svg" class="logo" alt="Solid logo" />
      </a>
      <h1>Vite + Solid</h1>
      <div class="card">
        <button onClick={(e) => {
          e.preventDefault();
          setCounter(counter() + 1)
        }}>count is {counter()}</button>
      </div>
      <p class="read-the-docs">
        Click on the Vite and Solid logos to learn more
      </p>
    </div>
  )
}

render(() => <App />, document.getElementById('app') as HTMLElement)
