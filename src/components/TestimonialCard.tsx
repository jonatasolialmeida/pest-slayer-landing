
import { cn } from "@/lib/utils";
import { Star } from "lucide-react";

interface TestimonialCardProps {
  name: string;
  role: string;
  content: string;
  rating: number;
  avatar: string;
  className?: string;
  delay?: number;
}

const TestimonialCard = ({ 
  name, 
  role, 
  content, 
  rating, 
  avatar,
  className,
  delay = 0
}: TestimonialCardProps) => {
  return (
    <div 
      className={cn(
        "bg-white p-6 rounded-xl shadow-sm hover:shadow-md card-hover",
        className
      )}
      style={{
        animationDelay: `${delay}ms`
      }}
    >
      <div className="flex space-x-1 mb-4">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={cn(
              "h-4 w-4",
              i < rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"
            )}
          />
        ))}
      </div>
      
      <p className="text-gray-600 mb-6 italic">"{content}"</p>
      
      <div className="flex items-center">
        <div className="h-12 w-12 rounded-full overflow-hidden mr-4">
          <img src={avatar} alt={name} className="h-full w-full object-cover" />
        </div>
        <div>
          <p className="font-semibold text-charcoal">{name}</p>
          <p className="text-sm text-gray-500">{role}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
