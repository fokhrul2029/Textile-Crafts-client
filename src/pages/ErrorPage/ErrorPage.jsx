/* eslint-disable react/no-unescaped-entities */
 
const ErrorPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white">
      <div className="bg-gray-800 p-8 rounded-lg shadow-lg text-center">
        <h1 className="text-4xl font-bold text-purple-400 mb-4">
          Uh-Oh, Spaghetti Code!
        </h1>
        <p className="text-lg mb-6">
          Looks like something went bonkers in the digital realm!
        </p>
        <p className="text-red-400 text-7xl font-bold pb-3">
            404
        </p>
        <p className="text-lg mb-6">
          Don't panic, our tech wizards are working their magic!
        </p>
        <a
          href="/"
          className="inline-block bg-purple-500 hover:bg-purple-600 text-white px-8 py-3 rounded-md text-lg transition duration-300"
        >
          Return to Safety
        </a>
      </div>
    </div>
  );
};

export default ErrorPage;
