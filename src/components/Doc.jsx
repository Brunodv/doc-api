import React from "react";
import useSyntaxHighlight from "../hooks/useSyntaxHighlight";

function Doc({ index, title, route, method, request, response }) {
  const { highlightJSCode } = useSyntaxHighlight();

  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-2xl font-semibold">{index}. {title}</h2>

      <code className="block bg-gray-100 p-2 rounded border border-gray-300 text-lg font-mono">
        <span className="text-green-400 font-bold">{method}</span>{" "}
        <span className="text-blue-600">{route}</span>
      </code>
      <pre className="bg-gray-800 text-white p-8 rounded mt-2 overflow-x-auto text-sm">
        <code className="whitespace-pre-wrap font-mono">{highlightJSCode(request)}</code>
      </pre>
        {/* Respuesta JSON con resaltado */}
        <pre className="bg-gray-800 text-white p-3 rounded overflow-x-auto text-sm">
        <code className="whitespace-pre-wrap font-mono">{highlightJSCode(response)}</code>
      </pre>
    </div>
  );
}

export default Doc;
