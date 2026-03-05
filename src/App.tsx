import { useState } from 'react'

function randomHex(): string {
  return '#' + Math.floor(Math.random() * 0xFFFFFF).toString(16).padStart(6, '0')
}

function App() {
  const [colour, setColour] = useState(randomHex)
  const [history, setHistory] = useState<string[]>([])

  const generate = () => {
    // Push the current colour into history, keeping only the last 5
    setHistory((prev) => [colour, ...prev].slice(0, 5))
    setColour(randomHex())
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-8 bg-gray-950 text-white">
      {/* Colour preview area */}
      <div
        className="w-72 h-72 rounded-2xl shadow-lg transition-colors duration-300"
        style={{ backgroundColor: colour }}
      />

      <p className="text-4xl font-mono font-bold tracking-wider">{colour}</p>

      <button
        onClick={generate}
        className="px-6 py-3 rounded-lg text-lg font-semibold bg-amber-500 hover:bg-amber-400 active:bg-amber-600 text-gray-950 transition-colors cursor-pointer"
      >
        Generate Colour
      </button>

      {history.length > 0 && (
        <div className="flex gap-3">
          {history.map((hex) => (
            <button
              key={hex}
              onClick={() => setColour(hex)}
              title={hex}
              className="w-10 h-10 rounded-full border-2 border-white/20 hover:border-white hover:scale-110 transition-all cursor-pointer"
              style={{ backgroundColor: hex }}
            />
          ))}
        </div>
      )}
    </div>
  )
}

export default App
