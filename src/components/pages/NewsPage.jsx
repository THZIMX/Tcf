import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Newspaper } from 'lucide-react'

const NewsPage = () => {
  const newsArticles = [
    {
      title: 'Qualidade do ar no Brasil: desafios e avanços',
      date: '25 de Setembro de 2025',
      summary: 'Análise sobre a situação atual da qualidade do ar nas principais cidades brasileiras e as iniciativas para melhorá-la.',
      link: '#'
    },
    {
      title: 'Novas tecnologias para monitoramento da poluição',
      date: '10 de Setembro de 2025',
      summary: 'Exploração de inovações em sensores e sistemas de alerta precoce para poluentes atmosféricos.',
      link: '#'
    },
    {
      title: 'O impacto da poluição do ar na saúde infantil',
      date: '01 de Agosto de 2025',
      summary: 'Estudo recente revela os efeitos da má qualidade do ar no desenvolvimento respiratório e cognitivo de crianças.',
      link: '#'
    },
    {
      title: 'Energias renováveis: a chave para um futuro mais limpo',
      date: '15 de Julho de 2025',
      summary: 'Como a transição energética pode combater a poluição do ar e mitigar as mudanças climáticas.',
      link: '#'
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <Newspaper className="h-16 w-16 mx-auto text-blue-600 mb-6" />
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Notícias sobre Poluição do Ar
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Mantenha-se atualizado com as últimas notícias e desenvolvimentos sobre a qualidade do ar e o meio ambiente.
          </p>
        </div>

        {/* News Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newsArticles.map((article, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-xl">{article.title}</CardTitle>
                <p className="text-sm text-gray-500">{article.date}</p>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-4">{article.summary}</p>
                <a href={article.link} className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">
                  Leia Mais
                </a>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <Card className="mt-12 bg-gradient-to-r from-blue-600 to-green-600 text-white">
          <CardHeader>
            <CardTitle className="text-2xl text-center">Quer mais informações?</CardTitle>
          </CardHeader>
          <CardContent className="text-center">
            <p className="text-lg mb-4">
              Explore nossos dados e gráficos para uma análise mais aprofundada sobre a poluição do ar.
            </p>
            <a href="#" className="inline-block bg-white text-blue-600 font-semibold py-2 px-6 rounded-lg hover:bg-gray-100 transition-colors">
              Ver Dados e Gráficos
            </a>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export default NewsPage
