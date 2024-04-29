export default function Home() {
  return (
    <main>
      <div className="bg-blue-500 text-white text-center py-20 lg:py-40">
        <h1 className="text-4xl lg:text-6xl font-bold mb-4">
          Welcome to Our Website!
        </h1>
        <p className="text-xl lg:text-2xl mb-8">
          Delivering solutions that drive business success.
        </p>
        <button className="bg-white text-blue-500 font-semibold py-2 px-6 rounded-lg hover:bg-gray-100 transition-colors duration-300">
          Learn More
        </button>
      </div>
    </main>
  );
}
