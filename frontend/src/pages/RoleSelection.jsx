import { useState } from "react";
import JobGiverHome from "./JobGiverHome";
import JobTakerHome from "./JobTakerHome";
function RoleSelection(){
    
    const[role , setRole] = useState("");
    if(role === "giver"){
        return <JobGiverHome/>
    }
    if(role === "taker"){
        return <JobTakerHome/>
    }
    return (
  <div className="min-h-screen bg-gradient-to-b from-indigo-50 via-white to-white flex items-center justify-center px-5">

    <div className="w-full max-w-md">

      {/* Logo / Brand */}
      <div className="text-center mb-10">

        <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-3xl bg-indigo-600 shadow-lg shadow-indigo-200">
          <span className="text-4xl">🔨</span>
        </div>

        <h1 className="text-4xl font-extrabold tracking-tight text-gray-900">
          Rogzar
        </h1>

        <p className="mt-2 text-gray-500">
          Kaam mile, kaam mile.
        </p>

      </div>


      {/* Question */}
      <div className="mb-6 text-center">

        <h2 className="text-2xl font-bold text-gray-800">
          Aap kya karna chahte hain?
        </h2>

        <p className="mt-2 text-sm text-gray-500">
          Ek option choose karein
        </p>

      </div>


      {/* Options */}
      <div className="space-y-4">

        {/* Job Giver */}
        <button
          onClick={() => setRole("giver")}
          className="group w-full rounded-3xl border border-indigo-100 bg-white p-5 text-left shadow-sm transition duration-200 hover:-translate-y-1 hover:border-indigo-300 hover:shadow-lg active:scale-[0.98]"
        >

          <div className="flex items-center gap-4">

            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-indigo-100 text-3xl">
              🏠
            </div>

            <div>
              <h3 className="text-lg font-bold text-gray-800">
                Kaam Dena Hai
              </h3>

              <p className="mt-1 text-sm text-gray-500">
                Mujhe worker chahiye
              </p>
            </div>

            <span className="ml-auto text-xl text-gray-400 transition group-hover:translate-x-1">
              →
            </span>

          </div>

        </button>


        {/* Job Taker */}
        <button
          onClick={() => setRole("taker")}
          className="group w-full rounded-3xl border border-green-100 bg-white p-5 text-left shadow-sm transition duration-200 hover:-translate-y-1 hover:border-green-300 hover:shadow-lg active:scale-[0.98]"
        >

          <div className="flex items-center gap-4">

            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-green-100 text-3xl">
              👷
            </div>

            <div>
              <h3 className="text-lg font-bold text-gray-800">
                Kaam Chahiye
              </h3>

              <p className="mt-1 text-sm text-gray-500">
                Mujhe kaam chahiye
              </p>
            </div>

            <span className="ml-auto text-xl text-gray-400 transition group-hover:translate-x-1">
              →
            </span>

          </div>

        </button>

      </div>


      {/* Bottom text */}
      <p className="mt-8 text-center text-xs text-gray-400">
        📍 Apne aas-paas ka kaam aur workers dhundhein
      </p>

    </div>

  </div>
);
}

export default RoleSelection;