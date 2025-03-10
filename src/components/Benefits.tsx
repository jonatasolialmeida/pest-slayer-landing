
import { BugOff, ShieldCheck, SprayCan, Check } from "lucide-react";
import FeatureCard from "./FeatureCard";
import { cn } from "@/lib/utils";
import { images } from "@/assets/images";
import ProductImage from "./ProductImage";

const Benefits = () => {
  const features = [
    {
      title: "Efeito Imediato",
      description: "Elimina moscas e outros insetos voadores em minutos após a aplicação.",
      icon: BugOff,
      delay: 100
    },
    {
      title: "Proteção Duradoura",
      description: "Fornece proteção contínua por até 24 horas após uma única aplicação.",
      icon: ShieldCheck,
      delay: 200
    },
    {
      title: "Aplicação Fácil",
      description: "Fórmula de spray simples que não requer equipamentos especiais ou preparação.",
      icon: SprayCan,
      delay: 300
    }
  ];

  const benefits = [
    "Seguro para uso perto de crianças e animais após secar",
    "Fórmula sem odor não deixa cheiro químico persistente",
    "Não mancha a maioria das superfícies",
    "Ingredientes biodegradáveis",
    "Funciona em várias espécies de insetos",
    "Desenvolvido por entomologistas"
  ];

  return (
    <section id="products" className="py-24 bg-gray-100">
      <div className="section-container">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-charcoal mb-4">
            Proteção Avançada Contra <span className="text-gradient">Pragas Voadoras</span>
          </h2>
          <p className="text-gray-600 text-lg">
            Nossos produtos cientificamente formulados atacam insetos em múltiplos estágios da vida, 
            proporcionando proteção abrangente para seu ambiente.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              title={feature.title}
              description={feature.description}
              icon={feature.icon}
              className="animate-fade-in"
              delay={feature.delay}
            />
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mt-24">
          <div className="order-2 lg:order-1">
            <div className="space-y-6 animate-fade-in">
              <h3 className="text-2xl md:text-3xl font-display font-bold text-charcoal">
                Por que Escolher Nossa Solução Premium para Insetos?
              </h3>
              
              <p className="text-gray-600">
                Nossa fórmula combina os mais recentes avanços em tecnologia de controle de pragas com 
                ingredientes ambientalmente conscientes para oferecer resultados superiores sem compromisso.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {benefits.map((benefit, index) => (
                  <div 
                    key={index} 
                    className={cn(
                      "flex items-start animate-slide-in",
                      { "sm:col-span-2": index === benefits.length - 1 && benefits.length % 2 === 1 }
                    )}
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="flex-shrink-0 mt-1">
                      <Check className="h-5 w-5 text-forest" />
                    </div>
                    <p className="ml-3 text-gray-600">{benefit}</p>
                  </div>
                ))}
              </div>
              
              <div className="pt-4">
                <a 
                  href="#contact" 
                  className="button-hover inline-flex items-center px-6 py-3 bg-forest text-white font-medium rounded-lg shadow-md hover:shadow-lg"
                >
                  Comece Hoje Mesmo
                </a>
              </div>
            </div>
          </div>
          
          <div className="order-1 lg:order-2 flex justify-center">
            <div className="relative w-full max-w-md">
              <div className="absolute inset-0 bg-gradient-to-bl from-forest/5 to-transparent rounded-2xl transform scale-105" />
              <ProductImage 
                src={images.productSpray} 
                alt="PestZero Spray Premium para Moscas" 
                className="rounded-2xl shadow-xl animate-fade-in"
              />
              
              <div className="absolute -bottom-4 right-4 bg-white px-4 py-2 rounded-lg shadow-lg animate-fade-in">
                <p className="text-forest font-bold">Fórmula Premium</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
