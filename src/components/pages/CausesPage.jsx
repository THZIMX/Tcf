import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { AlertTriangle, Heart, Activity, Brain, Eye, Droplets, TreePine, Building, Globe } from 'lucide-react';
import Footer from "@/components/Footer";

function CausesPage() {
  const healthConsequences = [
    {
      icon: <Activity className="h-8 w-8 text-red-500" />,
      title: "Doenças Respiratórias",
      description: "Asma, bronquite, enfisema, pneumonia e câncer de pulmão são diretamente relacionados à poluição do ar.",
      severity: "Alta",
      color: "bg-red-100 text-red-800"
    },
    {
      icon: <Heart className="h-8 w-8 text-pink-500" />,
      title: "Doenças Cardiovasculares",
      description: "Ataques cardíacos, derrames, hipertensão e outras doenças do coração são agravadas pela poluição.",
      severity: "Alta",
      color: "bg-pink-100 text-pink-800"
    },
    {
      icon: <Brain className="h-8 w-8 text-purple-500" />,
      title: "Problemas Neurológicos",
      description: "Alzheimer, Parkinson e impactos no desenvolvimento cognitivo de crianças.",
      severity: "Média",
      color: "bg-purple-100 text-purple-800"
    },
    {
      icon: <Eye className="h-8 w-8 text-blue-500" />,
      title: "Irritações",
      description: "Olhos, nariz e garganta ficam irritados, causando desconforto e infecções.",
      severity: "Baixa",
      color: "bg-blue-100 text-blue-800"
    }
  ];

  const environmentalConsequences = [
    {
      icon: <Droplets className="h-8 w-8 text-yellow-500" />,
      title: "Chuva Ácida",
      description: "Óxidos de enxofre e nitrogênio reagem com a água, formando ácidos que danificam florestas, lavouras e monumentos.",
      impact: "Ecossistemas e patrimônio histórico"
    },
    {
      icon: <Globe className="h-8 w-8 text-orange-500" />,
      title: "Buraco na Camada de Ozônio",
      description: "CFCs destroem a camada de ozônio, aumentando a radiação UV nociva que chega à Terra.",
      impact: "Vida marinha e terrestre"
    },
    {
      icon: <TreePine className="h-8 w-8 text-green-500" />,
      title: "Aquecimento Global",
      description: "Gases de efeito estufa intensificam o aquecimento global, causando mudanças climáticas extremas.",
      impact: "Clima global e biodiversidade"
    },
    {
      icon: <Building className="h-8 w-8 text-gray-500" />,
      title: "Smog Fotoquímico",
      description: "Névoa poluente formada pela reação de poluentes com a luz solar, comum em grandes cidades.",
      impact: "Qualidade de vida urbana"
    }
  ];

  const majorCauses = [
    {
      category: "Transporte",
      percentage: "45%",
      description: "Veículos terrestres, aviões e navios queimam combustíveis fósseis, liberando CO₂, CO e NOₓ.",
      color: "bg-blue-500"
    },
    {
      category: "Indústrias",
      percentage: "30%",
      description: "Processos industriais e geração de energia em usinas termelétricas.",
      color: "bg-gray-500"
    },
    {
      category: "Agropecuária",
      percentage: "15%",
      description: "Uso de fertilizantes, criação de gado e queimadas agrícolas.",
      color: "bg-green-500"
    },
    {
      category: "Outros",
      percentage: "10%",
      description: "Aquecimento residencial, queima de lixo e outras atividades.",
      color: "bg-orange-500"
    }
  ];

  const vulnerableGroups = [
    {
      group: "Crianças",
      reason: "Sistema respiratório em desenvolvimento, maior taxa de respiração por peso corporal."
    },
    {
      group: "Idosos",
      reason: "Sistema imunológico enfraquecido e maior probabilidade de doenças preexistentes."
    },
    {
      group: "Pessoas com doenças crônicas",
      reason: "Asma, diabetes, doenças cardíacas são agravadas pela poluição do ar."
    },
    {
      group: "Trabalhadores ao ar livre",
      reason: "Maior exposição diária a poluentes atmosféricos."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <AlertTriangle className="h-16 w-16 mx-auto text-red-600 mb-6" />
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Causas e Consequências</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Entenda as principais causas da poluição do ar e seus impactos devastadores na saúde humana e no meio ambiente.
          </p>
        </div>

        {/* Main Causes */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Principais Causas da Poluição do Ar</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {majorCauses.map((cause, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className={`w-16 h-16 ${cause.color} rounded-full mx-auto mb-4 flex items-center justify-center`}>
                    <span className="text-white font-bold text-xl">{cause.percentage}</span>
                  </div>
                  <CardTitle className="text-xl">{cause.category}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{cause.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Consequences Tabs */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Consequências da Poluição do Ar</h2>
          <Tabs defaultValue="health" className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="health">Impactos na Saúde</TabsTrigger>
              <TabsTrigger value="environment">Impactos Ambientais</TabsTrigger>
            </TabsList>

            <TabsContent value="health" className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {healthConsequences.map((consequence, index) => (
                  <Card key={index} className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="flex items-center space-x-3 mb-2">
                        {consequence.icon}
                        <div>
                          <CardTitle className="text-xl">{consequence.title}</CardTitle>
                          <Badge className={consequence.color}>Severidade: {consequence.severity}</Badge>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-700">{consequence.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Vulnerable Groups */}
              <Card className="mt-8">
                <CardHeader>
                  <CardTitle className="text-2xl">Grupos Mais Vulneráveis</CardTitle>
                  <CardDescription>Algumas populações são mais suscetíveis aos efeitos da poluição do ar.</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {vulnerableGroups.map((group, index) => (
                      <div key={index} className="p-4 bg-red-50 rounded-lg">
                        <h4 className="font-semibold text-red-800 mb-2">{group.group}</h4>
                        <p className="text-sm text-red-700">{group.reason}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="environment" className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {environmentalConsequences.map((consequence, index) => (
                  <Card key={index} className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="flex items-center space-x-3 mb-2">
                        {consequence.icon}
                        <CardTitle className="text-xl">{consequence.title}</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-700 mb-3">{consequence.description}</p>
                      <Badge variant="outline" className="text-sm">Afeta: {consequence.impact}</Badge>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>

        {/* Statistics Alert */}
        <Card className="bg-gradient-to-r from-red-600 to-orange-600 text-white">
          <CardHeader>
            <CardTitle className="text-2xl text-center">Dados Alarmantes</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-4xl font-bold mb-2">8,1 milhões</div>
                <p>de mortes prematuras por ano</p>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">99%</div>
                <p>da população respira ar poluído</p>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">$2,9 trilhões</div>
                <p>em custos de saúde anuais globais</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default CausesPage;
