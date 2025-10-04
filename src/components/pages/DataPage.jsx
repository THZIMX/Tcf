import { useState, useEffect } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, BarChart, Bar } from 'recharts'
import { TrendingUp, MapPin } from 'lucide-react'

const DataPage = () => {
  const [selectedCity, setSelectedCity] = useState('guarulhos')
  const [chartData, setChartData] = useState([])

  // Mock data for demonstration. In a real application, this would come from an API.
  // Data inspired by AQICN historical data for Guarulhos-Paço Municipal, São Paulo
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

  const getAqiColor = (aqi) => {
    if (aqi <= 50) return '#8DC63F' // Boa
    if (aqi <= 100) return '#F7B731' // Moderada
    if (aqi <= 150) return '#EA580C' // Não Saudável para Grupos Sensíveis
    if (aqi <= 200) return '#EF4444' // Não Saudável
    if (aqi <= 300) return '#8B5CF6' // Muito Não Saudável
    return '#7E22CE' // Perigosa
  }

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
                <SelectItem value="guarulhos">Guarulhos-Paço Municipal, SP</SelectItem>
                <SelectItem value="saopaulo">São Paulo, SP</SelectItem>
                <SelectItem value="riodejaneiro">Rio de Janeiro, RJ</SelectItem>
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
                margin={{
                  top: 5, right: 30, left: 20, bottom: 5,
                }}
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
                margin={{
                  top: 5, right: 30, left: 20, bottom: 5,
                }}
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
        <Card>
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
      </div>
    </div>
  )
}

export default DataPage
