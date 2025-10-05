import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Users } from "lucide-react";
import Footer from "@/components/Footer";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";

function TeamPage({ onPageChange }) {
  const teamMembers = [
    { name: "Mateus Henrique", role: "Desenvolvedor Web", image: "/images/Mateus.jpg" },
    { name: "Artur Felipe", role: "Desenvolvedor Slide", image: "/images/alisson.jpg" },
    { name: "Alisson Felipe", role: "Aoresentador", image: "/images/arthur.jpg" },
    { name: "Davi Guedes", role: "Pesquisador", image: "/images/davi.jpg" },
    { name: "Lucas Henrique", role: "Apresentador", image: "/images/lucas.jpg" },
    { name: "Luiz Ricardo", role: "Apresentador", image: "/images/luiz.jpg" },
    { name: "Julio Henrique", role: "Apresentador", image: "/images/julio.jpg" },
    { name: "Erison Carlos", role: "Apresentador", image: "/images/erison.jpg" },
    { name: "Josinete", role: "Professor responsável", image: "/images/josinete.jpg" }
  ];

  return (
    <Layout>
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12">
            <Users className="h-16 w-16 mx-auto text-purple-600 mb-6" />
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Nossa Equipe
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Conheça os participantes que tornaram este projeto possível.
            </p>
          </div>

          {/* Team Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <Card 
                key={index} 
                className="text-center hover:shadow-xl hover:scale-105 transition-transform transition-shadow duration-300"
              >
                <CardContent className="flex flex-col items-center p-6">
                  <Avatar className="h-24 w-24 mb-4 transition-transform duration-300 hover:scale-110">
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

          {/* Call to Action */}
          <div className="mt-16 text-center">
            <h2 className="text-3xl font-bold mb-4 text-gray-900">Quer explorar mais?</h2>
            <p className="text-lg text-gray-700 mb-6">
              Descubra dados reais sobre a qualidade do ar ou teste seus conhecimentos com nosso quiz interativo.
            </p>
            <div className="flex justify-center gap-4">
              <Button size="lg" variant="secondary" onClick={() => onPageChange('data')}>
                Ver Dados
              </Button>
              <Button size="lg" variant="outline" onClick={() => onPageChange('quiz')}>
                Fazer Quiz
              </Button>
            </div>
          </div>
        </div>

        {/* Footer */}
        <Footer />
      </div>
    </Layout>
  );
}

export default TeamPage;
