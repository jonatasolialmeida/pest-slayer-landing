
import TestimonialCard from "./TestimonialCard";
import { images } from "@/assets/images";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Emma Thompson",
      role: "Restaurant Owner",
      content: "After trying numerous products with limited success, PestZero has completely eliminated our fly problem. Our customers have noticed the difference immediately.",
      rating: 5,
      avatar: images.avatar1,
      delay: 100
    },
    {
      name: "Michael Garcia",
      role: "Homeowner",
      content: "Living near a park meant constant insect issues, especially in summer. This spray works exactly as advertised - quick, effective, and long-lasting protection.",
      rating: 5,
      avatar: images.avatar2,
      delay: 200
    },
    {
      name: "Sarah Johnson",
      role: "Cafe Manager",
      content: "The outdoor seating area of our cafe was unusable due to flies. Since using this product, our customers can enjoy their meals in peace. Worth every penny!",
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
            What Our <span className="text-gradient">Customers</span> Are Saying
          </h2>
          <p className="text-gray-600 text-lg">
            Join thousands of satisfied customers who have transformed their spaces 
            with our premium insect control solutions.
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
            <span className="text-forest font-bold">4.9/5</span> average rating from over 10,000 customers
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
