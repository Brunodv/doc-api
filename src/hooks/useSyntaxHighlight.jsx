import { useCallback } from "react";

const useSyntaxHighlight = () => {
  const highlightJSCode = useCallback((code) => {
    const keywords = ["try", "catch", "const", "let", "var", "await", "async", "function", "return", "if", "else", "for", "while", "switch", "case", "default", "break", "continue", "throw", "new", "typeof", "instanceof", "this", "class", "extends", "super", "import", "export", "console"];
    const functions = ["fetch", "json", "log", "error"];

    return code.split(/(\b\w+\b|["'][^"']*["']|\d+|[{}()\[\]])/g).map((token, i) => {
      if (keywords.includes(token)) {
        return <span key={i} className="text-purple-400">{token}</span>;
      }
      if (functions.includes(token)) {
        return <span key={i} className="text-blue-400">{token}</span>;
      }
      if (/^["'].*["']$/.test(token)) {
        return <span key={i} className="text-green-400">{token}</span>;
      }
      if (/^\d+$/.test(token)) {
        return <span key={i} className="text-yellow-300">{token}</span>;
      }
      if (["{", "}", "(", ")", "[", "]"].includes(token)) {
        return <span key={i} className="text-yellow-300">{token}</span>;
      }
      return token;
    });
  }, []);

  return { highlightJSCode };
};

export default useSyntaxHighlight;
