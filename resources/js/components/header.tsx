import { FaLeaf } from "react-icons/fa";

const Header = () => {
    return (
        <header className="bg-gradient-to-r from-green-600 to-green-400 text-white p-6 rounded-lg shadow-md mb-8">
            <div className="container mx-auto flex justify-between items-center">
                <div className="flex items-center space-x-3">
                    <FaLeaf className="text-4xl" />
                    <div>
                        <h1 className="text-3xl font-bold">CarbonDash</h1>
                        <p className="text-sm text-gray-200">
                            Real-time Emissions Monitoring
                        </p>
                    </div>
                </div>
                <div className="flex items-center space-x-4">
                    <button className="bg-white text-green-600 px-4 py-2 rounded-lg shadow hover:bg-gray-100 transition">
                        Refresh
                    </button>
                </div>
            </div>
        </header>
    );
};

export default Header;
