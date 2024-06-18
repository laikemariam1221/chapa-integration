import React, { useState } from "react";

function Payments({ Fname, Lname, email, amount, public_key, tx_ref }) {
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if any of the required fields are empty
    if (!Fname.trim() || !Lname.trim() || !email.trim() || !amount.trim()) {
      setError("All fields are required.");
      return; // Prevent form submission if fields are empty
    } 

    // Proceed with form submission if all fields are filled
    const form = e.target;
    form.submit();
  };

  return (
    <div>
      <form method="POST" action="https://api.chapa.co/v1/hosted/pay" onSubmit={handleSubmit}>
        <input type="hidden" name="public_key" value={public_key} />
        <input type="hidden" name="tx_ref" value={tx_ref} />
        <input type="hidden" name="amount" value={amount} />
        <input type="hidden" name="currency" value="ETB" />
        <input type="hidden" name="email" value={email} />
        <input type="hidden" name="first_name" value={Fname} />
        <input type="hidden" name="last_name" value={Lname} />
        <input type="hidden" name="title" value="Let us do this" />
        <input type="hidden" name="description" value="Paying with Confidence with Chapa" />
        <input type="hidden" name="logo" value="https://chapa.link/asset/images/chapa_swirl.svg" />
        <input type="hidden" name="callback_url" value="https://example.com/callbackurl" />
        <input type="hidden" name="return_url" value="http://localhost:3000/thankyou" />
        <input type="hidden" name="meta[title]" value="test" />
        <div>{error && <p className="text-red-500">{error}</p>}</div>
        <button
          type="submit"
          className="mt-4 w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Pay Now
        </button>
      </form>
    </div>
  );
}

export default Payments;
