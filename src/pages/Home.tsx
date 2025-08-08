import React from 'react';
import { motion } from 'framer-motion';

const Home: React.FC = () => {
  const featuredWork = [
    {
      id: 1,
      title: "Urban Architecture",
      category: "Architecture",
      image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=800&h=1200&fit=crop",
      description: "Modern cityscapes that capture the essence of contemporary urban life."
    },
    {
      id: 2,
      title: "Portrait Series",
      category: "Portraits",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=1000&fit=crop",
      description: "Intimate portraits revealing the human spirit through natural light."
    },
    {
      id: 3,
      title: "Nature's Patterns",
      category: "Nature",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=800&fit=crop",
      description: "Abstract patterns found in nature's most beautiful landscapes."
    },
    {
      id: 4,
      title: "Street Photography",
      category: "Street",
      image: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=800&h=1400&fit=crop",
      description: "Capturing the raw energy and stories of urban life."
    },
    {
      id: 5,
      title: "Commercial Work",
      category: "Commercial",
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&h=600&fit=crop",
      description: "Professional photography for brands and businesses."
    },
    {
      id: 6,
      title: "Behind the Scenes",
      category: "BTS",
      image: "https://images.unsplash.com/photo-1518780664697-55e3ad937233?w=800&h=1200&fit=crop",
      description: "The process behind creating stunning photography."
    },
    {
      id: 7,
      title: "Fashion Editorial",
      category: "Fashion",
      image: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=800&h=1600&fit=crop",
      description: "High-end fashion photography with artistic vision."
    },
    {
      id: 8,
      title: "Lifestyle Stories",
      category: "Lifestyle",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=900&fit=crop",
      description: "Authentic moments that tell compelling stories."
    },
    {
      id: 9,
      title: "Abstract Minimalism",
      category: "Abstract",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=1100&fit=crop",
      description: "Clean lines and geometric shapes in architectural photography."
    },
    {
      id: 10,
      title: "Documentary Style",
      category: "Documentary",
      image: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=800&h=1300&fit=crop",
      description: "Capturing real moments and authentic human experiences."
    },
    {
      id: 11,
      title: "Fine Art",
      category: "Fine Art",
      image: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=800&h=1000&fit=crop",
      description: "Artistic photography that transcends traditional boundaries."
    },
    {
      id: 12,
      title: "Product Photography",
      category: "Product",
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&h=700&fit=crop",
      description: "Professional product shots that showcase quality and design."
    },
    {
      id: 13,
      title: "Night Photography",
      category: "Night",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=1200&fit=crop",
      description: "Capturing the magic of urban nights and city lights."
    },
    {
      id: 14,
      title: "Travel Stories",
      category: "Travel",
      image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=800&h=900&fit=crop",
      description: "Journeys around the world through the lens of adventure."
    },
    {
      id: 15,
      title: "Studio Portraits",
      category: "Studio",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=1400&fit=crop",
      description: "Professional studio photography with controlled lighting."
    }
  ];

  return (
    <div className="min-h-screen bg-black lg:pl-80">
      {/* Main Content Area */}
      <main className="pt-20 lg:pt-0">
        {/* Masonry Photography Layout */}
        <section className="px-6 lg:px-12 py-12">
          <motion.div
            className="portfolio-masonry"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {featuredWork.map((work, index) => (
              <motion.div
                key={work.id}
                className="portfolio-item group cursor-pointer"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="relative overflow-hidden bg-gray-900 rounded-lg shadow-lg">
                  <img
                    src={work.image}
                    alt={work.title}
                    className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-500"></div>
                  
                  {/* Image Info on Hover */}
                  <div className="absolute bottom-0 left-0 right-0 p-8 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                    <div className="bg-black/80 backdrop-blur-sm p-6 rounded-lg">
                      <span className="text-sm text-green-400 font-medium uppercase tracking-wider">
                        {work.category}
                      </span>
                      <h3 className="text-2xl font-light mt-3 mb-2">{work.title}</h3>
                      <p className="text-gray-200 text-sm leading-relaxed">{work.description}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* Contact CTA */}
        <section className="px-6 lg:px-12 py-20 text-center">
          <motion.div
            className="max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-light mb-6 text-white">
              Let's Create Something Amazing
            </h2>
            <p className="text-xl text-gray-300 mb-8 font-light">
              Ready to bring your vision to life? I'm available for projects worldwide.
            </p>
            <a 
              href="mailto:hello@antonmuhin.com"
              className="inline-block bg-green-600 text-white px-8 py-4 text-lg font-medium tracking-wider uppercase hover:bg-green-700 transition-colors duration-200"
            >
              Get In Touch
            </a>
          </motion.div>
        </section>
      </main>
    </div>
  );
};

export default Home; 