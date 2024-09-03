import React, { useState } from 'react'
import Navbar from './components/Navbar'
import Tab1 from './pages/Tab1'
import Tab2 from './pages/Tab2'
import Tab3 from './pages/Tab3'
import Tab4 from './pages/Tab4'

function App() {
  const [activeTab, setActiveTab] = useState(1)
  return (
    <>
    <Navbar activeTab={activeTab} setActiveTab={setActiveTab}/>
    {activeTab===1 && <Tab1/>}
    {activeTab===2 && <Tab2/>}
    {activeTab===3 && <Tab3/>}
    {activeTab===4 && <Tab4/>}
    </>
  )
}

export default App