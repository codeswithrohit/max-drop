"use client";

export default function CartPage() {
  return (
    <div className="max-w-6xl mx-auto p-4 text-sm bg-white text-gray-800">

      {/* TITLE */}
      <h2 className="text-xl font-semibold text-gray-900 mb-4">
        Shopping Cart
      </h2>

      {/* TABLE */}
      <div className="border rounded-md overflow-x-auto">
        <table className="w-full min-w-[700px] border-collapse">
          
          <thead className="bg-gray-100 text-gray-700">
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
            {/* ROW 1 */}
            <tr className="border-t">
              <td className="p-3 border">
                <img src="/product1.jpg" className="w-14 sm:w-16" />
              </td>

              <td className="p-3 border text-gray-700">
                Aspire Ultrabook Laptop
                <p className="text-xs text-gray-500">
                  Reward Points: 1000
                </p>
              </td>

              <td className="p-3 border">SAM1</td>

              <td className="p-3 border">
                <div className="flex items-center gap-1">
                  <input
                    type="number"
                    defaultValue={1}
                    className="w-14 border px-2 py-1 bg-white text-gray-800"
                  />
                  <button className="bg-blue-500 hover:bg-blue-600 text-white px-2 py-1 rounded">
                    ↻
                  </button>
                  <button className="bg-red-500 hover:bg-red-600 text-white px-2 py-1 rounded">
                    ✖
                  </button>
                </div>
              </td>

              <td className="p-3 border">$230.00</td>
              <td className="p-3 border">$230.00</td>
            </tr>

            {/* ROW 2 */}
            <tr className="border-t">
              <td className="p-3 border">
                <img src="/product2.jpg" className="w-14 sm:w-16" />
              </td>

              <td className="p-3 border text-gray-700">
                Xitefun Casual Wear Fancy Shoes
              </td>

              <td className="p-3 border">Product 114</td>

              <td className="p-3 border">
                <div className="flex items-center gap-1">
                  <input
                    type="number"
                    defaultValue={1}
                    className="w-14 border px-2 py-1 bg-white text-gray-800"
                  />
                  <button className="bg-blue-500 hover:bg-blue-600 text-white px-2 py-1 rounded">
                    ↻
                  </button>
                  <button className="bg-red-500 hover:bg-red-600 text-white px-2 py-1 rounded">
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
        <h3 className="font-semibold text-gray-900">
          What would you like to do next?
        </h3>
        <p className="text-gray-500 mb-4">
          Choose if you have a discount code or estimate shipping.
        </p>

        <div className="grid md:grid-cols-2 gap-4">

          {/* COUPON */}
          <div className="border rounded-md overflow-hidden">
            <div className="bg-gray-100 p-3 font-semibold text-gray-700">
              Use Coupon Code
            </div>
            <div className="p-3 flex flex-col sm:flex-row gap-2">
              <input
                placeholder="Enter your coupon here"
                className="flex-1 border px-2 py-2 bg-white text-gray-800 placeholder-gray-400"
              />
              <button className="bg-[#286090] text-white px-4 py-2 rounded">
                Apply
              </button>
            </div>
          </div>

          {/* VOUCHER */}
          <div className="border rounded-md overflow-hidden">
            <div className="bg-gray-100 p-3 font-semibold text-gray-700">
              Use Gift Voucher
            </div>
            <div className="p-3 flex flex-col sm:flex-row gap-2">
              <input
                placeholder="Enter voucher"
                className="flex-1 border px-2 py-2 bg-white text-gray-800 placeholder-gray-400"
              />
              <button className="bg-[#286090] text-white px-4 py-2 rounded">
                Apply
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* SHIPPING */}
      <div className="border rounded-md mt-6 overflow-hidden">
        <div className="bg-gray-100 p-3 font-semibold text-gray-700">
          Estimate Shipping & Taxes
        </div>

        <div className="p-4 space-y-3">
          <select className="w-full border p-2 bg-white text-gray-800">
            <option>-- Please Select --</option>
          </select>

          <select className="w-full border p-2 bg-white text-gray-800">
            <option>-- Please Select --</option>
          </select>

          <input
            placeholder="Post Code"
            className="w-full border p-2 bg-white text-gray-800 placeholder-gray-400"
          />

          <button className="bg-[#286090] text-white px-4 py-2 rounded w-full sm:w-auto">
            Get Quotes
          </button>
        </div>
      </div>

      {/* TOTAL */}
      <div className="flex justify-end mt-6">
        <div className="w-full sm:w-72 border rounded-md overflow-hidden">
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

          <div className="flex justify-between p-2 font-bold text-gray-900">
            <span>Total:</span>
            <span>$1,132.00</span>
          </div>
        </div>
      </div>

      {/* BUTTONS */}
      <div className="flex flex-col sm:flex-row justify-between gap-3 mt-6">
        <button className="border px-4 py-2 rounded text-gray-700 hover:bg-gray-100">
          Continue Shopping
        </button>

        <button className="bg-[#286090]  text-white px-4 py-2 rounded">
          Checkout
        </button>
      </div>
    </div>
  );
}