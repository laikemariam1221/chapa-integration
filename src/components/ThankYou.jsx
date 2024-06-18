import React from "react";
import { Link } from "react-router-dom";

function ThankYou() {
  return (
    <div className="p-8 max-w-md mx-auto bg-white rounded-xl shadow-md space-y-6">
      <h1 className="text-2xl font-bold">Thank You for Your Payment!</h1>
      <p className="text-gray-700">Your payment has been successfully processed.</p>
      <Link to="/">
      <button className="back-home-button ">Back to Home</button>
    </Link>
    </div>
  );
}

export default ThankYou;
