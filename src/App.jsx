import React, { useState } from 'react'
import Navbar from './components/Navbar'
import Tab1 from './pages/Tab1'
import Tab2 from './pages/Tab2'
import Tab3 from './pages/Tab3'
import Tab4 from './pages/Tab4'
import styled from 'styled-components'

function App() {
  const [activeTab, setActiveTab] = useState(1)
  return (
    <>
    <Navbar activeTab={activeTab} setActiveTab={setActiveTab}/>
    <AppStyled>

    {activeTab===1 && <Tab1/>}
    {activeTab===2 && <Tab2/>}
    {activeTab===3 && <Tab3/>}
    {activeTab===4 && <Tab4/>}
    </AppStyled>
    </>
  )
}

export default App


const AppStyled=styled.main`
display: flex;
height: 100vh;
align-items: center;
justify-content: center;
  
`