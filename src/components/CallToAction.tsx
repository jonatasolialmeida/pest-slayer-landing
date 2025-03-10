
import { ArrowRight } from "lucide-react";

const CallToAction = () => {
  return (
    <section id="contact" className="py-20 bg-forest">
      <div className="section-container">
        <div className="rounded-2xl bg-gradient-to-r from-forest-dark to-forest-light p-1">
          <div className="bg-forest rounded-xl px-6 py-12 md:p-12 text-center">
            <div className="max-w-3xl mx-auto space-y-8 animate-fade-in">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-white">
                Ready to Experience a Fly-Free Environment?
              </h2>
              
              <p className="text-forest-light text-lg opacity-90">
                Join thousands of satisfied customers who have transformed their homes and businesses. 
                Try our premium insect control solution today and enjoy immediate results.
              </p>
              
              <div className="pt-4">
                <a 
                  href="#"
                  className="button-hover inline-flex items-center px-8 py-4 bg-white text-forest font-medium rounded-lg shadow-lg hover:shadow-xl"
                >
                  Shop Now <ArrowRight className="ml-2 h-5 w-5" />
                </a>
                
                <p className="mt-4 text-sm text-white/70">
                  30-day money-back guarantee. Free shipping on orders over $50.
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
