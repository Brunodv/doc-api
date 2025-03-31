import React, { useContext, useEffect } from "react";
import Doc from "./Doc";
import Layout from "./Layout";
import Sidebar from "./Sidebar";
import MyContext from "../context/MyContext";

function Docs() {
  const { docs } = useContext(MyContext);

  return (
    <Layout>
    <div className="flex flex-col gap-4 max-w-4xl mx-auto p-6 shadow-md rounded-lg text-white">
      <h1 className="text-3xl font-bold">Documentación de la API RESTful</h1>
      <p>
        Esta API RESTful permite gestionar productos y clientes. Está desarrollada con Node.js y PostgreSQL,
        utilizando controladores y consultas preparadas para mayor seguridad y eficiencia.
      </p>

      <h2 className="text-2xl font-semibold text-white">🔗 Base URL</h2>
      <code className="block bg-gray-100 p-2 rounded border border-gray-300 text-green-700">
        https://nodemysql-its2.onrender.com/api
      </code>

      <div className="flex flex-col w-full">
          {docs.map((doc) => (
            <div key={doc.index} id={`doc-${doc.index}`} className="py-4 border-b">
              <Doc
          index={doc.index}
          title={doc.title}
          route={doc.route}
          method={doc.method}
          request={doc.request.toString()} // Convertimos la función a string
          response={doc.response.toString()} // Formato legible
        />
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
}

export default Docs;
