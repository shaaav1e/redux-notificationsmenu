import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import React from "react";

// Football image URLs
const images = [
  "https://images.unsplash.com/photo-1575361204480-aadea25e6e68?q=80&w=600&auto=format",
  "https://images.unsplash.com/photo-1575361204480-aadea25e6e68?q=80&w=600&auto=format",
  "https://images.unsplash.com/photo-1575361204480-aadea25e6e68?q=80&w=600&auto=format",
  "https://images.unsplash.com/photo-1575361204480-aadea25e6e68?q=80&w=600&auto=format",
];

const Carousell = () => {
  return (
    <div className="w-full max-w-3xl mx-auto py-8">
      <h2 className="text-2xl font-bold text-center mb-4">Football Gallery</h2>
      <Carousel className="w-full">
        <CarouselContent>
          <CarouselItem className="md:basis-1/2 lg:basis-2/3">
            <img
              src={images[0]}
              alt="Football action shot"
              className="w-full h-64 object-cover rounded-md"
            />
          </CarouselItem>
          <CarouselItem className="md:basis-1/2 lg:basis-2/3">
            <img
              src={images[1]}
              alt="Football stadium"
              className="w-full h-64 object-cover rounded-md"
            />
          </CarouselItem>
          <CarouselItem className="md:basis-1/2 lg:basis-2/3">
            <img
              src={images[2]}
              alt="Football match"
              className="w-full h-64 object-cover rounded-md"
            />
          </CarouselItem>
          <CarouselItem className="md:basis-1/2 lg:basis-2/3">
            <img
              src={images[3]}
              alt="Football celebration"
              className="w-full h-64 object-cover rounded-md"
            />
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};

export default Carousell;
