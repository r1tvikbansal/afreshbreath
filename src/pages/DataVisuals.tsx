import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar, ScatterChart, Scatter } from 'recharts';
import { Filter, Download, ExternalLink } from 'lucide-react';

const DataVisuals: React.FC = () => {
  const [selectedPollutant, setSelectedPollutant] = useState('PM2.5');

  // Sample data for charts
  const seasonalData = [
    { month: 'Jan', PM2_5: 12, NO2: 45, Ozone: 25 },
    { month: 'Feb', PM2_5: 15, NO2: 42, Ozone: 28 },
    { month: 'Mar', PM2_5: 18, NO2: 48, Ozone: 32 },
    { month: 'Apr', PM2_5: 22, NO2: 52, Ozone: 38 },
    { month: 'May', PM2_5: 25, NO2: 55, Ozone: 45 },
    { month: 'Jun', PM2_5: 28, NO2: 58, Ozone: 52 },
    { month: 'Jul', PM2_5: 35, NO2: 62, Ozone: 58 },
    { month: 'Aug', PM2_5: 38, NO2: 65, Ozone: 62 },
    { month: 'Sep', PM2_5: 32, NO2: 60, Ozone: 55 },
    { month: 'Oct', PM2_5: 28, NO2: 56, Ozone: 48 },
    { month: 'Nov', PM2_5: 20, NO2: 50, Ozone: 35 },
    { month: 'Dec', PM2_5: 15, NO2: 45, Ozone: 28 },
  ];

  const trendData = [
    { year: 2010, PM2_5: 15, NO2: 50, Ozone: 30 },
    { year: 2012, PM2_5: 18, NO2: 52, Ozone: 32 },
    { year: 2014, PM2_5: 20, NO2: 54, Ozone: 35 },
    { year: 2016, PM2_5: 22, NO2: 56, Ozone: 38 },
    { year: 2018, PM2_5: 25, NO2: 58, Ozone: 42 },
    { year: 2020, PM2_5: 30, NO2: 62, Ozone: 48 },
    { year: 2022, PM2_5: 35, NO2: 65, Ozone: 52 },
  ];

  const correlationData = [
    { pollutant: 15, hospitalVisits: 120 },
    { pollutant: 20, hospitalVisits: 150 },
    { pollutant: 25, hospitalVisits: 180 },
    { pollutant: 30, hospitalVisits: 220 },
    { pollutant: 35, hospitalVisits: 280 },
    { pollutant: 40, hospitalVisits: 350 },
    { pollutant: 45, hospitalVisits: 420 },
  ];

  const getPollutantKey = (pollutant: string) => {
    switch (pollutant) {
      case 'PM2.5': return 'PM2_5';
      case 'NO₂': return 'NO2';
      case 'Ozone': return 'Ozone';
      default: return 'PM2_5';
    }
  };

  const pollutantKey = getPollutantKey(selectedPollutant);

  return (
    <div className="min-h-screen bg-soft-white">
      {/* Header */}
      <section className="bg-gradient-to-r from-forest-green to-moss-green text-white section-padding">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Data & Visuals
            </h1>
            <p className="text-xl text-green-100 max-w-3xl mx-auto">
              Explore our comprehensive analysis of NYC's air quality data, 
              revealing the impact of wildfires and pollution trends.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-8"
          >
            <div className="flex flex-col sm:flex-row items-center justify-between bg-green-50 p-6 rounded-lg">
              <div className="flex items-center mb-4 sm:mb-0">
                <Filter className="w-5 h-5 text-forest-green mr-2" />
                <span className="text-forest-green font-semibold">Filter by Pollutant:</span>
              </div>
              <div className="flex space-x-2">
                {['PM2.5', 'NO₂', 'Ozone'].map((pollutant) => (
                  <button
                    key={pollutant}
                    onClick={() => setSelectedPollutant(pollutant)}
                    className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                      selectedPollutant === pollutant
                        ? 'bg-forest-green text-white'
                        : 'bg-white text-forest-green border border-forest-green hover:bg-green-50'
                    }`}
                  >
                    {pollutant}
                  </button>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Chart 1: Seasonal Variation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="card mb-8"
          >
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-bold text-forest-green">
                Seasonal Variation in {selectedPollutant} Levels
              </h3>
              <div className="flex space-x-2">
                <button className="p-2 text-forest-green hover:bg-green-50 rounded-lg">
                  <Download size={20} />
                </button>
                <button className="p-2 text-forest-green hover:bg-green-50 rounded-lg">
                  <ExternalLink size={20} />
                </button>
              </div>
            </div>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={seasonalData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip />
                  <Line 
                    type="monotone" 
                    dataKey={pollutantKey} 
                    stroke="#24523c" 
                    strokeWidth={3}
                    dot={{ fill: '#24523c', strokeWidth: 2, r: 4 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
            <p className="text-sm text-medium-gray mt-4">
              Source: NYC Open Data, NYC Environmental Health
            </p>
          </motion.div>

          {/* Chart 2: Long-term Trends */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="card mb-8"
          >
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-bold text-forest-green">
                Average {selectedPollutant} Trends (2010-2022)
              </h3>
              <div className="flex space-x-2">
                <button className="p-2 text-forest-green hover:bg-green-50 rounded-lg">
                  <Download size={20} />
                </button>
                <button className="p-2 text-forest-green hover:bg-green-50 rounded-lg">
                  <ExternalLink size={20} />
                </button>
              </div>
            </div>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={trendData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="year" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey={pollutantKey} fill="#24523c" />
                </BarChart>
              </ResponsiveContainer>
            </div>
            <p className="text-sm text-medium-gray mt-4">
              Source: NYC Open Data, MDPI Research Database
            </p>
          </motion.div>

          {/* Chart 3: Health Correlation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="card"
          >
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-bold text-forest-green">
                Correlation: {selectedPollutant} vs. Hospital Visits
              </h3>
              <div className="flex space-x-2">
                <button className="p-2 text-forest-green hover:bg-green-50 rounded-lg">
                  <Download size={20} />
                </button>
                <button className="p-2 text-forest-green hover:bg-green-50 rounded-lg">
                  <ExternalLink size={20} />
                </button>
              </div>
            </div>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <ScatterChart data={correlationData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="pollutant" name="Pollutant Level" />
                  <YAxis dataKey="hospitalVisits" name="Hospital Visits" />
                  <Tooltip />
                  <Scatter dataKey="hospitalVisits" fill="#24523c" />
                </ScatterChart>
              </ResponsiveContainer>
            </div>
            <p className="text-sm text-medium-gray mt-4">
              Source: NYC Health Department, Stanford Research Institute
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default DataVisuals; 