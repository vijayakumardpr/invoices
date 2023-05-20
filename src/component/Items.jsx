import { useState } from "react"

const Items = () => {
  const [data, setData] = useState([])
  const [quantity, setQuantity] = useState("")
  const [amount, setAmount] = useState("")

  function newItems(quantity, amount) {
    if (quantity === "" || amount == "")
      return alert("Enter Quantity and Amount")
    setData((preData) => [...preData, { quantity, amount }])
    setQuantity("")
    setAmount("")
  }
  return (
    <div>
      <div className="flex gap-10 items-center">
        <div className="flex flex-col gap-2">
          Tax %:
          <input
            className="border border-gray-400 rounded-md p-2 w-72"
            type="text"
            placeholder="tax"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
          />
        </div>
        <div className="flex flex-col gap-2">
          Amount:
          <input
            className="border border-gray-400 rounded-md p-2 w-72"
            type="text"
            placeholder="amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </div>
        <button
          onClick={() => newItems(quantity, amount)}
          className="border-2 border-blue-800 rounded-md mt-7 px-5 py-2 bg-blue-400"
        >
          Add
        </button>
      </div>
      <table className="w-full border border-gray-500 mt-10">
        <thead>
          <tr className="bg-gray-200">
            <th className="border border-gray-500 text-center w-12">Sno</th>
            <th className="border border-gray-500">Amount</th>
            <th className="border border-gray-500">Rate</th>
          </tr>
        </thead>
        <tbody>
          {data.length > 0 &&
            data.map((item, i) => {
              return (
                <tr key={i} className="border border-gray-500">
                  <td className="border border-gray-500 text-center">
                    {i + 1}
                  </td>
                  <td className="border border-gray-500 text-center">
                    {item.quantity}
                  </td>
                  <td className="border border-gray-500 text-center">
                    {item.amount}
                  </td>
                  <td className="border border-gray-500 text-center">
                    <button>Edit</button>
                  </td>
                  <td className="border border-gray-500 text-center">
                    <button>Delete</button>
                  </td>
                </tr>
              )
            })}
        </tbody>
        <tfoot></tfoot>
      </table>
    </div>
  )
}

export default Items
