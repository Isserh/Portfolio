import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import ContactForm from "./ui/ContactForm";

export default function Contact() {
  const handleSubmit = (data: { name: string; email: string; message: string }) => {
    // Ici, vous pouvez ajouter la logique pour envoyer les données du formulaire
    console.log("Données du formulaire:", data);
  };

  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-violet-500 to-purple-500">
            Contactez-moi
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            N'hésitez pas à me contacter pour discuter de projets ou d'opportunités de collaboration.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div className="space-y-8">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4">Informations de contact</h3>
              <div className="space-y-4">
                <p className="flex items-center text-gray-600 dark:text-gray-400">
                  <span className="mr-2">📧</span>
                  <a href="mailto:votre@email.com" className="hover:text-violet-500 transition-colors">
                    iss.serhani@gmail.com
                  </a>
                </p>
                <p className="flex items-center text-gray-600 dark:text-gray-400">
                  <span className="mr-2">📍</span>
                  Casablanca, Maroc
                </p>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4">Réseaux sociaux</h3>
              <div className="flex space-x-6">
                <a
                  href="https://github.com/votre-username"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 dark:text-gray-400 hover:text-violet-500 transition-colors"
                >
                  <FaGithub size={24} />
                </a>
                <a
                  href="https://linkedin.com/in/votre-profil"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 dark:text-gray-400 hover:text-violet-500 transition-colors"
                >
                  <FaLinkedin size={24} />
                </a>
                <a
                  href="https://twitter.com/votre-compte"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 dark:text-gray-400 hover:text-violet-500 transition-colors"
                >
                  <FaTwitter size={24} />
                </a>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg">
            <ContactForm onSubmit={handleSubmit} />
          </div>
        </div>
      </div>
    </section>
  );
} 