"use client";

export default function CartPage() {
  return (
    <div className="max-w-6xl mx-auto p-4 text-sm bg-[#FFFFFF]">
      
      {/* TITLE */}
      <h2 className="text-xl font-semibold mb-4">Shopping Cart</h2>

      {/* TABLE */}
      <div className="border">
        <table className="w-full border-collapse">
          <thead className="bg-gray-200">
            <tr className="text-left">
              <th className="p-3 border">Image</th>
              <th className="p-3 border">Product Name</th>
              <th className="p-3 border">Model</th>
              <th className="p-3 border">Quantity</th>
              <th className="p-3 border">Unit Price</th>
              <th className="p-3 border">Total</th>
            </tr>
          </thead>

          <tbody>
            {/* ROW */}
            <tr className="border-t">
              <td className="p-3 border">
                <img src="/product1.jpg" className="w-16" />
              </td>

              <td className="p-3 border">
                Aspire Ultrabook Laptop
                <p className="text-xs text-gray-500">
                  Reward Points: 1000
                </p>
              </td>

              <td className="p-3 border">SAM1</td>

              <td className="p-3 border">
                <div className="flex items-center">
                  <input
                    type="number"
                    defaultValue={1}
                    className="w-16 border px-2 py-1"
                  />
                  <button className="bg-blue-500 text-white px-2 py-1 ml-1">
                    ↻
                  </button>
                  <button className="bg-red-500 text-white px-2 py-1 ml-1">
                    ✖
                  </button>
                </div>
              </td>

              <td className="p-3 border">$230.00</td>
              <td className="p-3 border">$230.00</td>
            </tr>

            {/* ROW */}
            <tr className="border-t">
              <td className="p-3 border">
                <img src="/product2.jpg" className="w-16" />
              </td>

              <td className="p-3 border">
                Xitefun Casual Wear Fancy Shoes
              </td>

              <td className="p-3 border">Product 114</td>

              <td className="p-3 border">
                <div className="flex items-center">
                  <input
                    type="number"
                    defaultValue={1}
                    className="w-16 border px-2 py-1"
                  />
                  <button className="bg-blue-500 text-white px-2 py-1 ml-1">
                    ↻
                  </button>
                  <button className="bg-red-500 text-white px-2 py-1 ml-1">
                    ✖
                  </button>
                </div>
              </td>

              <td className="p-3 border">$902.00</td>
              <td className="p-3 border">$902.00</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* OPTIONS */}
      <div className="mt-6">
        <h3 className="font-semibold">
          What would you like to do next?
        </h3>
        <p className="text-gray-500 mb-4">
          Choose if you have a discount code or estimate shipping.
        </p>

        <div className="grid md:grid-cols-2 gap-4">
          
          {/* COUPON */}
          <div className="border">
            <div className="bg-gray-200 p-3 font-semibold">
              Use Coupon Code
            </div>
            <div className="p-3 flex gap-2">
              <input
                placeholder="Enter your coupon here"
                className="flex-1 border px-2 py-2"
              />
              <button className="bg-blue-500 text-white px-4">
                Apply Coupon
              </button>
            </div>
          </div>

          {/* VOUCHER */}
          <div className="border">
            <div className="bg-gray-200 p-3 font-semibold">
              Use Gift Voucher
            </div>
            <div className="p-3 flex gap-2">
              <input
                placeholder="Enter gift voucher"
                className="flex-1 border px-2 py-2"
              />
              <button className="bg-blue-500 text-white px-4">
                Apply Voucher
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* SHIPPING */}
      <div className="border mt-6">
        <div className="bg-gray-200 p-3 font-semibold">
          Estimate Shipping & Taxes
        </div>

        <div className="p-4 space-y-3">
          <select className="w-full border p-2">
            <option>-- Please Select --</option>
          </select>

          <select className="w-full border p-2">
            <option>-- Please Select --</option>
          </select>

          <input
            placeholder="Post Code"
            className="w-full border p-2"
          />

          <button className="bg-blue-500 text-white px-4 py-2">
            Get Quotes
          </button>
        </div>
      </div>

      {/* TOTAL */}
      <div className="flex justify-end mt-6">
        <div className="w-72 border">
          <div className="flex justify-between p-2 border-b">
            <span>Sub-Total:</span>
            <span>$940.00</span>
          </div>

          <div className="flex justify-between p-2 border-b">
            <span>Eco Tax:</span>
            <span>$4.00</span>
          </div>

          <div className="flex justify-between p-2 border-b">
            <span>VAT (20%):</span>
            <span>$188.00</span>
          </div>

          <div className="flex justify-between p-2 font-bold">
            <span>Total:</span>
            <span>$1,132.00</span>
          </div>
        </div>
      </div>

      {/* BUTTONS */}
      <div className="flex justify-between mt-6">
        <button className="border px-4 py-2">
          Continue Shopping
        </button>

        <button className="bg-blue-500 text-white px-4 py-2">
          Checkout
        </button>
      </div>
    </div>
  );
}