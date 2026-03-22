"use client";

export default function CheckoutPage() {
  return (
    <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 py-4 bg-white text-gray-800">

      <h2 className="text-lg sm:text-xl font-semibold mb-4 text-gray-900">
        Checkout
      </h2>

      {/* GRID */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">

        {/* LEFT SIDE */}
        <div className="space-y-4">

          {/* LOGIN */}
          <div className="border rounded-md overflow-hidden">
            <div className="bg-gray-100 p-3 font-semibold text-gray-700">
              Create an Account or Login
            </div>
            <div className="p-3 space-y-2 text-gray-700">
              <label className="flex gap-2">
                <input type="radio" name="acc" /> Register Account
              </label>
              <label className="flex gap-2">
                <input type="radio" name="acc" defaultChecked /> Guest Checkout
              </label>
              <label className="flex gap-2">
                <input type="radio" name="acc" /> Returning Customer
              </label>
            </div>
          </div>

          {/* PERSONAL */}
          <div className="border rounded-md overflow-hidden">
            <div className="bg-gray-100 p-3 font-semibold text-gray-700">
              Your Personal Details
            </div>
            <div className="p-3 grid grid-cols-1 sm:grid-cols-2 gap-2">
              <input placeholder="First Name" className="input" />
              <input placeholder="Last Name" className="input" />
              <input placeholder="E-Mail" className="input sm:col-span-2" />
              <input placeholder="Telephone" className="input" />
              <input placeholder="Fax" className="input" />
            </div>
          </div>

          {/* ADDRESS */}
          <div className="border rounded-md overflow-hidden">
            <div className="bg-gray-100 p-3 font-semibold text-gray-700">
              Your Address
            </div>
            <div className="p-3 grid grid-cols-1 sm:grid-cols-2 gap-2">
              <input placeholder="Company" className="input sm:col-span-2" />
              <input placeholder="Address 1" className="input sm:col-span-2" />
              <input placeholder="Address 2" className="input sm:col-span-2" />
              <input placeholder="City" className="input" />
              <input placeholder="Post Code" className="input" />

              <select className="input">
                <option>-- Please Select --</option>
              </select>

              <select className="input">
                <option>-- Please Select --</option>
              </select>

              <label className="text-xs text-gray-600 flex gap-2 sm:col-span-2">
                <input type="checkbox" defaultChecked />
                My delivery and billing addresses are the same.
              </label>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="lg:col-span-2 space-y-4">

          {/* DELIVERY */}
          <div className="border rounded-md overflow-hidden">
            <div className="bg-gray-100 p-3 font-semibold text-gray-700">
              Delivery Method
            </div>
            <div className="p-3 space-y-2 text-gray-700">
              <label className="flex gap-2">
                <input type="radio" name="ship" defaultChecked />
                Free Shipping - $0.00
              </label>
              <label className="flex gap-2">
                <input type="radio" name="ship" />
                Flat Shipping Rate - $8.00
              </label>
              <label className="flex gap-2">
                <input type="radio" name="ship" />
                Per Item Shipping Rate - $150.00
              </label>
            </div>
          </div>

          {/* PAYMENT */}
          <div className="border rounded-md overflow-hidden">
            <div className="bg-gray-100 p-3 font-semibold text-gray-700">
              Payment Method
            </div>
            <div className="p-3 space-y-2 text-gray-700">
              <label className="flex gap-2">
                <input type="radio" name="pay" defaultChecked />
                Cash On Delivery
              </label>
              <label className="flex gap-2">
                <input type="radio" name="pay" />
                Bank Transfer
              </label>
              <label className="flex gap-2">
                <input type="radio" name="pay" />
                Paypal
              </label>
            </div>
          </div>

          {/* COUPON + VOUCHER */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

            <div className="border rounded-md overflow-hidden">
              <div className="bg-gray-100 p-3 font-semibold text-gray-700">
                Coupon Code
              </div>
              <div className="p-3 flex flex-col gap-2">
                <input className="input" placeholder="Enter coupon" />
                <button className="btn-primary w-full">Apply</button>
              </div>
            </div>

            <div className="border rounded-md overflow-hidden">
              <div className="bg-gray-100 p-3 font-semibold text-gray-700">
                Gift Voucher
              </div>
              <div className="p-3 flex flex-col gap-2">
                <input className="input" placeholder="Enter voucher" />
                <button className="btn-primary w-full">Apply</button>
              </div>
            </div>
          </div>

          {/* CART TABLE */}
          <div className="border rounded-md overflow-hidden">
            <div className="bg-gray-100 p-3 font-semibold text-gray-700">
              Shopping Cart
            </div>

            <div className="overflow-x-auto">
              <table className="w-full min-w-[600px] text-sm">
                <thead className="bg-gray-50 text-gray-700">
                  <tr>
                    <th className="p-2 border">Image</th>
                    <th className="p-2 border">Product</th>
                    <th className="p-2 border">Qty</th>
                    <th className="p-2 border">Price</th>
                    <th className="p-2 border">Total</th>
                  </tr>
                </thead>

                <tbody>
                  <tr>
                    <td className="p-2 border">
                      <img src="/product2.jpg" className="w-10 sm:w-12" />
                    </td>
                    <td className="p-2 border">
                      Xitefun Casual Wear Fancy Shoes
                    </td>
                    <td className="p-2 border">1</td>
                    <td className="p-2 border">$902</td>
                    <td className="p-2 border">$902</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* TOTAL */}
            <div className="p-3 text-sm sm:text-base text-gray-700">
              <div className="flex justify-between">
                <span>Sub-Total</span>
                <span>$750</span>
              </div>
              <div className="flex justify-between">
                <span>Shipping</span>
                <span>$5</span>
              </div>
              <div className="flex justify-between">
                <span>VAT</span>
                <span>$151</span>
              </div>
              <div className="flex justify-between font-bold text-gray-900 mt-2">
                <span>Total</span>
                <span>$910</span>
              </div>
            </div>
          </div>

          {/* COMMENTS */}
          <div className="border rounded-md overflow-hidden">
            <div className="bg-gray-100 p-3 font-semibold text-gray-700">
              Order Comments
            </div>

            <div className="p-3 space-y-3">
              <textarea className="input h-24 w-full"></textarea>

              <div className="flex flex-col sm:flex-row justify-between gap-2">
                <label className="text-xs text-gray-600 flex gap-2">
                  <input type="checkbox" defaultChecked />
                  I agree to terms
                </label>

                <button className="btn-primary w-full sm:w-auto">
                  Confirm Order
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* COMMON STYLES */}
      <style jsx>{`
        .input {
          width: 100%;
          border: 1px solid #d1d5db;
          padding: 8px;
          background: white;
          color: #1f2937;
          border-radius: 6px;
        }

        .btn-primary {
          background: #286090;
          color: white;
          padding: 8px 16px;
          border-radius: 6px;
        }

        .btn-primary:hover {
          background: #286090;
        }
      `}</style>
    </div>
  );
}