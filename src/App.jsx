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
import Footer from './components/Countdown.jsx'
import SplashScreen from "./components/SplashScreen.jsx";

function App() {
  const [opened, setOpened] = useState(false)

  return (
    <>
      {!opened && <Splash onOpen={() => setOpened(true)} />}
        {/*{!opened && <SplashScreen onDismiss={() => setOpened(true)} />}*/}
      <Hero />
      {/*<WeddingDate />*/}
      {/*<MapLocation />*/}
      {/*<SaveTheDate />*/}
      <Location />
      <Schedule />
      <Details />
      <DressCode />
      <RSVP />
      <Footer />
    </>
  )
}

export default App
