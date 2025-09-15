export default function App() {
  return (
    <div className="flex flex-col items-center justify-center h-full text-center p-6">
      <h1 className="text-2xl font-bold mb-4">Bulloro Trading Platform</h1>
      <p className="text-gray-600 mb-6">
        Click below to explore the full trading platform site.
      </p>
      <a
        href="https://bulloro-trading-platform.onrender.com"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-blue-600 text-white px-6 py-2 rounded-lg shadow-md hover:bg-blue-700 transition"
      >
        Visit Trading Platform
      </a>
    </div>
  );
}
