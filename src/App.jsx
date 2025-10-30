import { useState } from 'react'
import ComingSoon from './components/ComingSoon.jsx'
import FloatingShapes from './components/FloatingShapes.jsx'
import Header from './components/Header.jsx'
import ContactInfoModal from './components/ContactInfoModal.jsx'

function App() {
  const [open, setOpen] = useState(false)

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <Header title="Think Hub Tutors" />
      {/* Floating shapes */}
      <FloatingShapes />

      <ComingSoon onContactClick={() => setOpen(true)} />
      <ContactInfoModal open={open} onClose={() => setOpen(false)} />
    </div>
  )
}

export default App
