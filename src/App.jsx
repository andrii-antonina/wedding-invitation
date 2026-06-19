import { useState } from 'react'
import Splash from './components/Splash.jsx'
import Hero from './components/Hero.jsx'
import WeddingDate from './components/WeddingDate.jsx'
import SaveTheDate from './components/SaveTheDate.jsx'
import Location from './components/Location.jsx'
import Schedule from './components/Schedule.jsx'
import Details from './components/Details.jsx'
import DressCode from './components/DressCode.jsx'
import MapLocation from './components/MapLocation.jsx'
import RSVP from './components/RSVP.jsx'
import Countdown from './components/Countdown.jsx'

function App() {
  const [opened, setOpened] = useState(false)
  //
  // if (!opened) {
  //   return <Splash onOpen={() => setOpened(true)} />
  // }

  return (
    <>
      <Hero />
      {/*<WeddingDate />*/}
      {/*<MapLocation />*/}
      {/*<SaveTheDate />*/}
      <Location />
      <Schedule />
      <Details />
      <DressCode />
      <RSVP />
      <Countdown />
    </>
  )
}

export default App
