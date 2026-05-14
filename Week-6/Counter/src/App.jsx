import { useContext } from 'react'
import { counterContextObj } from './contexts/ContextProvider.jsx'

const PANELS = [' A', ' B', ' C', ' D']

function CounterPanel({ label }) {
  const { counter, increment, decrement, reset } = useContext(counterContextObj)

  return (
    <div className="panel">
      <span className="panel-label">{label}</span>
      <div className={`count-display ${counter > 0 ? 'positive' : counter < 0 ? 'negative' : ''}`}>
        {counter}
      </div>
      <div className="btn-row">
        <button className="btn dec" onClick={decrement} aria-label="Decrement">−</button>
        <button className="btn rst" onClick={reset} aria-label="Reset" title="Reset">↺</button>
        <button className="btn inc" onClick={increment} aria-label="Increment">+</button>
      </div>
    </div>
  )
}

function App() {
  const { reset, addTen, subTen, counter } = useContext(counterContextObj)

  return (
    <div className="app-root">
      <header className="app-header">
        <h1 className="app-title">Counter</h1>
        
      </header>

      <div className="panels-grid">
        {PANELS.map(label => (
          <CounterPanel key={label} label={label} />
        ))}
      </div>

      <footer className="app-footer">
        <button className="global-btn" onClick={() => subTen()}>− 10</button>
        <button className="global-btn reset" onClick={reset}>Reset all</button>
        <button className="global-btn" onClick={() => addTen()}>+ 10</button>
      </footer>

      
    </div>
  )
}

export default App
