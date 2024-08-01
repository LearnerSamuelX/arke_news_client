"use client"

import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {

  const [message, setMessage] = useState("")

  useEffect(() => {
  }, [message])

  function submission(e) {
    e.preventDefault()
    // trigger the lambda function
    console.log("message submitted")

  }

  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <div className={`mb-3 text-2xl font-semibold`}>
        <h1>Bias Detector</h1>
      </div>
      {/* <div className="w-full max-w-lg mx-auto mt-4"> */}
      <div className="w-3/4 max-w-2xl mx-auto mt-4">
        <textarea
          className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none focus:shadow-outline h-48 resize-none"
          label="user's message"
          onChange={(e) => setMessage(e.target.value)}
          placeholder={"Type your message here"}
        ></textarea>
      </div>
      <div>
        <button className="p-2 border border-2 border-gray-300 rounded-lg" onClick={submission} disabled={false}>Submit</button>
      </div>
    </main>
  );
}
