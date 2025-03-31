import { Link } from "react-router-dom";

function Nav() {
    
    return (
    <nav className="flex justify-between items-center p-4 bg-gray-800 text-white" id={`doc-${'0'}`}>
      <div className="logo text-2xl font-bold">
        <Link to="/"><h2>BD API</h2></Link>
      </div>
      <div className="flex space-x-4">
        <Link to="/docs" className="px-4 py-2 bg-gray-600 hover:bg-gray-500 rounded cursor-pointer">Docs</Link>
        <Link to="/contact" className="px-4 py-2 bg-gray-600 hover:bg-gray-500 rounded cursor-pointer">Contacto</Link>
      </div>
    </nav>
    );
}

export default Nav;
