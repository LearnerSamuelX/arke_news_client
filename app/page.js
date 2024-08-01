"use client"

import Image from "next/image";
import axios from 'axios';
import { useEffect, useState } from "react";

export default function Home() {

  const [message, setMessage] = useState("")
  const [bias, setBias] = useState("More Text Needed")
  const [error, setError] = useState(false)

  useEffect(() => {
  }, [message])

  async function submission(e) {
    e.preventDefault()
    // trigger the lambda function
    console.log("message submitted")
    try {
      const apiResponse = await axios.post('https://your-api-id.execute-api.region.amazonaws.com/your-stage/your-resource', formData); // this should be the sagemaker endpoint
      setResponse(apiResponse.data);
    } catch (err) {
      setError(err.message);
    }

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
        <button className="m-5 p-2 border border-2 border-gray-300 rounded-lg" onClick={submission} disabled={false}>Submit</button>
      </div>
      <div>
        <p>{bias}</p>
      </div>
    </main>
  );
}
