import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Layout from "./Layout";
import useSyntaxHighlight from "../hooks/useSyntaxHighlight";

function Home() {
  const [apiResponse, setApiResponse] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [apiStatus, setApiStatus] = useState("off");
  const [isCheckingAPI, setIsCheckingAPI] = useState(false);

const checkAPIStatus = async () => {
  setIsCheckingAPI(true);
  try {
    const response = await fetch('https://nodemysql-its2.onrender.com/api/clients');
    if (response.ok) {
      setApiStatus("On");
    } else {
      setApiStatus("Off");
    }
  } catch {
    setApiStatus("Off");
  } finally {
    setIsCheckingAPI(false);
  }
};

  // Función para realizar la petición GET con fetch
  const handleFetchClients = async () => {
    if (apiStatus !== "On") {
      setError("La API aún no está encendida. Intenta nuevamente en unos segundos.");
      return;
    }
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch('https://nodemysql-its2.onrender.com/api/clients');
      const data = await response.json();
      setApiResponse(data);
    } catch (error) {
      console.error('Error fetching clients:', error);
      setError('Hubo un error al obtener los datos.');
    } finally {
      setIsLoading(false);
    }
  };

  const { highlightJSCode } = useSyntaxHighlight();
  const request = `
    fetch("https://nodemysql-its2.onrender.com/api/clients")
      .then(response => response.json())
      .then(data => console.log(data));
  `;
  

  const endpoints = [
    { method: "GET", url: "/api/clients", desc: "Lista de clientes", color: "text-blue-600" },
    { method: "GET", url: "/api/clients/:id", desc: "Detalles de un cliente", color: "text-blue-600" },
    { method: "POST", url: "/api/clients", desc: "Crear un cliente", color: "text-green-600" },
    { method: "PATCH", url: "/api/clients/:id", desc: "Actualizar un cliente", color: "text-yellow-300" },
    { method: "DELETE", url: "/api/clients/:id", desc: "Eliminar un cliente", color: "text-red-600" },

    { method: "GET", url: "/api/orders", desc: "Lista de órdenes", color: "text-blue-600" },
    { method: "GET", url: "/api/orders/:id", desc: "Detalles de una orden", color: "text-blue-600" },
    { method: "POST", url: "/api/orders", desc: "Crear una orden", color: "text-green-600" },
    { method: "PATCH", url: "/api/orders/:id", desc: "Actualizar una orden", color: "text-yellow-300" },
    { method: "DELETE", url: "/api/orders/:id", desc: "Eliminar una orden", color: "text-red-600" },

    { method: "GET", url: "/api/products", desc: "Lista de productos", color: "text-blue-600" },
    { method: "GET", url: "/api/products/:id", desc: "Detalles de un producto", color: "text-blue-600" },
    { method: "POST", url: "/api/products", desc: "Crear un producto", color: "text-green-600" },
    { method: "PATCH", url: "/api/products/:id", desc: "Actualizar un producto", color: "text-yellow-300" },
    { method: "DELETE", url: "/api/products/:id", desc: "Eliminar un producto", color: "text-red-600" }
];

  return (
    <Layout>
<div className="w-full max-w-4xl mx-auto px-4 sm:w-3/4 md:w-2/3 lg:w-1/2 m-8">
    <div className="max-w-7xl mx-auto flex flex-col gap-4">
          <h1 className="text-left text-4xl font-bold text-center">Bienvenido</h1>
          <p className="text-left text-xl text-center">
            Está alojada en Render, si la encuentras apagada, debes encenderla, tarda 1 minuto, se apagará si dejas de usarla más de 15 minutos. 
          </p>
          {/* Estado de la API */}
          <div className="flex items-center gap-4">
    <div className="flex items-center gap-2 text-lg font-semibold">
      Estado del Servidor
      <span className={`w-4 h-4 rounded-full ${apiStatus === "On" ? "bg-green-500" : "bg-red-500"}`} />
    </div>
    <button
      className={`cursor-pointer px-6 py-2 text-white font-semibold rounded-md transition duration-300
        ${apiStatus === "On" ? "bg-green-600 hover:bg-green-500" : "bg-red-600 hover:bg-red-500"}`}
      onClick={checkAPIStatus}
      disabled={isCheckingAPI}
    >
      {isCheckingAPI ? "Encendiendo..." : apiStatus === "On" ? "API Encendida" : "Encender API"}
    </button>

          </div>
          <h2 className="text-2xl font-semibold">🔗 Base URL</h2>
      <code className="block bg-gray-800 p-4 rounded text-green-400">
        https://nodemysql-its2.onrender.com/api
      </code>

          <h2 className="text-left text-2xl font-semibold">GET simple a la ruta Clientes</h2>
      <pre className="text-left bg-gray-800 text-white rounded-md overflow-auto">
        <code className="whitespace-pre-wrap font-mono">{highlightJSCode(request)}</code>
      </pre>
          {/* Botón para hacer la petición */}
          <div className="text-left">
            <button
              className={`cursor-pointer px-6 py-2 ${isLoading ? 'bg-gray-500' : 'bg-gray-800'} text-white font-semibold rounded-md hover:bg-gray-500 transition duration-300`}
              onClick={handleFetchClients}
              disabled={isLoading || apiStatus !== "On"}
            >
              {isLoading ? 'Ejecutando Petición...' : 'Ejecutar Petición'}
            </button>
          </div>

          {/* Resultados de la API */}
            {error && <p className="text-red-500">{error}</p>}
            <h2 className="text-left text-2xl font-semibold">Respuesta de la API</h2>
      <pre className="text-left bg-gray-800 text-white p-4 rounded-md overflow-x-auto">
        <code className="whitespace-pre-wrap font-mono">
          {highlightJSCode(JSON.stringify(apiResponse, null, 2))}
        </code>
      </pre>
            <div className='flex flex-col gap-4'>
      <h2 className="text-left text-lg sm:text-xl font-semibold">Endpoints</h2>
      <div className="bg-gray-400 border border-gray-300 rounded-lg shadow-md p-4 space-y-2">
        <div className="text-left grid grid-cols-2 md:grid-cols-3 font-semibold text-gray-700 text-xs sm:text-sm md:text-base">
          <span>Método</span>
          <span>URL</span>
          <span className="hidden md:block">Descripción</span>
        </div>
        <hr className="border-gray-300" />
        {endpoints.map((endpoint, idx) => (
          <div key={idx} className={`text-left grid grid-cols-2 md:grid-cols-3 ${endpoint.color} text-xs sm:text-sm md:text-base`}>
            <span className="font-semibold">{endpoint.method}</span>
            <span className="font-mono text-gray-800">{endpoint.url}</span>
            <span className="hidden md:block text-gray-800">{endpoint.desc}</span>
          </div>
        ))}
      </div>
    </div>
    <p className="text-left text-xl text-center">
            Revisa la documentación para más detalles sobre las peticiones en <Link className='text-blue-600 underline'>Docs</Link>
          </p>
  </div>
        </div>
    </Layout>
  );
}

export default Home;
