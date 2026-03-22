"use client";

export default function CheckoutPage() {
  return (
    <div className="max-w-6xl mx-auto p-4 text-sm bg-[#FFFFFF]">

      <h2 className="text-xl font-semibold mb-4">Checkout</h2>

      <div className="grid lg:grid-cols-3 gap-4">
        
        {/* LEFT SIDE */}
        <div className="space-y-4">
          
          {/* LOGIN */}
          <div className="border">
            <div className="bg-gray-200 p-3 font-semibold">
              Create an Account or Login
            </div>
            <div className="p-3 space-y-2">
              <label><input type="radio" name="acc" /> Register Account</label><br/>
              <label><input type="radio" name="acc" defaultChecked /> Guest Checkout</label><br/>
              <label><input type="radio" name="acc" /> Returning Customer</label>
            </div>
          </div>

          {/* PERSONAL */}
          <div className="border">
            <div className="bg-gray-200 p-3 font-semibold">Your Personal Details</div>
            <div className="p-3 space-y-2">
              <input placeholder="First Name" className="w-full border p-2"/>
              <input placeholder="Last Name" className="w-full border p-2"/>
              <input placeholder="E-Mail" className="w-full border p-2"/>
              <input placeholder="Telephone" className="w-full border p-2"/>
              <input placeholder="Fax" className="w-full border p-2"/>
            </div>
          </div>

          {/* ADDRESS */}
          <div className="border">
            <div className="bg-gray-200 p-3 font-semibold">Your Address</div>
            <div className="p-3 space-y-2">
              <input placeholder="Company" className="w-full border p-2"/>
              <input placeholder="Address 1" className="w-full border p-2"/>
              <input placeholder="Address 2" className="w-full border p-2"/>
              <input placeholder="City" className="w-full border p-2"/>
              <input placeholder="Post Code" className="w-full border p-2"/>

              <select className="w-full border p-2">
                <option>-- Please Select --</option>
              </select>

              <select className="w-full border p-2">
                <option>-- Please Select --</option>
              </select>

              <label className="text-xs">
                <input type="checkbox" defaultChecked /> My delivery and billing addresses are the same.
              </label>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="lg:col-span-2 space-y-4">
          
          {/* DELIVERY */}
          <div className="border">
            <div className="bg-gray-200 p-3 font-semibold">Delivery Method</div>
            <div className="p-3 space-y-2">
              <label><input type="radio" name="ship" defaultChecked /> Free Shipping - $0.00</label><br/>
              <label><input type="radio" name="ship" /> Flat Shipping Rate - $8.00</label><br/>
              <label><input type="radio" name="ship" /> Per Item Shipping Rate - $150.00</label>
            </div>
          </div>

          {/* PAYMENT */}
          <div className="border">
            <div className="bg-gray-200 p-3 font-semibold">Payment Method</div>
            <div className="p-3 space-y-2">
              <label><input type="radio" name="pay" defaultChecked /> Cash On Delivery</label><br/>
              <label><input type="radio" name="pay" /> Bank Transfer</label><br/>
              <label><input type="radio" name="pay" /> Paypal</label>
            </div>
          </div>

          {/* COUPON */}
          <div className="border">
            <div className="bg-gray-200 p-3 font-semibold">Use Coupon Code</div>
            <div className="p-3 flex gap-2">
              <input className="flex-1 border p-2" placeholder="Enter your coupon here"/>
              <button className="bg-blue-500 text-white px-4">Apply Coupon</button>
            </div>
          </div>

          {/* VOUCHER */}
          <div className="border">
            <div className="bg-gray-200 p-3 font-semibold">Use Gift Voucher</div>
            <div className="p-3 flex gap-2">
              <input className="flex-1 border p-2" placeholder="Enter your gift voucher"/>
              <button className="bg-blue-500 text-white px-4">Apply Voucher</button>
            </div>
          </div>

          {/* CART TABLE */}
          <div className="border">
            <div className="bg-gray-200 p-3 font-semibold">Shopping cart</div>

            <table className="w-full text-sm">
              <thead className="bg-gray-100">
                <tr>
                  <th className="p-2 border">Image</th>
                  <th className="p-2 border">Product Name</th>
                  <th className="p-2 border">Quantity</th>
                  <th className="p-2 border">Unit Price</th>
                  <th className="p-2 border">Total</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td className="p-2 border">
                    <img src="/product2.jpg" className="w-12"/>
                  </td>
                  <td className="p-2 border">Xitefun Casual Wear Fancy Shoes</td>
                  <td className="p-2 border">1</td>
                  <td className="p-2 border">$902.00</td>
                  <td className="p-2 border">$902.00</td>
                </tr>
              </tbody>
            </table>

            {/* TOTAL */}
            <div className="p-3 text-right space-y-1">
              <p>Sub-Total: $750.00</p>
              <p>Flat Shipping Rate: $5.00</p>
              <p>Eco Tax: $4.00</p>
              <p>VAT (20%): $151.00</p>
              <p className="font-bold">Total: $910.00</p>
            </div>
          </div>

          {/* COMMENTS */}
          <div className="border">
            <div className="bg-gray-200 p-3 font-semibold">
              Add Comments About Your Order
            </div>

            <div className="p-3">
              <textarea className="w-full border p-2 h-24"></textarea>

              <div className="flex justify-between items-center mt-3">
                <label className="text-xs">
                  <input type="checkbox" defaultChecked /> I agree to terms
                </label>

                <button className="bg-blue-500 text-white px-4 py-2">
                  Confirm Order
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}