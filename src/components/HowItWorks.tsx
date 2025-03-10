
import { useState } from "react";
import { cn } from "@/lib/utils";
import { images } from "@/assets/images";
import ProductImage from "./ProductImage";

const HowItWorks = () => {
  const [activeStep, setActiveStep] = useState(0);
  
  const steps = [
    {
      title: "Identify Problem Areas",
      description: "Locate areas with the highest insect activity, typically near windows, doors, trash bins, or food preparation areas.",
      image: images.step1,
    },
    {
      title: "Apply Product",
      description: "Shake well and spray directly on surfaces where insects land or gather. Apply to windowsills, door frames, and other entry points.",
      image: images.step2,
    },
    {
      title: "Enjoy Immediate Results",
      description: "Watch as flying insects are eliminated within minutes. The formula continues working for 24 hours, providing lasting protection.",
      image: images.step3,
    }
  ];

  return (
    <section id="how-it-works" className="py-24 bg-white">
      <div className="section-container">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-charcoal mb-4">
            Three Simple Steps to a <span className="text-gradient">Fly-Free Environment</span>
          </h2>
          <p className="text-gray-600 text-lg">
            Our product is designed for effortless application and maximum effectiveness, 
            giving you peace of mind with minimal effort.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="relative rounded-2xl overflow-hidden h-80 md:h-96 shadow-xl animate-fade-in">
              <div className="absolute inset-0 bg-gradient-to-tr from-forest/10 to-transparent" />
              <ProductImage 
                src={steps[activeStep].image} 
                alt={steps[activeStep].title} 
                className="h-full w-full object-cover"
              />
            </div>
          </div>
          
          <div className="space-y-8">
            {steps.map((step, index) => (
              <div 
                key={index}
                className={cn(
                  "p-6 rounded-xl cursor-pointer transition-all duration-300 animate-fade-in",
                  activeStep === index 
                    ? "bg-white shadow-md border-l-4 border-forest" 
                    : "bg-gray-50 hover:bg-white hover:shadow-sm"
                )}
                onClick={() => setActiveStep(index)}
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className={cn(
                      "h-10 w-10 rounded-full flex items-center justify-center font-semibold",
                      activeStep === index 
                        ? "bg-forest text-white" 
                        : "bg-gray-200 text-gray-600"
                    )}>
                      {index + 1}
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className={cn(
                      "text-xl font-semibold mb-2",
                      activeStep === index ? "text-forest" : "text-charcoal"
                    )}>
                      {step.title}
                    </h3>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
