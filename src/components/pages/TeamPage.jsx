import { Card, CardContent, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Users } from "lucide-react"

const TeamPage = () => {
  const teamMembers = [
    { name: "Davi Guedes", role: "Participante", image: "/images/davi.jpg" },
    { name: "Alisson Felipe", role: "Participante", image: "/images/alisson.jpg" },
    { name: "Arthur Felipe", role: "Desenvolvedor do slide", image: "/images/arthur.jpg" },
    { name: "Mateus Henrique", role: "Desenvolvedor Web", image: "/images/mateus.jpg" },
    { name: "Lucas Henrique", role: "Participante", image: "/images/lucas.jpg" },
    { name: "Luiz Ricardo", role: "Participante", image: "/images/luiz.jpg" },
    { name: "Julio Henrique", role: "Participante", image: "/images/julio.jpg" },
    { name: "Erison Carlos", role: "Participante", image: "/images/erison.jpg" },
    { name: "Josinete", role: "Professor responsável", image: "/images/josinete.jpg" }
  ]

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <Users className="h-16 w-16 mx-auto text-purple-600 mb-6" />
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Nossa Equipe
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Conheça os dedicados estudantes do 9º D que tornaram este projeto possível.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="flex flex-col items-center p-6">
                <Avatar className="h-24 w-24 mb-4">
                  <AvatarImage src={member.image} alt={member.name} />
                  <AvatarFallback className="bg-purple-600 text-white text-2xl font-bold">
                    {member.name.split(" ").map(n => n[0]).join("")}
                  </AvatarFallback>
                </Avatar>
                <CardTitle className="text-xl mb-2">{member.name}</CardTitle>
                <p className="text-purple-600 font-semibold mb-2">{member.role}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}

export default TeamPage
    