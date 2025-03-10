
import { ArrowRight } from "lucide-react";

const CallToAction = () => {
  return (
    <section id="contact" className="py-20 bg-forest">
      <div className="section-container">
        <div className="rounded-2xl bg-gradient-to-r from-forest-dark to-forest-light p-1">
          <div className="bg-forest rounded-xl px-6 py-12 md:p-12 text-center">
            <div className="max-w-3xl mx-auto space-y-8 animate-fade-in">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-white">
                Pronto para Experimentar um Ambiente Livre de Moscas?
              </h2>
              
              <p className="text-forest-light text-lg opacity-90">
                Junte-se a milhares de clientes satisfeitos que transformaram suas casas e empresas. 
                Experimente nossa solução premium de controle de insetos hoje e aproveite resultados imediatos.
              </p>
              
              <div className="pt-4">
                <a 
                  href="#"
                  className="button-hover inline-flex items-center px-8 py-4 bg-white text-forest font-medium rounded-lg shadow-lg hover:shadow-xl"
                >
                  Comprar Agora <ArrowRight className="ml-2 h-5 w-5" />
                </a>
                
                <p className="mt-4 text-sm text-white/70">
                  Garantia de 30 dias com devolução do dinheiro. Frete grátis em pedidos acima de R$250.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
