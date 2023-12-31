import Home from './pages/Home/Home'
import CardDetail from './pages/CardDetail/CardDetail'
import { Route, Routes } from 'react-router-dom'
import CardBoxBtn from './components/CardBoxBtn'
import CardBox from './pages/CardBox/CardBox'
import CardSearch from './pages/CardSearch/CardSearch'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import DuplicatePopup from './components/Popup/DuplicatePopup'
import FullPopup from './components/Popup/FullPopup'
import NotFound from './pages/NotFound/NotFound'
import { useState } from 'react'
function App() {
  const [color, setColor] = useState(false)
  return (
    <>
      <DuplicatePopup />
      <FullPopup />
      <Header color={color} />
      <CardBoxBtn />
      <Routes>
        <Route path="/" element={<Home setColor={setColor} />} />
        <Route path="/cardSearch" element={<CardSearch />} />
        <Route path="/cardBox" element={<CardBox />} />
        <Route path="/cardDetail/:id" element={<CardDetail />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
