import React from 'react';
import { motion } from "framer-motion";
import { Mail, Linkedin, Github } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "milindkrishna1998@gmail.com",
      href: "mailto:milindkrishna1998@gmail.com",
      delay: 0.1
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "LinkedIn Profile",
      href: "https://www.linkedin.com/in/milindkrishna",
      delay: 0.2
    }
  ];

  const socialLinks = [
    { icon: Linkedin, href: "https://www.linkedin.com/in/milindkrishna", label: "LinkedIn" },
    { icon: Github, href: "https://github.com/milindkrishna?tab=repositories", label: "GitHub" }
  ];

  return (
    <section id="contact" className="py-10 px-4 sm:px-6 md:px-16 bg-white select-none">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-32 h-32 bg-blue-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-blue-300 rounded-full blur-3xl"></div>
      </div>

      <motion.div
        className="max-w-4xl mx-auto relative z-1"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        {/* Header */}
        <div className="text-center mb-12">
          <motion.h2 
            className="text-5xl font-extrabold text-gray-800 mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Let's <span className="text-blue-600 relative">
              Connect
              <motion.div 
                className="absolute -bottom-2 left-0 right-0 h-1 bg-blue-500 rounded-full"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                viewport={{ once: true }}
              />
            </span>
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            I'm always excited to discuss new opportunities, collaborate on projects, 
            or simply have a conversation about technology and innovation.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-start">
          {/* Contact Information */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Get In Touch</h3>
            
            {contactInfo.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: item.delay }}
                viewport={{ once: true }}
                className="group"
              >
                <a
                  href={item.href}
                  target={item.href.startsWith('http') ? '_blank' : undefined}
                  rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="flex items-center gap-4 p-4 rounded-xl bg-white shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-gray-100"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center group-hover:bg-blue-200 transition-colors duration-300">
                    <item.icon className="text-2xl text-blue-600" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm text-gray-500 font-medium">{item.label}</p>
                    <p className="text-gray-800 font-semibold group-hover:text-blue-600 transition-colors duration-300">
                      {item.value}
                    </p>
                  </div>
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </div>
                </a>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl p-6 text-white relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-24 h-24 bg-white opacity-10 rounded-full -translate-y-12 translate-x-12"></div>
            <div className="absolute bottom-0 left-0 w-20 h-20 bg-white opacity-10 rounded-full translate-y-10 -translate-x-10"></div>
            
            <div className="relative z-1">
              <h3 className="text-2xl font-bold mb-2">Ready to Start Something Great?</h3>
              <p className="text-blue-100 mb-4 text-sm leading-relaxed">
               I'm always open to connecting with like-minded professionals and exploring new opportunities to grow and contribute in this space.
              </p>
              
              <motion.a
                href="mailto:milindkrishna1998@gmail.com"
                className="inline-flex items-center gap-2 bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors duration-300 shadow-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Mail className="text-xl" />
                Send Message
              </motion.a>

              {/* Social Links */}
              <div className="mt-8 pt-6 border-t border-blue-500">
                <p className="text-blue-200 text-sm mb-4">Follow me on social media</p>
                <div className="flex gap-4">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-white bg-opacity-20 rounded-lg flex items-center justify-center hover:bg-opacity-30 transition-all duration-300"
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      title={social.label}
                    >
                      <social.icon className="text-xl" />
                    </motion.a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Contact;