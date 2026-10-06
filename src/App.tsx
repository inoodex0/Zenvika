import { useEffect } from 'react'
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom'
import Layout from './components/layout/Layout'
import HomePage from './pages/HomePage'
import PricingPage from './pages/PricingPage'
import ContactPage from './pages/ContactPage'
import FeaturesGalleryPage from './pages/features'
import TestimonialsPage from './pages/TestimonialsPage'
import OpenStorePage from './pages/OpenStorePage'
import SolutionPage from './pages/SolutionPage'
import InfoPage from './pages/InfoPage'
import NotFoundPage from './pages/NotFoundPage'
import { infoPages } from './data/pages'

function ScrollManager() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (hash) {
      try {
        const target = document.querySelector(hash)
        if (target) {
          target.scrollIntoView({ behavior: 'smooth' })
          return
        }
      } catch {
        // invalid selector — fall through to top
      }
    }
    window.scrollTo({ top: 0 })
  }, [pathname, hash])

  return null
}

function App() {
  return (
    <BrowserRouter>
      <ScrollManager />
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/pricing" element={<PricingPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/features" element={<FeaturesGalleryPage />} />
          <Route path="/demo" element={<FeaturesGalleryPage />} />
          <Route path="/testimonials" element={<TestimonialsPage />} />
          <Route path="/open-store" element={<OpenStorePage />} />
          <Route path="/solutions/:slug" element={<SolutionPage />} />
          
          {infoPages.map((page) => (
            <Route
              key={page.path}
              path={page.path}
              element={<InfoPage page={page} />}
            />
          ))}
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}

export default App
