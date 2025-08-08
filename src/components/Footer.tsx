import React from 'react';
import { motion } from 'framer-motion';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { name: 'Instagram', url: 'https://instagram.com/antonmuhin', icon: '📸' },
    { name: 'Behance', url: 'https://behance.net/antonmuhin', icon: '🎨' },
    { name: 'LinkedIn', url: 'https://linkedin.com/in/antonmuhin', icon: '💼' },
    { name: 'Email', url: 'mailto:hello@antonmuhin.com', icon: '✉️' }
  ];

  return (
    <footer className="bg-black border-t border-gray-800 py-16 lg:ml-80">
      <div className="px-6 lg:px-12">
        <div className="text-center">
          {/* Social Links */}
          <motion.div
            className="flex justify-center gap-8 mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            {socialLinks.map((link) => (
              <motion.a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-green-400 transition-colors duration-200 text-lg"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                {link.icon} {link.name}
              </motion.a>
            ))}
          </motion.div>

          {/* Copyright */}
          <motion.div
            className="text-gray-500"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <p>&copy; {currentYear} Anton Muhin. All rights reserved.</p>
            <p className="text-sm mt-2 text-gray-600">
              Crafted with precision for those who appreciate beautiful design
            </p>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 