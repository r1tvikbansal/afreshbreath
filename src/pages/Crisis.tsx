import React from 'react';
import { motion } from 'framer-motion';
import { PieChart, Pie, Cell, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line } from 'recharts';

const pollutantData = [
  { name: 'PM2.5', value: 35, color: '#24523c' },
  { name: 'Ozone', value: 25, color: '#4b5563' },
  { name: 'NO₂', value: 20, color: '#dbe4db' },
  { name: 'CO', value: 15, color: '#9ca3af' },
  { name: 'SO₂', value: 5, color: '#6b7280' },
];

const pm25Timeline = [
  { year: '2010', PM25: 15 },
  { year: '2015', PM25: 18 },
  { year: '2020', PM25: 22 },
  { year: '2022', PM25: 25 },
  { year: '2023', PM25: 45 },
];

const wildfireAsthma = [
  { month: 'May', wildfires: 0, asthma: 120 },
  { month: 'Jun', wildfires: 1, asthma: 180 },
  { month: 'Jul', wildfires: 1, asthma: 200 },
  { month: 'Aug', wildfires: 1, asthma: 190 },
  { month: 'Sep', wildfires: 0, asthma: 140 },
];

const timelineEvents = [
  { date: 'June 6', event: 'First wildfire smoke reaches NYC', level: 'Moderate' },
  { date: 'June 7', event: 'PM2.5 levels spike to 150+ µg/m³', level: 'High' },
  { date: 'July 15', event: 'Second wave of smoke hits', level: 'High' },
  { date: 'August 20', event: 'Third major smoke event', level: 'Moderate' },
  { date: 'September 5', event: 'Final smoke wave clears', level: 'Low' },
];

const Crisis: React.FC = () => (
  <div className="min-h-screen bg-soft-white">
    <section className="w-full bg-white/90 border-b border-moss-green section-padding pb-8">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.8 }} 
          className="text-4xl md:text-5xl font-bold mb-6 text-forest-green"
        >
          The Crisis
        </motion.h1>
        <p className="text-xl text-medium-gray max-w-2xl mx-auto">
          Understanding what's happening to NYC's air quality
        </p>
      </div>
    </section>

    <section className="section-padding bg-white">
      <div className="max-w-6xl mx-auto">
        {/* What's Happening Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.6 }} 
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-3xl font-bold text-forest-green mb-6">What's happening?</h2>
          <p className="text-lg text-medium-gray mb-6">
            Canadian wildfires in 2023 sent unprecedented amounts of smoke and pollutants into NYC's air. 
            PM2.5 levels reached 3x normal levels, ozone concentrations spiked, and millions of New Yorkers 
            experienced dangerous air quality for weeks on end.
          </p>
          <blockquote className="bg-moss-green p-6 rounded-2xl border-l-4 border-forest-green">
            <p className="text-lg italic text-forest-green mb-2">
              "People of color breathe more pollution across all incomes"
            </p>
            <p className="text-medium-gray">— EPA</p>
          </blockquote>
        </motion.div>

        {/* Pollutant Breakdown */}
        <div className="grid md:grid-cols-2 gap-12 mb-12">
          <motion.div 
            initial={{ opacity: 0 }} 
            whileInView={{ opacity: 1 }} 
            transition={{ duration: 0.8 }} 
            viewport={{ once: true }}
            className="card"
          >
            <h3 className="text-xl font-bold text-forest-green mb-4">Air Pollutants Breakdown</h3>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={pollutantData}
                  cx="50%"
                  cy="50%"
                  outerRadius={100}
                  dataKey="value"
                  label={({ name, percent }) => `${name} ${percent ? (percent * 100).toFixed(0) : 0}%`}
                >
                  {pollutantData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }} 
            whileInView={{ opacity: 1 }} 
            transition={{ duration: 0.8, delay: 0.1 }} 
            viewport={{ once: true }}
            className="card"
          >
            <h3 className="text-xl font-bold text-forest-green mb-4">PM2.5 Levels Over Time</h3>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={pm25Timeline}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="year" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="PM25" fill="#24523c" />
              </BarChart>
            </ResponsiveContainer>
            <p className="text-sm text-medium-gray mt-2">Source: NYC Open Data</p>
          </motion.div>
        </div>

        {/* Wildfire vs Asthma */}
        <motion.div 
          initial={{ opacity: 0 }} 
          whileInView={{ opacity: 1 }} 
          transition={{ duration: 0.8 }} 
          viewport={{ once: true }}
          className="card mb-12"
        >
          <h3 className="text-xl font-bold text-forest-green mb-4">Wildfire Months vs. Asthma Visits</h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={wildfireAsthma}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="asthma" stroke="#24523c" strokeWidth={3} name="Asthma Visits" />
              <Line type="monotone" dataKey="wildfires" stroke="#4b5563" strokeWidth={3} name="Wildfire Events" />
            </LineChart>
          </ResponsiveContainer>
          <p className="text-sm text-medium-gray mt-2">Source: NYC Health Department</p>
        </motion.div>

        {/* Timeline */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.6 }} 
          viewport={{ once: true }}
          className="card"
        >
          <h3 className="text-xl font-bold text-forest-green mb-6">June–September 2023 Wildfire Timeline</h3>
          <div className="space-y-4">
            {timelineEvents.map((event, index) => (
              <div key={index} className="flex items-center space-x-4 p-4 bg-moss-green rounded-2xl">
                <div className="w-16 text-center">
                  <div className="text-sm font-semibold text-forest-green">{event.date}</div>
                </div>
                <div className="flex-1">
                  <p className="text-medium-gray">{event.event}</p>
                </div>
                <div className={`px-3 py-1 rounded-full text-sm font-medium ${
                  event.level === 'High' ? 'bg-red-100 text-red-800' :
                  event.level === 'Moderate' ? 'bg-yellow-100 text-yellow-800' :
                  'bg-green-100 text-green-800'
                }`}>
                  {event.level}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  </div>
);

export default Crisis; 