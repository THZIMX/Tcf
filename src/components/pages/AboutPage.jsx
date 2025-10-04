import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import { Wind, Factory, Car, Flame, Mountain, TreePine } from 'lucide-react'

const AboutPage = () => {
  const pollutantTypes = [
    {
      name: "Dióxido de Carbono (CO₂)",
      description: "Principal gás do efeito estufa, emitido pela queima de combustíveis fósseis.",
      color: "bg-red-100 text-red-800",
      icon: <Factory className="h-5 w-5" />
    },
    {
      name: "Monóxido de Carbono (CO)",
      description: "Gás tóxico e inodoro que se liga à hemoglobina, causando asfixia.",
      color: "bg-orange-100 text-orange-800",
      icon: <Car className="h-5 w-5" />
    },
    {
      name: "Óxidos de Enxofre (SOₓ)",
      description: "Causam chuva ácida e problemas respiratórios.",
      color: "bg-yellow-100 text-yellow-800",
      icon: <Factory className="h-5 w-5" />
    },
    {
      name: "Óxidos de Nitrogênio (NOₓ)",
      description: "Contribuem para a formação de smog e chuva ácida.",
      color: "bg-blue-100 text-blue-800",
      icon: <Car className="h-5 w-5" />
    },
    {
      name: "Material Particulado (MP)",
      description: "Partículas sólidas ou líquidas suspensas no ar, como fuligem e poeira.",
      color: "bg-gray-100 text-gray-800",
      icon: <Wind className="h-5 w-5" />
    },
    {
      name: "Clorofluorcarbonetos (CFCs)",
      description: "Destroem a camada de ozônio, atualmente proibidos na maioria dos países.",
      color: "bg-purple-100 text-purple-800",
      icon: <Wind className="h-5 w-5" />
    }
  ]

  const naturalSources = [
    {
      name: "Erupções Vulcânicas",
      description: "Liberam grandes quantidades de enxofre e cinzas na atmosfera.",
      icon: <Mountain className="h-6 w-6 text-red-500" />
    },
    {
      name: "Queimadas Naturais",
      description: "Incêndios florestais causados por raios ou combustão espontânea.",
      icon: <Flame className="h-6 w-6 text-orange-500" />
    },
    {
      name: "Decomposição Orgânica",
      description: "Matéria orgânica em decomposição libera metano e outros gases.",
      icon: <TreePine className="h-6 w-6 text-green-500" />
    },
    {
      name: "Ventos em Desertos",
      description: "Carregam poeira e partículas por grandes distâncias.",
      icon: <Wind className="h-6 w-6 text-yellow-500" />
    }
  ]

  const anthropicSources = [
    {
      name: "Transporte",
      description: "Veículos terrestres, aviões e navios queimam combustíveis fósseis.",
      icon: <Car className="h-6 w-6 text-blue-500" />
    },
    {
      name: "Indústrias",
      description: "Processos industriais e geração de energia em usinas.",
      icon: <Factory className="h-6 w-6 text-gray-500" />
    },
    {
      name: "Agropecuária",
      description: "Uso de fertilizantes e criação de gado liberam gases poluentes.",
      icon: <TreePine className="h-6 w-6 text-green-600" />
    },
    {
      name: "Queimadas Antrópicas",
      description: "Desmatamento e queima de resíduos agrícolas.",
      icon: <Flame className="h-6 w-6 text-red-600" />
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <Wind className="h-16 w-16 mx-auto text-blue-600 mb-6" />
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            O que é Poluição do Ar?
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A poluição do ar é a alteração das propriedades naturais da atmosfera 
            ocasionada pela emissão de gases, materiais particulados ou agentes biológicos.
          </p>
        </div>

        {/* Definition Card */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle className="text-2xl">Definição</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-lg text-gray-700">
              A <strong>poluição do ar ou poluição atmosférica</strong> é a degradação da qualidade 
              do ar em suspensão ocasionada pela emissão de gases, como o dióxido de carbono (CO₂), 
              e de materiais particulados, como fuligem, que alteram as propriedades naturais da atmosfera.
            </p>
            <p className="text-gray-700">
              Ela é classificada como um problema ambiental pelos impactos negativos que ocasiona 
              nos ciclos da natureza e nas diferentes formas de vida que vivem sob áreas de ar poluído, 
              incluindo os seres humanos.
            </p>
          </CardContent>
        </Card>

        {/* Types of Pollutants */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Principais Tipos de Poluentes
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {pollutantTypes.map((pollutant, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center space-x-2 mb-2">
                    {pollutant.icon}
                    <Badge className={pollutant.color}>
                      {pollutant.name}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">{pollutant.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <Separator className="my-12" />

        {/* Sources Section */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Fontes de Poluição do Ar
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Natural Sources */}
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl text-green-700">Fontes Naturais</CardTitle>
                <CardDescription>
                  Processos naturais que emitem poluentes, mas em menor intensidade que as atividades humanas.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {naturalSources.map((source, index) => (
                    <div key={index} className="flex items-start space-x-3 p-3 rounded-lg bg-green-50">
                      {source.icon}
                      <div>
                        <h4 className="font-semibold text-gray-900">{source.name}</h4>
                        <p className="text-sm text-gray-600">{source.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Anthropic Sources */}
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl text-red-700">Fontes Antrópicas</CardTitle>
                <CardDescription>
                  Atividades humanas que são as principais responsáveis pela poluição do ar atual.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {anthropicSources.map((source, index) => (
                    <div key={index} className="flex items-start space-x-3 p-3 rounded-lg bg-red-50">
                      {source.icon}
                      <div>
                        <h4 className="font-semibold text-gray-900">{source.name}</h4>
                        <p className="text-sm text-gray-600">{source.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Key Facts */}
        <Card className="bg-gradient-to-r from-blue-600 to-green-600 text-white">
          <CardHeader>
            <CardTitle className="text-2xl text-center">Fatos Importantes</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">99%</div>
                <p>da população mundial respira ar que excede os limites de qualidade da OMS</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">8,1 milhões</div>
                <p>de mortes prematuras por ano causadas pela poluição do ar</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export default AboutPage
