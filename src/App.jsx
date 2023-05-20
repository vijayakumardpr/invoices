import Client from "./component/Client"
import Invoice from "./component/Invoice"

function App() {
  function print() {
    window.print()
  }
  return (
    <>
      <button onClick={print}> Print</button>
      <Client />
      <Invoice />
    </>
  )
}

export default App
