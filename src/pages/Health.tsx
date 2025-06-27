import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { PieChart, Pie, Cell, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Eye, EyeOff, Heart, Activity } from 'lucide-react';

const boroughAsthma = [
  { borough: 'Bronx', rate: 180 },
  { borough: 'Brooklyn', rate: 150 },
  { borough: 'Manhattan', rate: 120 },
  { borough: 'Queens', rate: 140 },
  { borough: 'Staten Island', rate: 100 },
];

const hospitalVisits = [
  { cause: 'PM2.5 Related', value: 45, color: '#24523c' },
  { cause: 'Ozone Related', value: 35, color: '#4b5563' },
  { cause: 'Other Causes', value: 20, color: '#dbe4db' },
];

const cardioPollution = [
  { pollution: 'Low', visits: 80 },
  { pollution: 'Medium', visits: 120 },
  { pollution: 'High', visits: 180 },
  { pollution: 'Very High', visits: 250 },
];

const Health: React.FC = () => {
  const [highContrast, setHighContrast] = useState(false);
  
  return (
    <div className="min-h-screen bg-soft-white">
      <section className="w-full bg-white/90 border-b border-moss-green section-padding pb-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.8 }} 
            className="text-4xl md:text-5xl font-bold mb-6 text-forest-green"
          >
            Your Lungs, Your Heart, Your Life
          </motion.h1>
          <p className="text-xl text-medium-gray max-w-2xl mx-auto">
            How air pollution directly impacts your health
          </p>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="max-w-6xl mx-auto">
          {/* Borough Asthma Rates */}
          <div className="grid md:grid-cols-2 gap-12 mb-12">
            <motion.div 
              initial={{ opacity: 0 }} 
              whileInView={{ opacity: 1 }} 
              transition={{ duration: 0.8 }} 
              viewport={{ once: true }}
              className="card"
            >
              <h2 className="text-xl font-bold text-forest-green mb-4">Asthma Hospitalization Rates by Borough</h2>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={boroughAsthma}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="borough" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="rate" fill="#24523c" />
                </BarChart>
              </ResponsiveContainer>
              <p className="text-sm text-medium-gray mt-2">Source: NYC Health Department</p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0 }} 
              whileInView={{ opacity: 1 }} 
              transition={{ duration: 0.8, delay: 0.1 }} 
              viewport={{ once: true }}
              className="card"
            >
              <h2 className="text-xl font-bold text-forest-green mb-4">Hospital Visits Linked to Air Pollution</h2>
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={hospitalVisits}
                    cx="50%"
                    cy="50%"
                    outerRadius={100}
                    dataKey="value"
                    label={({ cause, value }) => `${cause}: ${value}%`}
                  >
                    {hospitalVisits.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
              <p className="text-sm text-medium-gray mt-2">Source: NYC Health Department</p>
            </motion.div>
          </div>

          {/* Cardiovascular Chart */}
          <motion.div 
            initial={{ opacity: 0 }} 
            whileInView={{ opacity: 1 }} 
            transition={{ duration: 0.8 }} 
            viewport={{ once: true }}
            className="card mb-12"
          >
            <h2 className="text-xl font-bold text-forest-green mb-4">Cardiovascular Visits vs. Pollution Levels</h2>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={cardioPollution}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="pollution" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="visits" fill="#4b5563" />
              </BarChart>
            </ResponsiveContainer>
            <p className="text-sm text-medium-gray mt-2">Source: NYC Health Department</p>
          </motion.div>

          {/* WHO Quote */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.6 }} 
            viewport={{ once: true }}
            className="card mb-12"
          >
            <blockquote className="text-center">
              <p className="text-2xl italic text-forest-green mb-4">
                "Air pollution kills 7 million people globally each year"
              </p>
              <p className="text-medium-gray">— World Health Organization</p>
            </blockquote>
          </motion.div>

          {/* Health Infographic */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.6 }} 
            viewport={{ once: true }}
            className="card"
          >
            <h2 className="text-xl font-bold text-forest-green mb-6">How Air Pollution Affects Your Body</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="text-center">
                <Activity className="w-16 h-16 text-forest-green mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-forest-green mb-2">Ozone (O₃) Inflames Lungs</h3>
                <p className="text-medium-gray">
                  Ozone irritates lung tissue, causing inflammation and making breathing difficult. 
                  It can trigger asthma attacks and worsen existing respiratory conditions.
                </p>
              </div>
              <div className="text-center">
                <Heart className="w-16 h-16 text-forest-green mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-forest-green mb-2">PM2.5 Enters Bloodstream</h3>
                <p className="text-medium-gray">
                  Fine particles bypass lung defenses and enter the bloodstream, 
                  causing inflammation throughout the body and increasing heart attack risk.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Health; 