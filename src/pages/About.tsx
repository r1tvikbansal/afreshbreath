import React from 'react';
import { motion } from 'framer-motion';
import { Users, FileText, BookOpen } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="min-h-screen bg-soft-white">
      <section className="bg-gradient-to-r from-forest-green to-moss-green text-white section-padding">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            About Our Project
          </motion.h1>
          <p className="text-xl text-moss-green max-w-2xl mx-auto">
            Meet the team and learn about our FBLA Data Analysis journey.
          </p>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-12 text-center"
          >
            <Users className="w-12 h-12 text-forest-green mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-forest-green mb-2">Our Team</h2>
            <p className="text-medium-gray mb-2">
              Ritvik Bansal, Ibrahim Ansari<br />
              North Creek High School
            </p>
            <p className="text-medium-gray">
              This project was created for the FBLA Data Analysis competition to raise awareness and propose actionable solutions for NYC's air quality crisis.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h3 className="text-xl font-semibold text-forest-green mb-4">Resources & Documentation</h3>
            <div className="flex flex-col gap-4">
              <button className="flex items-center gap-2 text-forest-green hover:underline text-left">
                <FileText /> Presentation PDF
              </button>
              <button className="flex items-center gap-2 text-forest-green hover:underline text-left">
                <BookOpen /> Project Documentation
              </button>
              <button className="flex items-center gap-2 text-forest-green hover:underline text-left">
                <BookOpen /> Research Sources
              </button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h3 className="text-xl font-semibold text-forest-green mb-4">Tools & Technologies Used</h3>
            <ul className="text-medium-gray space-y-2">
              <li>• Python (Pandas, Seaborn, Matplotlib)</li>
              <li>• NYC Open Data</li>
              <li>• NYC Environmental Health Data</li>
              <li>• Stanford Research Institute</li>
              <li>• MDPI Research Database</li>
              <li>• React, TypeScript, Tailwind CSS</li>
            </ul>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About; 