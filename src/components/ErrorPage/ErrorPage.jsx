import { Link } from 'react-router-dom';
import { HiOutlineExclamationCircle } from 'react-icons/hi';

const ErrorPage = () => {
    return (
        <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100 text-gray-800">
            <div className="flex flex-col items-center">
                <HiOutlineExclamationCircle className="text-8xl text-red-600 mb-4" />
                <h1 className="text-4xl font-bold mb-2">404</h1>
                <h2 className="text-2xl font-semibold mb-4">Oops! Page not found</h2>
                <p className="mb-8 text-center">The page you’re looking for doesn’t exist or has been moved.</p>
                <Link to="/">
                    <button className="px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full hover:from-purple-600 hover:to-pink-600 transition-all duration-300">
                        Go Home
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default ErrorPage;
