import { useState } from 'react'

function randomHex(): string {
  return '#' + Math.floor(Math.random() * 0xFFFFFF).toString(16).padStart(6, '0')
}

function App() {
  const [colour, setColour] = useState(randomHex)

  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-8 bg-gray-950 text-white">
      {/* Colour preview area */}
      <div
        className="w-72 h-72 rounded-2xl shadow-lg transition-colors duration-300"
        style={{ backgroundColor: colour }}
      />

      <p className="text-4xl font-mono font-bold tracking-wider">{colour}</p>

      <button
        onClick={() => setColour(randomHex())}
        className="px-6 py-3 rounded-lg text-lg font-semibold bg-amber-500 hover:bg-amber-400 active:bg-amber-600 text-gray-950 transition-colors cursor-pointer"
      >
        Generate Colour
      </button>
    </div>
  )
}

export default App
