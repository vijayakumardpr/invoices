import { useState } from "react"

const users = [
  { name: "Select", gstin: "" },
  { name: "Vijayakumar", gstin: "33BVNPM8514Q1ZT" },
  { name: "Gopu", gstin: "33BVNPM8514Q1ZY" },
]

const Client = () => {
  const [selected, setSelected] = useState("")

  const gst = users.find((item) => item.name === selected)

  return (
    <div className="flex flex-col gap-5 justify-between p-6">
      <div className="flex">
        <label>
          Users:
          <select
            className="w-36 border border-gray-600 ml-5 px-2 py-1"
            value={selected}
            onChange={(e) => setSelected(e.target.value)}
          >
            {users.map((item) => {
              return <option key={item.gstin}>{item.name}</option>
            })}
          </select>
        </label>
      </div>
      <div className="bg-gray-300 w-full px-2 py-3 ">
        {gst !== undefined && <div>{gst.gstin}</div>}
      </div>
    </div>
  )
}

export default Client
