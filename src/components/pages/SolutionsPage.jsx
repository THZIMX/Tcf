import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Lightbulb, Recycle, Bus, Leaf, ShieldCheck, School } from 'lucide-react'

const SolutionsPage = () => {
  const solutions = [
    {
      icon: <Lightbulb className="h-8 w-8 text-yellow-500" />,
      title: "Uso de Energias Renováveis",
      description: "Substituir combustíveis fósseis por fontes limpas como solar, eólica e hidrelétrica, reduzindo drasticamente a emissão de gases poluentes."
    },
    {
      icon: <Bus className="h-8 w-8 text-blue-500" />,
      title: "Transporte Sustentável",
      description: "Incentivar o uso de transporte público, bicicletas e veículos elétricos, além de melhorar a infraestrutura para pedestres."
    },
    {
      icon: <Recycle className="h-8 w-8 text-green-500" />,
      title: "Tecnologias de Controle de Emissões",
      description: "Implementar filtros e catalisadores em indústrias e veículos para reduzir a quantidade de poluentes liberados na atmosfera."
    },
    {
      icon: <ShieldCheck className="h-8 w-8 text-indigo-500" />,
      title: "Legislação e Fiscalização",
      description: "Criar e fazer cumprir leis rigorosas de controle de emissões, com fiscalização efetiva para garantir os padrões estabelecidos."
    },
    {
      icon: <Leaf className="h-8 w-8 text-lime-500" />,
      title: "Reflorestamento e Áreas Verdes",
      description: "Aumentar a cobertura vegetal em áreas urbanas e rurais, pois as árvores atuam como filtros naturais, absorvendo CO₂ e outros poluentes."
    },
    {
      icon: <School className="h-8 w-8 text-orange-500" />,
      title: "Educação Ambiental",
      description: "Conscientizar a população sobre os impactos da poluição do ar e a importância de adotar práticas mais sustentáveis no dia a dia."
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <Lightbulb className="h-16 w-16 mx-auto text-green-600 mb-6" />
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Soluções e Prevenção
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Descubra as principais estratégias e ações que podemos adotar para combater a poluição do ar e construir um futuro mais saudável.
          </p>
        </div>

        {/* Solutions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {solutions.map((solution, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center justify-center mb-4">
                  {solution.icon}
                </div>
                <CardTitle className="text-xl text-center">{solution.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 text-center">{solution.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <Card className="mt-12 bg-gradient-to-r from-green-600 to-blue-600 text-white">
          <CardHeader>
            <CardTitle className="text-2xl text-center">Sua Ação Faz a Diferença!</CardTitle>
          </CardHeader>
          <CardContent className="text-center">
            <p className="text-lg mb-4">
              Pequenas mudanças em nossos hábitos diários podem contribuir significativamente para a melhoria da qualidade do ar.
            </p>
            <p className="text-lg font-semibold">
              Comece hoje a fazer a sua parte por um planeta mais limpo.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export default SolutionsPage
