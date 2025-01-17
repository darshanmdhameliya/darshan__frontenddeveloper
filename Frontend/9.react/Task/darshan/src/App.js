// import './App.css'
import Layout from './Componets/Layout'
import BookContextProvider from './Context/BookContextProvider'
import './index.css'
function App() {

  return (
    <>
      <BookContextProvider>
        <Layout />
      </BookContextProvider>
    </>
  )
}

export default App