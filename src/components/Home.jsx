import { Link } from "react-router-dom";

function Home() {

  const algorithms = [
    { name: "Bubble Sort", color: "bg-yellow-500", textColor: "text-yellow-500", borderColor: "border-yellow-500"},
    { name: "Selection Sort", color: "bg-orange-500", textColor: "text-orange-500", borderColor: "border-orange-500"},
    { name: "Insertion Sort", color: "bg-red-500", textColor: "text-red-500", borderColor: "border-red-500"},
    { name: "Quick Sort", color: "bg-purple-500", textColor: "text-purple-500", borderColor: "border-purple-500"},
    { name: "Merge Sort", color: "bg-indigo-500", textColor: "text-indigo-500", borderColor: "border-indigo-500"},
    { name: "Heap Sort", color: "bg-blue-500", textColor: "text-blue-500", borderColor: "border-blue-500"},
    { name: "Counting Sort", color: "bg-green-500", textColor: "text-green-500", borderColor: "border-green-500"},
    { name: "Radix Sort", color: "bg-lime-500", textColor: "text-lime-500", borderColor: "border-lime-500"},
  ];

  return (
    <div className="bg-gray-100 min-h-screen w-screen bg-cover bg-center">

        <header style={{backgroundColor: "rgb(27,55,90)"}} className="text-white p-6 shadow-lg flex justify-around items-center">
          <h2 className="text-4xl font-bold ">Sorting Visualizer</h2>
        </header>

        <div className="flex flex-col items-center justify-center flex-grow">
          <div className="mt-8 w-full max-w-5xl grid grid-cols-1 sm:grid-cols-2 gap-10 p-6 items-center">
            {algorithms.map((algo, index) => (
              <Link
                key={index}
                to={`/visualizer/${algo.name.toLowerCase().replace(/\s+/g, "")}`}
                className={`flex items-center rounded-full p-4 ${algo.color} text-white text-xl shadow-md transition-transform transform hover:scale-105 hover:shadow-xl`}
              >
                <div className="w-16 h-16 flex items-center justify-center rounded-full bg-white shadow-md">
                  <div className={`w-12 h-12 flex items-center justify-center text-xl font-bold bg-white ${algo.textColor} rounded-full ${algo.borderColor} border-2`}>
                    {String.fromCharCode(65 + index)}
                  </div>
                </div>
                <span className="text-lg font-semibold ml-4">{algo.name}</span>
              </Link>
            ))}
          </div>
        </div>

    </div>
  );
}

export default Home;
