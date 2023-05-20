import { useState } from "react"
import Items from "./Items"

const Invoice = () => {
  const [today, setToday] = useState(Date())
  console.log(today)
  return (
    <div>
      <div className="flex flex-col items-end gap-5 p-6">
        <input
          className="w-52 border border-gray-500 rounded-md p-2"
          type="text"
          placeholder="ctin..."
        />
        <div>Invoice:1 - 23/24</div>
        <div>
          <input
            type="date"
            value={today}
            onChange={(e) => setToday(e.target.value)}
          />
        </div>
      </div>
      <Items />
    </div>
  )
}

export default Invoice
