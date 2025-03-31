import Navbar from "./Nav";
import Footer from "./Footer";

function Layout({ children }) {
    return (
        <div className={`flex flex-col m-0 p-0 text-white bg-gray-700`}>
            <Navbar />
            <div className="content">
                {children}
            </div>
            <Footer />
        </div>
    )
}

export default Layout;