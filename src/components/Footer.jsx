// src/components/Footer.jsx
export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white text-center py-6 mt-12">
      <p className="text-sm">
        © {new Date().getFullYear()} TCF - Poluição do Ar | Desenvolvido por Mateus. Todos os direitos reservados.
      </p>
    </footer>
  );
}