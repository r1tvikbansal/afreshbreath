import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Share2, Download } from 'lucide-react';

const GetInvolved: React.FC = () => {
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
            Get Involved
          </motion.h1>
          <p className="text-xl text-green-100 max-w-2xl mx-auto">
            Join our mission for a healthier NYC. Sign up, share, and spread awareness!
          </p>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="max-w-4xl mx-auto">
          {/* Newsletter Signup */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-2xl font-bold text-forest-green mb-4 flex items-center justify-center gap-2">
              <Mail /> Sign Up for Our Newsletter
            </h2>
            <form className="flex flex-col sm:flex-row gap-4 items-center justify-center">
              <input
                type="email"
                placeholder="Your email address"
                className="px-4 py-3 rounded-lg border border-medium-gray focus:outline-none focus:ring-2 focus:ring-forest-green w-64"
                aria-label="Email address"
                required
              />
              <button type="submit" className="btn-primary">
                Subscribe
              </button>
            </form>
          </motion.div>

          {/* Social Media Graphics */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h3 className="text-xl font-semibold text-forest-green mb-4 flex items-center gap-2">
              <Share2 /> Shareable Social Graphics
            </h3>
            <div className="flex flex-wrap gap-4 justify-center">
              <img src="/social-mask-graphic.png" alt="Promote Mask Usage" className="w-40 h-40 object-cover rounded-lg shadow" />
              <img src="/social-airquality-graphic.png" alt="Promote Air Quality Awareness" className="w-40 h-40 object-cover rounded-lg shadow" />
            </div>
          </motion.div>

          {/* Downloadable Flyer */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h3 className="text-xl font-semibold text-forest-green mb-4 flex items-center gap-2">
              <Download /> Download Our Infographic Flyer
            </h3>
            <a
              href="/nyc-airquality-flyer.pdf"
              download
              className="btn-secondary inline-flex items-center gap-2"
            >
              <Download /> Download Flyer
            </a>
          </motion.div>

          {/* Note for Judges */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <p className="text-medium-gray text-lg font-semibold">
              This website is intended as both a public awareness tool and as part of our FBLA competitive initiative.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default GetInvolved; 