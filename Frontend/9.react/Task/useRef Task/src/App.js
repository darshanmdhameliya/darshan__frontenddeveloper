import React from 'react'
import './index.css'
import Focus_on_text from './Componets/Focus_on_text'
import Scrolling_an_image_into_view from './Componets/Scrolling_an_image_into_view'
import Playing_and_pausing_a_video from './Componets/Playing_and_pausing_a_video'
import Exposing_a_re_to_your_own_component11111 from './Componets/Exposing_a_ref_to_your_own_component11111'
import Click_counter from './Componets/Click_counter'
import A_stopwatch from './Componets/A_stopwatch'

const App = () => {
  return (
    <div >
      <Focus_on_text />
      <Scrolling_an_image_into_view />
      <Playing_and_pausing_a_video />
      <Exposing_a_re_to_your_own_component11111 />
      <Click_counter />
      <A_stopwatch />
    </div>
  )
}

export default App
