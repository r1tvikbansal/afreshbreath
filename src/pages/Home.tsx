import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { TrendingUp, Users, AlertTriangle, Activity } from 'lucide-react';

const Home: React.FC = () => {
  return (
    <div className="min-h-screen relative">
      {/* Background Image with Subtle Blur/Overlay */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/nyc-smog.png')" }}
      >
        <div className="absolute inset-0 bg-white/10 backdrop-blur-sm" />
      </div>
      {/* Hero Section */}
      <section className="relative z-10 flex flex-col items-center justify-center min-h-screen text-center text-black px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6 drop-shadow-lg">
            A Fresh Breath
          </h1>
          <p className="text-2xl md:text-3xl mb-8 text-forest-green drop-shadow">
            Fighting NYC's Air Pollution Crisis
          </p>
          <p className="text-xl mb-12 max-w-3xl mx-auto text-medium-gray drop-shadow">
            NYC's air isn't what it used to be
          </p>
          <Link to="/crisis" className="btn-primary inline-flex items-center text-lg px-8 py-4">
            See the Impact
          </Link>
        </motion.div>
      </section>
      {/* Quick Stats Section */}
      <section className="relative z-10 section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="card text-center"
            >
              <TrendingUp className="w-12 h-12 text-forest-green mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-forest-green mb-2">
                ↑ 3x Increase
              </h3>
              <p className="text-medium-gray">
                in PM2.5 after 2023 Wildfires
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="card text-center"
            >
              <Users className="w-12 h-12 text-forest-green mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-forest-green mb-2">
                8 in 10
              </h3>
              <p className="text-medium-gray">
                NYC residents breathe polluted air daily
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="card text-center"
            >
              <AlertTriangle className="w-12 h-12 text-forest-green mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-forest-green mb-2">
                Communities of Color
              </h3>
              <p className="text-medium-gray">
                hit hardest – EPA
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="card text-center"
            >
              <Activity className="w-12 h-12 text-forest-green mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-forest-green mb-2">
                Asthma ER visits
              </h3>
              <p className="text-medium-gray">
                up 20% from 2019–2023
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home; 