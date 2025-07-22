
import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

const Gallery = () => {
  const galleryImages = [
    {
      src: "public/images/снежная королева.jpg",
      alt: "Оркестр на сцене",
      category: "Выступления"
    },
    {
      src: "public/images/CRVCAx3XTKY.jpg",
      alt: "Филармония",
      category: "Локации"
    },
    {
      src: "public/images/i30nvf327oY.jpg",
      alt: "Наши зрители",
      category: "Аудитория"
    },
    {
      src: "public/images/lNw7Pa4aOhk.jpg",
      alt: "Члены оркестра",
      category: "Закулисье"
    },
    {
      src: "public/images/pGGaSRsVfii9H7iKbe_MLbFq4xMFyeD_iMvDrANSLwt9Ao95EeioNlYbnl7Mdm9c-R12FZyIzOeTJ8eZVJwmrZvL.jpg",
      alt: "Концерт-холл",
      category: "Локации"
    },
    {
      src: "public/images/VdejH0tq7L8r0lOoMLM6iNGBXXGnUnnZ60gfkQXcBmwgr81m1u9uCUcfcYyVoUVlfxjG-m-Q1O6Rp0WLAzXatX36.jpg",
      alt: "Музыкальные инструменты",
      category: "Инструменты"
    },
    {
      src: "public/images/ZenmIr3n4wmkPorDWhkpYx_iFOoRbZb_yyvC-bJLN6DwmWiS8GB_IfXW3GtV_DbtfcMAZn92G6hO4a6i7wBKgtaw.jpg",
      alt: "Вечерние концерты",
      category: "Выступления"
    },
    {
      src: "public/images/TqMrB5UxiZg.jpg",
      alt: "Репетиции",
      category: "Закулисье"
    }
  ];

  const [selectedCategory, setSelectedCategory] = useState("All");
  const categories = ["Все", "Выступления", "Локации", "Аудитория", "Закулисье", "Инструменты"];

  const filteredImages = selectedCategory === "All"
    ? galleryImages
    : galleryImages.filter(img => img.category === selectedCategory);

  return (
    <div className="min-h-screen bg-cream">
      <Navigation />
      <ScrollToTop />

      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="font-playfair text-5xl md:text-6xl font-bold text-charcoal mb-6 animate-fade-in">
              Галерея
            </h1>
            <p className="text-xl text-charcoal/70 mb-8 animate-fade-in-up">
              Моменты с наших концертов и закулисья
            </p>
          </div>
        </section>

        {/* Filter Buttons */}
        <section className="px-4 mb-12">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-2 rounded-full transition-all duration-300 ${selectedCategory === category
                    ? "bg-orchestra-red text-white"
                    : "bg-white/70 text-charcoal hover:bg-orchestra-red/10"
                    }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Gallery Grid */}
        <section className="px-4 pb-20">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredImages.map((image, index) => (
                <div
                  key={index}
                  className="relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 animate-fade-in group"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-charcoal/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <div className="p-4 text-white">
                      <p className="font-medium">{image.alt}</p>
                      <span className="text-sm text-white/80">{image.category}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Gallery;
