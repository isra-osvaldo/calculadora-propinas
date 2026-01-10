import { formatCurrency } from "../helpers"
import type { MenuItem, OrderItem } from "../types"

type OrderContentProps = {
  order: OrderItem[],
  removeItem: (id: MenuItem['id']) => void
}


export default function OrderContent({ order, removeItem }: OrderContentProps) {
  return (
    <div>
      <h2 className="font-black text-3xl">Consumo</h2>

      <div className="space-y-3 mt-8">
        {order.map(item => (
              <div 
                key={item.id}
                className="flex justify-between items-center border-t border-gray-200 py-2 last-of-type:border-b"
              >
                <div className="text-md">
                  <p>
                    {item.name} - {formatCurrency(item.price)}
                  </p>
                  <p className="font-black">
                    Cantidad: {item.quantity} - {formatCurrency(item.quantity * item.price)}
                  </p>
                </div>

                <button
                  className="bg-red-600 h-8 w-8 rounded-full text-white font-black"
                  onClick={() => removeItem(item.id)}
                >
                  X
                </button>
              </div>
            ))}
      </div>
      </div>
    )
}
