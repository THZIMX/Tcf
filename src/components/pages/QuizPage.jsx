import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { Label } from '@/components/ui/label'
import { CheckCircle, XCircle, HelpCircle } from 'lucide-react'

const QuizPage = () => {
  const questions = [
    {
      question: 'Qual gás é o principal responsável pelo efeito estufa e pela poluição do ar?',
      options: [
        { id: 'a', text: 'Oxigênio (O₂)' },
        { id: 'b', text: 'Dióxido de Carbono (CO₂)' },
        { id: 'c', text: 'Nitrogênio (N₂)' },
        { id: 'd', text: 'Hélio (He)' },
      ],
      answer: 'b',
      explanation: 'O Dióxido de Carbono (CO₂) é o principal gás do efeito estufa e um dos maiores contribuintes para a poluição do ar, principalmente pela queima de combustíveis fósseos.',
    },
    {
      question: 'Qual fenômeno ambiental é causado pela reação de óxidos de enxofre e nitrogênio com a água na atmosfera?',
      options: [
        { id: 'a', text: 'Aquecimento Global' },
        { id: 'b', text: 'Buraco na Camada de Ozônio' },
        { id: 'c', text: 'Chuva Ácida' },
        { id: 'd', text: 'Smog Fotoquímico' },
      ],
      answer: 'c',
      explanation: 'A Chuva Ácida é formada quando óxidos de enxofre e nitrogênio reagem com a umidade da atmosfera, resultando em precipitação com pH baixo que prejudica o meio ambiente.',
    },
    {
      question: 'Qual das seguintes opções NÃO é uma fonte antrópica (causada pelo ser humano) de poluição do ar?',
      options: [
        { id: 'a', text: 'Queima de combustíveis fósseis em veículos' },
        { id: 'b', text: 'Atividade industrial' },
        { id: 'c', text: 'Erupções vulcânicas' },
        { id: 'd', text: 'Queimadas agrícolas' },
      ],
      answer: 'c',
      explanation: 'Erupções vulcânicas são fontes naturais de poluição do ar, enquanto as outras opções são atividades humanas.',
    },
    {
      question: 'Qual poluente atmosférico é inodoro e incolor, mas altamente tóxico por se ligar à hemoglobina do sangue?',
      options: [
        { id: 'a', text: 'Dióxido de Carbono (CO₂)' },
        { id: 'b', text: 'Monóxido de Carbono (CO)' },
        { id: 'c', text: 'Ozônio (O₃)' },
        { id: 'd', text: 'Material Particulado (MP)' },
      ],
      answer: 'b',
      explanation: 'O Monóxido de Carbono (CO) é um gás extremamente perigoso, pois se liga à hemoglobina do sangue com mais facilidade que o oxigênio, impedindo o transporte de O₂ e causando asfixia.',
    },
  ]

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [selectedOption, setSelectedOption] = useState(null)
  const [score, setScore] = useState(0)
  const [showResult, setShowResult] = useState(false)
  const [feedback, setFeedback] = useState(null)

  const handleOptionChange = (value) => {
    setSelectedOption(value)
    setFeedback(null) // Clear previous feedback when a new option is selected
  }

  const handleSubmit = () => {
    const currentQuestion = questions[currentQuestionIndex]
    if (selectedOption === currentQuestion.answer) {
      setScore(score + 1)
      setFeedback({ type: 'correct', message: 'Correto! ' + currentQuestion.explanation })
    } else {
      setFeedback({ type: 'incorrect', message: 'Incorreto. A resposta correta é ' + currentQuestion.options.find(opt => opt.id === currentQuestion.answer).text + '. ' + currentQuestion.explanation })
    }
  }

  const handleNextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1)
      setSelectedOption(null)
      setFeedback(null)
    } else {
      setShowResult(true)
    }
  }

  const handleRestartQuiz = () => {
    setCurrentQuestionIndex(0)
    setSelectedOption(null)
    setScore(0)
    setShowResult(false)
    setFeedback(null)
  }

  const currentQuestion = questions[currentQuestionIndex]

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <HelpCircle className="h-16 w-16 mx-auto text-green-600 mb-6" />
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Quiz Interativo
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Teste seus conhecimentos sobre poluição do ar e aprenda mais sobre o tema!
          </p>
        </div>

        {!showResult ? (
          <Card className="p-6">
            <CardHeader>
              <CardTitle className="text-2xl mb-4">
                Questão {currentQuestionIndex + 1} de {questions.length}
              </CardTitle>
              <p className="text-lg font-semibold mb-6">{currentQuestion.question}</p>
            </CardHeader>
            <CardContent>
              <RadioGroup onValueChange={handleOptionChange} value={selectedOption} className="space-y-4">
                {currentQuestion.options.map((option) => (
                  <div key={option.id} className="flex items-center space-x-3">
                    <RadioGroupItem value={option.id} id={`option-${option.id}`} />
                    <Label htmlFor={`option-${option.id}`} className="text-base cursor-pointer">
                      {option.text}
                    </Label>
                  </div>
                ))}
              </RadioGroup>
              
              {feedback && (
                <div className={`mt-6 p-4 rounded-lg flex items-start space-x-3 
                  ${feedback.type === 'correct' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                  {feedback.type === 'correct' ? 
                    <CheckCircle className="h-6 w-6 flex-shrink-0" /> : 
                    <XCircle className="h-6 w-6 flex-shrink-0" />
                  }
                  <p className="text-sm">{feedback.message}</p>
                </div>
              )}

              <div className="mt-8 flex justify-between">
                <Button 
                  onClick={handleSubmit} 
                  disabled={selectedOption === null || feedback !== null}
                  className="px-6 py-3"
                >
                  Verificar Resposta
                </Button>
                <Button 
                  onClick={handleNextQuestion} 
                  disabled={feedback === null}
                  className="px-6 py-3"
                >
                  {currentQuestionIndex < questions.length - 1 ? 'Próxima Questão' : 'Finalizar Quiz'}
                </Button>
              </div>
            </CardContent>
          </Card>
        ) : (
          <Card className="p-6 text-center">
            <CardHeader>
              <CardTitle className="text-3xl mb-4">Quiz Finalizado!</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-xl mb-4">
                Você acertou <span className="font-bold text-green-600">{score}</span> de <span className="font-bold">{questions.length}</span> questões.
              </p>
              <p className="text-lg text-gray-700 mb-8">
                Parabéns por testar seus conhecimentos sobre poluição do ar!
              </p>
              <Button onClick={handleRestartQuiz} className="px-8 py-3">
                Refazer Quiz
              </Button>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  )
}

export default QuizPage
