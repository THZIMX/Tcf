import { useState, useEffect } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, BarChart, Bar } from 'recharts'
import { TrendingUp, MapPin } from 'lucide-react'
import Footer from "@/components/Footer";

const DataPage = () => {
  const [selectedCity, setSelectedCity] = useState('guarulhos')
  const [chartData, setChartData] = useState([])

  const mockData = {
    guarulhos: [
      { month: 'Jan 2024', aqi: 92, pm25: 60, pm10: 40 },
      { month: 'Fev 2024', aqi: 112, pm25: 75, pm10: 50 },
      { month: 'Mar 2024', aqi: 131, pm25: 88, pm10: 60 },
      { month: 'Abr 2024', aqi: 131, pm25: 85, pm10: 55 },
      { month: 'Mai 2024', aqi: 115, pm25: 70, pm10: 45 },
      { month: 'Jun 2024', aqi: 152, pm25: 95, pm10: 65 },
      { month: 'Jul 2024', aqi: 175, pm25: 110, pm10: 75 },
      { month: 'Ago 2024', aqi: 226, pm25: 140, pm10: 90 },
      { month: 'Set 2024', aqi: 167, pm25: 105, pm10: 70 },
      { month: 'Out 2024', aqi: 101, pm25: 65, pm10: 42 },
      { month: 'Nov 2024', aqi: 122, pm25: 80, pm10: 53 },
      { month: 'Dez 2024', aqi: 145, pm25: 90, pm10: 60 },
    ],
    saopaulo: [
      { month: 'Jan 2024', aqi: 70, pm25: 45, pm10: 30 },
      { month: 'Fev 2024', aqi: 85, pm25: 55, pm10: 35 },
      { month: 'Mar 2024', aqi: 95, pm25: 60, pm10: 40 },
      { month: 'Abr 2024', aqi: 90, pm25: 58, pm10: 38 },
      { month: 'Mai 2024', aqi: 78, pm25: 50, pm10: 32 },
      { month: 'Jun 2024', aqi: 105, pm25: 68, pm10: 45 },
      { month: 'Jul 2024', aqi: 120, pm25: 78, pm10: 50 },
      { month: 'Ago 2024', aqi: 150, pm25: 95, pm10: 65 },
      { month: 'Set 2024', aqi: 110, pm25: 70, pm10: 48 },
      { month: 'Out 2024', aqi: 75, pm25: 48, pm10: 30 },
      { month: 'Nov 2024', aqi: 90, pm25: 58, pm10: 38 },
      { month: 'Dez 2024', aqi: 100, pm25: 65, pm10: 42 },
    ],
    riodejaneiro: [
      { month: 'Jan 2024', aqi: 50, pm25: 30, pm10: 20 },
      { month: 'Fev 2024', aqi: 65, pm25: 40, pm10: 25 },
      { month: 'Mar 2024', aqi: 70, pm25: 45, pm10: 28 },
      { month: 'Abr 2024', aqi: 60, pm25: 38, pm10: 24 },
      { month: 'Mai 2024', aqi: 55, pm25: 35, pm10: 22 },
      { month: 'Jun 2024', aqi: 75, pm25: 48, pm10: 30 },
      { month: 'Jul 2024', aqi: 80, pm25: 50, pm10: 32 },
      { month: 'Ago 2024', aqi: 90, pm25: 55, pm10: 35 },
      { month: 'Set 2024', aqi: 70, pm25: 45, pm10: 28 },
      { month: 'Out 2024', aqi: 58, pm25: 36, pm10: 23 },
      { month: 'Nov 2024', aqi: 68, pm25: 42, pm10: 27 },
      { month: 'Dez 2024', aqi: 72, pm25: 45, pm10: 29 },
    ],
    // Novas cidades de Pernambuco
    recife: [
      { month: 'Jan 2024', aqi: 22, pm25: 4, pm10: 15 },
      { month: 'Fev 2024', aqi: 25, pm25: 5, pm10: 16 },
      { month: 'Mar 2024', aqi: 30, pm25: 6, pm10: 18 },
      { month: 'Abr 2024', aqi: 28, pm25: 5, pm10: 17 },
      { month: 'Mai 2024', aqi: 27, pm25: 5, pm10: 16 },
      { month: 'Jun 2024', aqi: 24, pm25: 4, pm10: 15 },
      { month: 'Jul 2024', aqi: 23, pm25: 4, pm10: 15 },
      { month: 'Ago 2024', aqi: 25, pm25: 5, pm10: 16 },
      { month: 'Set 2024', aqi: 26, pm25: 5, pm10: 17 },
      { month: 'Out 2024', aqi: 27, pm25: 5, pm10: 18 },
      { month: 'Nov 2024', aqi: 28, pm25: 5, pm10: 19 },
      { month: 'Dez 2024', aqi: 29, pm25: 6, pm10: 20 },
    ],
    camaragibe: [
      { month: 'Jan 2024', aqi: 45, pm25: 10, pm10: 20 },
      { month: 'Fev 2024', aqi: 48, pm25: 11, pm10: 21 },
      { month: 'Mar 2024', aqi: 50, pm25: 12, pm10: 22 },
      { month: 'Abr 2024', aqi: 47, pm25: 11, pm10: 21 },
      { month: 'Mai 2024', aqi: 46, pm25: 10, pm10: 20 },
      { month: 'Jun 2024', aqi: 45, pm25: 10, pm10: 20 },
      { month: 'Jul 2024', aqi: 44, pm25: 9, pm10: 19 },
      { month: 'Ago 2024', aqi: 43, pm25: 9, pm10: 18 },
      { month: 'Set 2024', aqi: 42, pm25: 8, pm10: 17 },
      { month: 'Out 2024', aqi: 41, pm25: 8, pm10: 16 },
      { month: 'Nov 2024', aqi: 40, pm25: 7, pm10: 15 },
      { month: 'Dez 2024', aqi: 39, pm25: 7, pm10: 14 },
    ]
  }

  useEffect(() => {
    setChartData(mockData[selectedCity])
  }, [selectedCity])

  const aqiCategories = [
    { range: '0-50', label: 'Boa', color: '#8DC63F' },
    { range: '51-100', label: 'Moderada', color: '#F7B731' },
    { range: '101-150', label: 'Não Saudável para Grupos Sensíveis', color: '#EA580C' },
    { range: '151-200', label: 'Não Saudável', color: '#EF4444' },
    { range: '201-300', label: 'Muito Não Saudável', color: '#8B5CF6' },
    { range: '301+', label: 'Perigosa', color: '#7E22CE' },
  ]

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <TrendingUp className="h-16 w-16 mx-auto text-blue-600 mb-6" />
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Dados e Gráficos da Qualidade do Ar
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore dados reais sobre a poluição do ar em diferentes cidades e entenda as tendências.
          </p>
        </div>

        {/* City Selector */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-2xl flex items-center gap-2">
              <MapPin className="h-6 w-6" /> Selecione uma Cidade
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Select value={selectedCity} onValueChange={setSelectedCity}>
              <SelectTrigger className="w-[280px]">
                <SelectValue placeholder="Selecione uma cidade" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="guarulhos">Guarulhos, SP</SelectItem>
                <SelectItem value="saopaulo">São Paulo, SP</SelectItem>
                <SelectItem value="riodejaneiro">Rio de Janeiro, RJ</SelectItem>
                <SelectItem value="recife">Recife, PE</SelectItem>
                <SelectItem value="camaragibe">Camaragibe, PE</SelectItem>
              </SelectContent>
            </Select>
          </CardContent>
        </Card>

        {/* AQI Line Chart */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-2xl">Índice de Qualidade do Ar (AQI) Mensal</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={400}>
              <LineChart
                data={chartData}
                margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="aqi" stroke="#8884d8" activeDot={{ r: 8 }} name="AQI" />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Pollutant Bar Chart */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-2xl">Níveis de Poluentes (PM2.5 e PM10) Mensal</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={400}>
              <BarChart
                data={chartData}
                margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="pm25" fill="#82ca9d" name="PM2.5 (µg/m³)" />
                <Bar dataKey="pm10" fill="#8884d8" name="PM10 (µg/m³)" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* AQI Categories Explanation */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-2xl">Categorias do Índice de Qualidade do Ar (AQI)</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {aqiCategories.map((category, index) => (
                <div key={index} className="flex items-center space-x-3 p-3 rounded-lg bg-white shadow-sm">
                  <div className="w-6 h-6 rounded-full" style={{ backgroundColor: category.color }}></div>
                  <div>
                    <h4 className="font-semibold text-gray-900">{category.label}</h4>
                    <p className="text-sm text-gray-600">AQI: {category.range}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Fontes dos dados */}
        <Card className="mt-8">
          <CardHeader>
            <CardTitle className="text-2xl">Fontes dos Dados</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>
                <a
                  href="https://www.iqair.com/brasil/pernambuco/recife"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 underline"
                >
                  IQAir – Qualidade do ar Recife
                </a>
              </li>
              <li>
                <a
                  href="https://www.accuweather.com/pt/br/camaragibe/34948/air-quality-index/34948"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 underline"
                >
                  AccuWeather – Índice de qualidade do ar Camaragibe
                </a>
              </li>
              <li>
                <a
                  href="https://www.stateofglobalair.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 underline"
                >
                  State of Global Air – Mortes globais por poluição
                </a>
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default DataPage;
