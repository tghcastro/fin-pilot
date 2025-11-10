import { useNavigate } from "react-router-dom";
import "../App.css";

export default function Home() {
  const navigate = useNavigate();

  const handleClick = (type: string) => {
    if (type === "compound") {
      navigate("/compound-interest-simulator");
    } else {
      alert("This feature is under development 🚧");
    }
  };

  return (
    <div className="container">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">Fin Pilot Tools</h1>
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6">
        <div className="bg-white shadow-lg rounded-2xl p-10 w-full max-w-md text-center">
          <div className="flex flex-col gap-4">
            <button
              onClick={() => handleClick("compound")}
              className="bg-blue-600 text-white font-semibold py-3 rounded-lg hover:bg-blue-700 transition">
              Compound Interest Simulator
            </button>
            <br />
            <br />
            <button
              onClick={() => handleClick("million")}
              className="bg-green-600 text-white font-semibold py-3 rounded-lg hover:bg-green-700 transition">
              First Million Journey
            </button>
            <br />
            <br />
            <button
              onClick={() => handleClick("emergency")}
              className="bg-yellow-500 text-white font-semibold py-3 rounded-lg hover:bg-yellow-600 transition">
              Emergency Reserve
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
