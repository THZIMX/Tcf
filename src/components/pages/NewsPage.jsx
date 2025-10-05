import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Newspaper } from 'lucide-react'
import Footer from "@/components/Footer";

const NewsPage = () => {
  const newsArticles = [
    {
      title: 'Porto Velho lidera ranking das cidades mais poluídas do Brasil',
      date: '2 de Maio de 2025',
      summary: 'Porto Velho, Rondônia, registrou a maior média anual de poluição do ar em 2024, com 29,5 µg/m³, quase seis vezes acima do limite recomendado pela OMS.',
      link: 'https://www.otempo.com.br/tempo/2025/5/2/ar-mais-poluido-do-brasil-em-2025-lista-inclui-porto-velho-osasco-e-rio-branco'
    },
    {
      title: 'São Paulo entre as 10 cidades mais limpas do mundo',
      date: '26 de Setembro de 2025',
      summary: 'Apesar da boa qualidade do ar em 26 de setembro, a concentração média de PM2,5 em 2024 foi de 15,9 µg/m³, indicando um nível "moderado" de poluição.',
      link: 'https://www.iqair.com/br/newsroom/sao-paulo-among-top-10-cleanest-cities-in-the-world-9-26-2025'
    },
    {
      title: 'Poluição do ar pode ter causado morte de crianças na Zona Oeste do Rio',
      date: '3 de Agosto de 2025',
      summary: 'Estudo concluiu que a poluição do ar pode ter contribuído para a morte de 8,5% das crianças de até 5 anos na Zona Oeste do Rio de Janeiro.',
      link: 'https://agenciabrasil.ebc.com.br/saude/noticia/2025-08/poluicao-do-ar-pode-ter-causado-morte-de-criancas-na-zona-oeste-do-rio'
    },
    {
      title: 'Brasil se compromete a reduzir emissões até 67% para 2035',
      date: '28 de Novembro de 2024',
      summary: 'Brasil revelou seu plano climático na COP29, comprometendo-se a reduzir suas emissões entre 59% e 67% em relação aos níveis de 2005 até 2035.',
      link: 'https://elpais.com/america-futura/2024/11/28/brasil-revela-su-plan-climatico-se-compromete-a-reducir-emisiones-hasta-un-67-para-2035.html'
    }
  ];

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

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default NewsPage;
