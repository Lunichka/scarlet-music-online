
import { useState } from "react";

const Gallery = () => {
  const galleryImages = [
    {
      src: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      alt: "Orchestra performing on stage"
    },
    {
      src: "https://images.unsplash.com/photo-1500673922987-e212871fec22?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      alt: "Concert hall atmosphere"
    },
    {
      src: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      alt: "Audience enjoying performance"
    },
    {
      src: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      alt: "Orchestra members"
    }
  ];

  return (
    <section id="gallery" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-playfair text-4xl md:text-5xl font-bold text-center mb-4 text-charcoal animate-fade-in">
          Галерея
        </h2>
        <p className="text-center text-lg text-charcoal/70 mb-12 max-w-2xl mx-auto animate-fade-in">
          Моменты с наших концертов и закулисья
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 animate-fade-in"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-64 object-cover transition-transform duration-300 hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
