import { useState } from "react"


function App() {
  const [color, setColor] = useState("olive")

  
  return (
    <div className="w-full h-screen duration-[500ms]" style={{ backgroundColor: color }}>
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl ">
          <button
            onMouseEnter={() => setColor("red")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{ backgroundColor: "red" }}>Red</button>
          <button
            onMouseLeave={() => setColor("green")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{ backgroundColor: "green" }}>Green</button>
          <button
            onMouseMove={() => setColor("yellow")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{ backgroundColor: "yellow" }}>yellow</button>
          <button
            onMouseMoveCapture={() => setColor("pink")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{ backgroundColor: "pink" }}>pink</button>
          <button
            onMouseOut={() => setColor("aqua")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{ backgroundColor: "aqua" }}>aqua</button>
          <button
            onMouseOver={() => setColor("purple")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{ backgroundColor: "purple" }}>purple</button>
          <button
            onMouseUp={() => setColor("gray")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{ backgroundColor: "gray" }}>gray</button>
          <button
            onKeyDown={() => setColor("black")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{ backgroundColor: "black" }}>black</button>
        </div>
      </div>
    </div>
  )
}

export default App
