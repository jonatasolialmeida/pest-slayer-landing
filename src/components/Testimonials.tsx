
import TestimonialCard from "./TestimonialCard";
import { images } from "@/assets/images";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Emma Thompson",
      role: "Proprietária de Restaurante",
      content: "Depois de tentar vários produtos com sucesso limitado, o PestZero eliminou completamente nosso problema com moscas. Nossos clientes notaram a diferença imediatamente.",
      rating: 5,
      avatar: images.avatar1,
      delay: 100
    },
    {
      name: "Michael Garcia",
      role: "Proprietário de Casa",
      content: "Morar perto de um parque significava problemas constantes com insetos, especialmente no verão. Este spray funciona exatamente como anunciado - proteção rápida, eficaz e duradoura.",
      rating: 5,
      avatar: images.avatar2,
      delay: 200
    },
    {
      name: "Sarah Johnson",
      role: "Gerente de Café",
      content: "A área externa do nosso café estava inutilizável devido às moscas. Desde que começamos a usar este produto, nossos clientes podem desfrutar de suas refeições em paz. Vale cada centavo!",
      rating: 4,
      avatar: images.avatar3,
      delay: 300
    }
  ];

  return (
    <section id="testimonials" className="py-24 bg-gray-50">
      <div className="section-container">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-charcoal mb-4">
            O Que Nossos <span className="text-gradient">Clientes</span> Estão Dizendo
          </h2>
          <p className="text-gray-600 text-lg">
            Junte-se a milhares de clientes satisfeitos que transformaram seus espaços 
            com nossas soluções premium de controle de insetos.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              name={testimonial.name}
              role={testimonial.role}
              content={testimonial.content}
              rating={testimonial.rating}
              avatar={testimonial.avatar}
              className="animate-fade-in"
              delay={testimonial.delay}
            />
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-block px-4 py-2 bg-gray-100 rounded-full text-gray-600 text-sm font-medium animate-fade-in">
            <span className="text-forest font-bold">4.9/5</span> avaliação média de mais de 10.000 clientes
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
