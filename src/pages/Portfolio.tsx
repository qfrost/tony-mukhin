import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Portfolio: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedWork, setSelectedWork] = useState<any>(null);

  const categories = [
    { id: 'all', label: 'All Work' },
    { id: 'portraits', label: 'Portraits' },
    { id: 'architecture', label: 'Architecture' },
    { id: 'nature', label: 'Nature' },
    { id: 'street', label: 'Street' },
    { id: 'commercial', label: 'Commercial' }
  ];

  const portfolioItems = [
    {
      id: 1,
      title: "Urban Portrait",
      category: "portraits",
      image: "https://images.unsplash.com/photo-1507003211169-01dd7228f2d?w=800&h=600&fit=crop",
      description: "Modern urban portrait capturing the essence of city life."
    },
    {
      id: 2,
      title: "Glass Tower",
      category: "architecture",
      image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=800&h=600&fit=crop",
      description: "Contemporary architecture reflecting modern design principles."
    },
    {
      id: 3,
      title: "Mountain Vista",
      category: "nature",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop",
      description: "Breathtaking mountain landscape at golden hour."
    },
    {
      id: 4,
      title: "Street Scene",
      category: "street",
      image: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=800&h=600&fit=crop",
      description: "Vibrant street photography capturing urban culture."
    },
    {
      id: 5,
      title: "Product Showcase",
      category: "commercial",
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&h=600&fit=crop",
      description: "Professional product photography for commercial use."
    },
    {
      id: 6,
      title: "Corporate Portrait",
      category: "portraits",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=800&h=600&fit=crop",
      description: "Professional headshot for corporate branding."
    },
    {
      id: 7,
      title: "Historic Building",
      category: "architecture",
      image: "https://images.unsplash.com/photo-1518780664697-55e3ad937233?w=800&h=600&fit=crop",
      description: "Classical architecture with modern photographic techniques."
    },
    {
      id: 8,
      title: "Forest Path",
      category: "nature",
      image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&h=600&fit=crop",
      description: "Serene forest landscape with natural lighting."
    },
    {
      id: 9,
      title: "City Lights",
      category: "street",
      image: "https://images.unsplash.com/photo-1519501025264-65ba15a82390?w=800&h=600&fit=crop",
      description: "Urban night photography with dramatic lighting."
    }
  ];

  const filteredItems = activeFilter === 'all' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeFilter);

  return (
    <div className="min-h-screen pt-20">
      {/* Header */}
      <section className="py-20 bg-gradient-to-br from-primary-color to-accent-color text-white">
        <div className="container mx-auto px-6 text-center">
          <motion.h1
            className="text-5xl md:text-6xl font-bold mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Portfolio
          </motion.h1>
          <motion.p
            className="text-xl md:text-2xl max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            A comprehensive collection of my photography work, showcasing diverse styles, 
            techniques, and creative vision across various genres and projects.
          </motion.p>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="py-12 bg-white border-b">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <motion.button
                key={category.id}
                onClick={() => setActiveFilter(category.id)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-200 ${
                  activeFilter === category.id
                    ? 'bg-primary-color text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {category.label}
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            layout
          >
            <AnimatePresence>
              {filteredItems.map((item) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.5 }}
                  className="group cursor-pointer"
                  onClick={() => setSelectedWork(item)}
                >
                  <div className="relative overflow-hidden rounded-lg shadow-lg bg-white">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                      <span className="text-sm text-accent-color font-medium capitalize">
                        {item.category}
                      </span>
                      <h3 className="text-xl font-bold mt-2">{item.title}</h3>
                      <p className="text-gray-200 mt-2">{item.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {filteredItems.length === 0 && (
            <motion.div
              className="text-center py-20"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <p className="text-xl text-gray-500">No items found for this category.</p>
            </motion.div>
          )}
        </div>
      </section>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedWork && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-black/90"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedWork(null)}
          >
            <motion.div
              className="relative max-w-4xl w-full"
              initial={{ scale: 0.8, y: 50 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.8, y: 50 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="absolute top-4 right-4 text-white text-2xl hover:text-accent-color transition-colors duration-200"
                onClick={() => setSelectedWork(null)}
              >
                ✕
              </button>
              <img
                src={selectedWork.image}
                alt={selectedWork.title}
                className="w-full h-auto rounded-lg"
              />
              <div className="mt-4 text-white text-center">
                <h3 className="text-2xl font-bold mb-2">{selectedWork.title}</h3>
                <p className="text-gray-300">{selectedWork.description}</p>
                <span className="inline-block mt-2 px-3 py-1 bg-accent-color text-primary-color rounded-full text-sm font-medium capitalize">
                  {selectedWork.category}
                </span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Portfolio; 