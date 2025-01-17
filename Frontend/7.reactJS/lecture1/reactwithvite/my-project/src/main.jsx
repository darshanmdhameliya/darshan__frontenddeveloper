import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'


function Darshan() {
  return (
    <div>
      <h1>custom app!</h1>
    </div>
  )
}

const anotherElement = (
  <a href="https://google.com" target='_blank'>visit google</a>
)

const ReactElement = React.createElement(
  'a',
  { href: 'https://google.com', target: '_blank' },
  'click me to visit google'
)


ReactDOM.createRoot(document.getElementById('root')).render(
  <App/>
)