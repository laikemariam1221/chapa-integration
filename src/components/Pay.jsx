import Payment from "./Payments";
import React, { useState } from "react";

function Pay() {
  const [Fname, setFname] = useState("");
  const [Lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [amount, setAmount] = useState("");
  const public_key = "CHAPUBK_TEST-Y9p4rKEOl09Af1dktpK9wfVyDlUap1BE";
  const tx_ref = `tx_ref_${Date.now()}`;

  return (
    <div className="p-8 max-w-md mx-auto bg-white rounded-xl shadow-md space-y-6">
      <h1 className="text-2xl font-bold">Chapa Checkout</h1>
      <form className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">First Name</label>
          <input
            type="text"
            value={Fname}
            onChange={(e) => setFname(e.target.value)}
            required
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Last Name</label>
          <input
            type="text"
            value={Lname}
            onChange={(e) => setLname(e.target.value)}
            required
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Amount</label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            required
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
        <div>
          <Payment
            Fname={Fname}
            Lname={Lname}
            email={email}
            amount={amount}
            public_key={public_key}
            tx_ref={tx_ref}
          />
        </div>
      </form>
    </div>
  );
}

export default Pay;
