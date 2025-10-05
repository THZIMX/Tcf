import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Wind, AlertTriangle, Heart, Leaf, TrendingUp, Users, MapPin } from 'lucide-react'
import Footer from "@/components/Footer"

const HomePage = ({ onPageChange }) => {
  const highlights = [
    {
      icon: <AlertTriangle className="h-8 w-8 text-red-500" />,
      title: "Problema Global",
      description: "A poluição do ar afeta bilhões de pessoas em todo o mundo, causando milhões de mortes prematuras anualmente."
    },
    {
      icon: <Heart className="h-8 w-8 text-pink-500" />,
      title: "Impacto na Saúde",
      description: "Doenças respiratórias, cardiovasculares e neurológicas estão diretamente ligadas à qualidade do ar que respiramos."
    },
    {
      icon: <Leaf className="h-8 w-8 text-green-500" />,
      title: "Soluções Sustentáveis",
      description: "Existem alternativas viáveis para reduzir a poluição, desde energias renováveis até mudanças de hábitos."
    }
  ]

  const quickStats = [
  { label: "Mortes anuais por poluição do ar (global)", value: "8,1 milhões", color: "text-red-600" },
  { label: "População exposta a níveis acima do recomendável", value: "99%", color: "text-orange-600" },
  { label: "Redução necessária de emissões (meta grosso modo)", value: "≈ 45%", color: "text-blue-600" },
  { label: "Recife: AQI atual (estimado)", value: "28", color: "text-purple-600" },
  { label: "Camaragibe: AQI atual (estimado)", value: "67", color: "text-pink-600" }
]


  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-r from-blue-600 to-green-600 text-white">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <Wind className="h-16 w-16 mx-auto mb-6 text-white" />
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Poluição do Ar
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Um problema global que afeta nossa saúde, meio ambiente e futuro. 
              Conheça as causas, consequências e soluções para um ar mais limpo.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                variant="secondary"
                onClick={() => onPageChange('about')}
                className="text-lg px-8 py-3"
              >
                Saiba Mais
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                onClick={() => onPageChange('data')}
                className="text-lg px-8 py-3 bg-white/10 border-white text-white hover:bg-white hover:text-gray-900"
              >
                Ver Dados
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 mb-16">
          {quickStats.map((stat, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className={`text-3xl font-bold ${stat.color} mb-2`}>
                  {stat.value}
                </div>
                <p className="text-gray-600">{stat.label}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Highlights */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
            Por que este tema é importante?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {highlights.map((highlight, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex justify-center mb-4">
                    {highlight.icon}
                  </div>
                  <CardTitle className="text-xl">{highlight.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {highlight.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Navigation Cards */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
            Explore nosso site
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="cursor-pointer hover:shadow-lg transition-shadow" onClick={() => onPageChange('causes')}>
              <CardHeader className="text-center">
                <AlertTriangle className="h-12 w-12 mx-auto text-red-500 mb-4" />
                <CardTitle>Causas e Consequências</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Descubra o que causa a poluição do ar e seus impactos na saúde e meio ambiente.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="cursor-pointer hover:shadow-lg transition-shadow" onClick={() => onPageChange('solutions')}>
              <CardHeader className="text-center">
                <Leaf className="h-12 w-12 mx-auto text-green-500 mb-4" />
                <CardTitle>Soluções</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Conheça as medidas e ações que podem ajudar a reduzir a poluição do ar.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="cursor-pointer hover:shadow-lg transition-shadow" onClick={() => onPageChange('data')}>
              <CardHeader className="text-center">
                <TrendingUp className="h-12 w-12 mx-auto text-blue-500 mb-4" />
                <CardTitle>Dados e Gráficos</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Visualize dados reais sobre a qualidade do ar no Brasil e no mundo.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="cursor-pointer hover:shadow-lg transition-shadow" onClick={() => onPageChange('team')}>
              <CardHeader className="text-center">
                <Users className="h-12 w-12 mx-auto text-purple-500 mb-4" />
                <CardTitle>Nossa Equipe</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Conheça os participantes responsáveis por este projeto.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center bg-gradient-to-r from-blue-600 to-green-600 text-white rounded-lg p-12 mb-12">
          <h2 className="text-3xl font-bold mb-4">
            Teste seus conhecimentos!
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Faça nosso quiz interativo e descubra o quanto você sabe sobre poluição do ar.
          </p>
          <Button 
            size="lg" 
            variant="secondary"
            onClick={() => onPageChange('quiz')}
            className="text-lg px-8 py-3"
          >
            Fazer Quiz
          </Button>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  )
}

export default HomePage
