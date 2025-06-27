import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Droplets, AirVent } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const budgetData = [
  { solution: 'N-95 Masks', cost: 1, impact: 15 },
  { solution: 'Misting Stations', cost: 5, impact: 30 },
  { solution: 'Air Towers', cost: 20, impact: 50 },
];

const timelineSteps = [
  { year: '2024', label: 'Pilot Mask Distribution' },
  { year: '2025', label: 'Expand Misting Stations' },
  { year: '2026', label: 'Begin Air Tower Construction' },
  { year: '2027', label: 'Citywide Rollout' },
];

const Solutions: React.FC = () => {
  return (
    <div className="min-h-screen bg-soft-white">
      <section className="bg-gradient-to-r from-forest-green to-moss-green text-white section-padding">
        <div className="max-w-7xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            Our Solutions
          </motion.h1>
          <p className="text-xl text-green-100 max-w-3xl mx-auto">
            Data-driven, scalable, and community-focused interventions for NYC's air quality crisis.
          </p>
        </div>
      </section>

      {/* Solution Cards */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8 mb-12">
          {/* N-95 Masks */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="card text-center"
          >
            <Shield className="w-12 h-12 text-forest-green mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-forest-green mb-3">N-95 Mask Distribution</h3>
            <p className="text-medium-gray mb-2">Short-term, low-cost solution to protect vulnerable populations during high-pollution events.</p>
            <p className="text-sm text-medium-gray">Justification: Masks reduce PM2.5 inhalation by 95%. Estimated cost: $1M/year.</p>
          </motion.div>

          {/* Misting Stations */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="card text-center"
          >
            <Droplets className="w-12 h-12 text-forest-green mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-forest-green mb-3">Water Misting Stations</h3>
            <p className="text-medium-gray mb-2">Mid-term, effective in high-PM zones. Misting reduces airborne particulates in public spaces.</p>
            <p className="text-sm text-medium-gray">Justification: 30% PM2.5 reduction in pilot zones. Estimated cost: $5M/year.</p>
          </motion.div>

          {/* Air Purification Towers */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="card text-center"
          >
            <AirVent className="w-12 h-12 text-forest-green mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-forest-green mb-3">Air Purification Towers</h3>
            <p className="text-medium-gray mb-2">Long-term infrastructure upgrade for citywide air cleaning, especially in dense neighborhoods.</p>
            <p className="text-sm text-medium-gray">Justification: Up to 50% PM2.5 reduction. Estimated cost: $20M/year.</p>
          </motion.div>
        </div>

        {/* Budget & Impact Chart */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="card mb-12"
        >
          <h3 className="text-2xl font-bold text-forest-green mb-6">Budget vs. PM2.5 Reduction Impact</h3>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={budgetData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="solution" />
                <YAxis yAxisId="left" orientation="left" stroke="#24523c" />
                <YAxis yAxisId="right" orientation="right" stroke="#4a7c59" />
                <Tooltip />
                <Bar yAxisId="left" dataKey="cost" fill="#24523c" name="Cost ($M/year)" />
                <Bar yAxisId="right" dataKey="impact" fill="#4a7c59" name="PM2.5 Reduction (%)" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </motion.div>

        {/* Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="card"
        >
          <h3 className="text-2xl font-bold text-forest-green mb-6">4-Year Rollout Timeline</h3>
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            {timelineSteps.map((step, idx) => (
              <div key={step.year} className="flex flex-col items-center flex-1">
                <div className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg mb-2 ${idx === 0 ? 'bg-forest-green text-white' : 'bg-green-50 text-forest-green'}`}>{step.year}</div>
                <span className="text-medium-gray text-center">{step.label}</span>
                {idx < timelineSteps.length - 1 && (
                  <div className="hidden md:block h-1 w-full bg-moss-green my-2" />
                )}
              </div>
            ))}
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default Solutions; 