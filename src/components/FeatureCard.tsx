
import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface FeatureCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  className?: string;
  delay?: number;
}

const FeatureCard = ({ 
  title, 
  description, 
  icon: Icon, 
  className,
  delay = 0 
}: FeatureCardProps) => {
  return (
    <div 
      className={cn(
        "group p-6 bg-white rounded-xl shadow-sm hover:shadow-md card-hover",
        className
      )}
      style={{
        animationDelay: `${delay}ms`
      }}
    >
      <div className="h-12 w-12 bg-forest/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-forest/20 smooth-transition">
        <Icon className="h-6 w-6 text-forest" />
      </div>
      <h3 className="text-xl font-semibold text-charcoal mb-2 group-hover:text-forest smooth-transition">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default FeatureCard;
