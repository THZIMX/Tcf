import { useState } from 'react'
import Navigation from './components/Navigation'
import HomePage from './components/pages/HomePage'
import AboutPage from './components/pages/AboutPage'
import CausesPage from './components/pages/CausesPage'
import DataPage from './components/pages/DataPage'
import SolutionsPage from './components/pages/SolutionsPage'
import TeamPage from './components/pages/TeamPage'
import NewsPage from './components/pages/NewsPage'
import QuizPage from './components/pages/QuizPage'
import EnergiasPage from './components/pages/EnergiasPage'

import './App.css'

function App() {
  const [currentPage, setCurrentPage] = useState('home')

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage onPageChange={setCurrentPage} />
      case 'about':
        return <AboutPage />
      case 'causes':
        return <CausesPage />
      case 'solutions':
        return <SolutionsPage />
      case 'data':
        return <DataPage />
      case 'team':
        return <TeamPage />
      case 'news':
        return <NewsPage />
      case 'quiz':
        return <QuizPage />
      case 'energias':
        return <EnergiasPage />
      default:
        return <HomePage onPageChange={setCurrentPage} />
    }
  }

  return (
    <div className="min-h-screen bg-white">
      <Navigation currentPage={currentPage} onPageChange={setCurrentPage} />
      {renderPage()}
    </div>
  )
}

export default App
