import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Menu, X, Wind } from 'lucide-react'

const Navigation = ({ currentPage, onPageChange }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const pages = [
    { id: 'home', label: 'Início' },
    { id: 'about', label: 'O que é?' },
    { id: 'causes', label: 'Causas e Consequências' },
    { id: 'solutions', label: 'Soluções' },
    { id: 'data', label: 'Dados e Gráficos' },
    { id: 'team', label: 'Nossa Equipe' },
    { id: 'news', label: 'Notícias' },
    { id: 'quiz', label: 'Quiz' }
  ]

  const handlePageChange = (pageId) => {
    onPageChange(pageId)
    setIsMenuOpen(false)
  }

  return (
    <nav className="bg-white shadow-lg border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <Wind className="h-8 w-8 text-blue-600" />
            <span className="text-xl font-bold text-gray-900">TCF - Poluição do Ar</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-1">
            {pages.map((page) => (
              <Button
                key={page.id}
                variant={currentPage === page.id ? "default" : "ghost"}
                onClick={() => handlePageChange(page.id)}
                className="text-sm"
              >
                {page.label}
              </Button>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden pb-4">
            <div className="flex flex-col space-y-2">
              {pages.map((page) => (
                <Button
                  key={page.id}
                  variant={currentPage === page.id ? "default" : "ghost"}
                  onClick={() => handlePageChange(page.id)}
                  className="justify-start"
                >
                  {page.label}
                </Button>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navigation
