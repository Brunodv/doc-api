import Layout from "./Layout";
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone } from "react-icons/fa";

function Contact() {
  return (
    <Layout>
      <div className="flex flex-col items-center justify-center min-h-screen p-6 text-white">
        <div className="max-w-3xl w-full bg-gray-900 p-8 rounded-lg shadow-lg">
          <h1 className="text-4xl font-bold text-center mb-4">Contáctame</h1>
          <p className="text-lg text-center mb-6">
            Si tienes alguna consulta, propuesta o simplemente quieres saludar, ¡no dudes en escribirme!
          </p>

          {/* Redes sociales */}
          <div className="flex flex-col items-center bg-gray-800 p-6 rounded-lg shadow-md mb-8">
            <div className="flex flex-col sm:flex-row gap-6">
              <a
                href="https://github.com/Brunodv"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-xl hover:text-gray-400 transition"
              >
                <FaGithub size={24} /> GitHub
              </a>

              <a
                href="https://www.linkedin.com/in/bruno-dulanto-valentin-bbb1bb148/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-xl hover:text-gray-400 transition"
              >
                <FaLinkedin size={24} /> LinkedIn
              </a>

              <a
                href="mailto:dulanto.valentin.bruno@gmail.com"
                className="flex items-center gap-3 text-xl hover:text-gray-400 transition"
              >
                <FaEnvelope size={24} /> Correo
              </a>

              <p className="flex items-center gap-3 text-xl">
                <FaPhone size={24} /> +51977631700
              </p>
            </div>
          </div>

          {/* Formulario de contacto */}
          <div className="text-center bg-gray-800 p-6 rounded-lg shadow-md">
            <a href="https://bruno-cv.web.app">https://bruno-cv.web.app</a>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Contact;
