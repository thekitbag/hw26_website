import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import Analytics from './components/Analytics'
import PrivacyBanner from './components/PrivacyBanner'

function App() {
  return (
    <>
      <Analytics />
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
      <PrivacyBanner />
    </>
  )
}

export default App
