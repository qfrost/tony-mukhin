import React from 'react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  const skills = [
    { name: "Portrait Photography", level: 95 },
    { name: "Architecture Photography", level: 90 },
    { name: "Street Photography", level: 85 },
    { name: "Commercial Photography", level: 88 },
    { name: "Photo Editing", level: 92 },
    { name: "Lighting Techniques", level: 87 }
  ];

  const achievements = [
    { year: "2023", title: "Photographer of the Year", description: "Awarded by Moscow Photography Association" },
    { year: "2022", title: "Best Commercial Portfolio", description: "Recognized at International Photo Awards" },
    { year: "2021", title: "Exhibition at MoMA", description: "Featured in 'Modern Perspectives' collection" },
    { year: "2020", title: "Published in Vogue", description: "Portfolio featured in international edition" }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary-color to-accent-color text-white">
        <div className="container mx-auto px-6 text-center">
          <motion.h1
            className="text-5xl md:text-6xl font-bold mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            About Anton
          </motion.h1>
          <motion.p
            className="text-xl md:text-2xl max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            A passionate photographer with over 8 years of experience capturing life's most precious moments
          </motion.p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold mb-6">My Story</h2>
              <p className="text-lg text-gray-600 mb-6">
                Photography found me during my university years when I was studying computer science. 
                The precision and attention to detail required in both fields created a perfect synergy 
                that shaped my approach to capturing images.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Just as developers craft elegant code solutions, I craft visual narratives through my lens. 
                Every photograph is a carefully composed story, every frame a deliberate choice, and every 
                edit a refinement towards perfection.
              </p>
              <p className="text-lg text-gray-600">
                My technical background gives me a unique perspective on photography - I approach each 
                project with the same systematic thinking and problem-solving mindset that developers use 
                to build software.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=800&fit=crop"
                alt="Anton Muhin"
                className="rounded-lg shadow-2xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-4">Technical Skills</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              My expertise spans various photography genres and technical skills, developed through years of practice and continuous learning
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                className="mb-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="flex justify-between items-center mb-2">
                  <span className="font-medium text-lg">{skill.name}</span>
                  <span className="text-accent-color font-bold">{skill.level}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <motion.div
                    className="bg-gradient-to-r from-primary-color to-accent-color h-3 rounded-full"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    transition={{ duration: 1, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-4">Achievements & Recognition</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Milestones and recognition that mark my journey in photography
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.year}
                className="p-6 border-l-4 border-accent-color bg-gray-50 rounded-r-lg"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ x: 10 }}
              >
                <div className="text-2xl font-bold text-accent-color mb-2">
                  {achievement.year}
                </div>
                <h3 className="text-xl font-bold mb-2">{achievement.title}</h3>
                <p className="text-gray-600">{achievement.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Developer Connection Section */}
      <section className="py-20 bg-primary-color text-white">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6">Why Developers Love My Work</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-12">
              As someone who understands the developer mindset, I create photography that resonates with 
              those who appreciate clean design, technical excellence, and attention to detail.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  icon: "🔧",
                  title: "Technical Precision",
                  description: "Every element is carefully considered, just like well-structured code."
                },
                {
                  icon: "🎯",
                  title: "Clear Purpose",
                  description: "Each image serves a specific function, no unnecessary elements."
                },
                {
                  icon: "🚀",
                  title: "Performance Focused",
                  description: "Optimized for both visual impact and loading performance."
                }
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  className="p-6 rounded-lg bg-white/10 backdrop-blur-sm"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="text-4xl mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                  <p className="text-gray-300">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About; 