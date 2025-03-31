function Footer() {
    return (
        <div className="bg-gray-800 text-white text-center p-4 py-6">
            <p>© BrunoDV</p>
            <p className="text-sm text-gray-400">
                <span className="mr-2">Frontend: <a href="https://brunodv.github.io/doc-api" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">GitHub Pages</a></span>
                <span>Backend: <a href="https://nodemysql-its2.onrender.com/api/products" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">Render</a></span>
            </p>
        </div>
    );
}

export default Footer;
