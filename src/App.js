import "./App.css"
import { ContextProvider } from "./components/context/context-meals"
import { Main } from "./components/Main.js"

function App() {
  return (
    <div className="App">
      <ContextProvider>
        <Main/>
      </ContextProvider>
    </div>
  )
}

export default App
