
import { ArrowRight, BugOff, ShieldCheck } from "lucide-react";
import { images } from "@/assets/images";
import ProductImage from "./ProductImage";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center pt-16 bg-gray-50 overflow-hidden">
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-8 animate-fade-in-slow">
            <div className="space-y-2">
              <div className="inline-block px-3 py-1 rounded-full bg-forest/10 text-forest text-xs font-semibold tracking-wide">
                CONTROLE PROFISSIONAL DE INSETOS
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-display font-bold text-charcoal leading-tight">
                Diga Adeus às <span className="text-gradient">Moscas</span> Para Sempre
              </h1>
            </div>
            
            <p className="text-gray-600 text-lg leading-relaxed">
              Nossa fórmula avançada elimina moscas e outros insetos com eficiência incomparável, 
              proporcionando resultados imediatos e proteção duradoura para sua casa ou empresa.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="#products" 
                className="button-hover flex items-center justify-center px-6 py-3 bg-forest text-white font-medium rounded-lg shadow-md hover:shadow-lg"
              >
                Explorar Produtos <ArrowRight className="ml-2 h-4 w-4" />
              </a>
              <a 
                href="#how-it-works" 
                className="button-hover flex items-center justify-center px-6 py-3 bg-white text-charcoal border border-gray-300 font-medium rounded-lg hover:bg-gray-50"
              >
                Como Funciona
              </a>
            </div>
            
            <div className="flex items-center space-x-6 pt-4">
              <div className="flex items-center">
                <ShieldCheck className="h-5 w-5 text-forest mr-2" />
                <span className="text-sm text-gray-600">100% Satisfação</span>
              </div>
              <div className="flex items-center">
                <BugOff className="h-5 w-5 text-forest mr-2" />
                <span className="text-sm text-gray-600">Ingredientes Naturais</span>
              </div>
            </div>
          </div>
          
          {/* Hero Image */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-forest/5 to-transparent rounded-2xl transform scale-105 animate-fade-in-slow" />
            <div className="p-2 animate-fade-in">
              <ProductImage 
                src={images.heroProduct} 
                alt="PestZero Spray de Eliminação de Moscas" 
                className="w-full rounded-2xl shadow-xl"
                priority={true}
              />
            </div>
            
            {/* Floating badges */}
            <div className="absolute -bottom-4 -left-4 bg-white px-4 py-2 rounded-lg shadow-lg animate-fade-in">
              <div className="flex items-center">
                <span className="text-forest font-bold text-3xl">99%</span>
                <span className="ml-2 text-gray-600 text-sm">Taxa de<br/>Eliminação</span>
              </div>
            </div>
            
            <div className="absolute top-1/4 -right-4 bg-white px-4 py-2 rounded-lg shadow-lg animate-fade-in">
              <div className="flex items-center">
                <span className="text-forest font-bold">24h</span>
                <span className="ml-2 text-gray-600 text-xs">Proteção</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
