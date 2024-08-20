export const image = "https://i.imgur.com/yXOvdOSs.jpg"
const title = "Hedy Lamarr"


function App() {
  return (
    <div>
      <h1>Hedy Lamarr's Todos</h1>
      <img
        src={image}
        alt={title}
        className="photo"
      />
      <ul>
        <li>Invent new traffic lights</li>
        <li>Rehearse a movie scene</li>
        <li>Improve the spectrum technology</li>
      </ul>
    </div>
  );
}

export default App;
