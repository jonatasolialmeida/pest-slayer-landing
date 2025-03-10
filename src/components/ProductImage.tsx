
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

interface ProductImageProps {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
}

const ProductImage = ({ src, alt, className, priority = false }: ProductImageProps) => {
  const [isLoading, setIsLoading] = useState(true);
  const [imgSrc, setImgSrc] = useState(src);

  useEffect(() => {
    // Simulate image preloading
    const img = new Image();
    img.src = src;
    img.onload = () => {
      setIsLoading(false);
    };
    
    return () => {
      // Clean up by removing event listener if component unmounts
      img.onload = null;
    };
  }, [src]);

  return (
    <div className={cn("relative overflow-hidden rounded-lg", className)}>
      {isLoading && (
        <div className="absolute inset-0 bg-gray-200 animate-image-shimmer bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 bg-[length:800px_100%]" />
      )}
      <img
        src={imgSrc}
        alt={alt}
        className={cn(
          "w-full h-full object-cover transition-opacity duration-500",
          isLoading ? "opacity-0" : "opacity-100"
        )}
        onError={() => {
          setImgSrc("/placeholder.svg"); // Fallback image if loading fails
          setIsLoading(false);
        }}
      />
    </div>
  );
};

export default ProductImage;
