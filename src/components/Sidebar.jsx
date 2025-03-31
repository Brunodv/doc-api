import React from "react";
import MyContext from "../context/MyContext";
import { useContext } from "react";

const Sidebar = () => {
  const { docs, focusIndex,setFocusIndex } = useContext(MyContext);

  return (
    <aside className="w-72 bg-gray-900 text-white p-4 fixed overflow-y-auto hidden md:block lg:block w-64 bg-gray-800 text-white p-4">
     <h2 className="text-lg font-semibold mb-4 text-gray-300">Documentación</h2>
     <button
              className={`w-full text-left p-3 rounded-lg transition-all duration-300 mb-1 ${
                focusIndex === "0"
                  ? "bg-gray-700 text-white shadow-md"
                  : "hover:bg-gray-700 text-gray-300"
              }`}
              onClick={() => setFocusIndex("0")}
            >
              Base URL
            </button>
      <ul>
        {docs.map((doc) => (
          <li key={doc.index} className="mb-1">
            <button
              className={`w-full text-left p-3 rounded-lg transition-all duration-300 ${
                focusIndex === doc.index
                  ? "bg-gray-700 text-white shadow-md"
                  : "hover:bg-gray-700 text-gray-300"
              }`}
              onClick={() => setFocusIndex(doc.index)}
            >
              {doc.title}
            </button>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;
