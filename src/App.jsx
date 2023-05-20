import Client from "./component/Client"
import Invoice from "./component/Invoice"

function App() {
  function print() {
    window.print()
  }
  return (
    <>
      <div className="flex justify-between p-6">
        <button
          onClick={print}
          className="px-6 py-1 border border-gray-600 bg-green-300 rounded-lg"
        >
          Print
        </button>
        <button className="px-6 py-1 border border-gray-600 bg-red-300 rounded-lg">
          JSON
        </button>
        <button className="px-6 py-1 border border-gray-600 bg-blue-300 rounded-lg">
          Download
        </button>
      </div>
      <Client />
      <Invoice />
    </>
  )
}

export default App
