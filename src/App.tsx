import MenuItem from "./components/MenuItem"
import OrderContent from "./components/OrderContent"
import { menuItems } from "./data/db"
import useOrder from "./hooks/useOrder"
import OrderTotal from "./components/OrderTotal"
import TipPercentageForm from "./components/TipPercentageForm"

function App() {

  const { order, tip, setTip, addItem, removeItem, placeOrder } = useOrder()

  return (
    <>
      <header className="bg-teal-400 py-5">
        <h1 className="text-center text-3xl font-extrabold">Calculadora de Propinas y Consumo</h1>
      </header>

      <main className="max-w-7xl mx-auto py-20 grid md:grid-cols-2">
        <div className="p-5">
          <h2 className="text-3xl font-black">Menú</h2>

          <div className="space-y-3 mt-8">
            {menuItems.map(item => (
              <MenuItem 
                key={item.id}
                item={item}
                addItem={addItem}
              />
            ))}
          </div>
        </div>

        <div className="border border-dashed border-slate-300 p-5 rounded-lg space-y-10">
          {order.length ? (
            <>
              <OrderContent 
                order={order}
                removeItem={removeItem}
              />

              <TipPercentageForm 
                setTip={setTip}
                tip={tip}
              />

              <OrderTotal 
                order={order}
                tip={tip}
                placeOrder={placeOrder}
              />
            </>
          ): (
            <p className="text-center text-slate-400">No hay elementos en el pedido</p>
          )}
        </div>
      </main>
    </>
  )
}

export default App
