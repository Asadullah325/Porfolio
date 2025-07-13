import ErrorImage from '@/assets/error.webp';

const ErrorPage = () => {
    return (
        <>
            <div className="bg-gray-100 dark:bg-gray-900 min-h-screen flex items-center justify-center flex-col text-center">
                <img
                    src={ErrorImage}
                    alt="Error"
                    className="mb-4 w-32 h-32 object-cover rounded-full"
                />
                <h1 className="text-4xl font-bold mb-4">404 - Page Not Found</h1>
                <p className="text-lg">Sorry, the page you are looking for does not exist.</p>
                <p className="text-sm mt-2">
                    You can go back to the <a href="/" className="text-blue-700 dark:text-blue-500">Home Page</a>.
                </p>
            </div>
        </>
    )
}

export default ErrorPage