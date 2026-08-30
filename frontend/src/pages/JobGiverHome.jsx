function JobGiverHome() {
  return (
    <div className="min-h-screen bg-gray-50">

      {/* Header */}
      <header className="flex items-center justify-between px-5 py-5">
        <div>
          <p className="text-sm text-gray-500">Welcome 👋</p>
          <h1 className="text-2xl font-bold text-gray-900">
            Job Giver
          </h1>
        </div>

        <button className="h-11 w-11 rounded-full bg-white shadow-sm">
          🔔
        </button>
      </header>


      {/* Location */}
      <div className="mx-5 mb-5 rounded-2xl bg-white p-4 shadow-sm">
        <p className="text-xs text-gray-400">
          Your location
        </p>

        <p className="mt-1 font-semibold text-gray-800">
          📍 Your nearby area
        </p>
      </div>


      {/* Post Job */}
      <div className="mx-5 mb-7 rounded-3xl bg-indigo-600 p-6 text-white shadow-lg shadow-indigo-200">

        <p className="text-sm text-indigo-100">
          Need someone for a job?
        </p>

        <h2 className="mt-1 text-2xl font-bold">
          Post your work
        </h2>

        <button className="mt-5 rounded-2xl bg-white px-5 py-3 font-bold text-indigo-600">
          + Post a Job
        </button>

      </div>


      {/* Nearby Workers */}
      <section className="px-5">

        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-xl font-bold text-gray-900">
            Nearby Workers
          </h2>

          <button className="text-sm font-semibold text-indigo-600">
            See all
          </button>
        </div>


        {/* Worker */}
        <div className="mb-3 rounded-2xl bg-white p-4 shadow-sm">

          <div className="flex items-center gap-4">

            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-indigo-100 text-2xl">
              👷
            </div>

            <div className="flex-1">
              <h3 className="font-bold text-gray-800">
                Rahul
              </h3>

              <p className="text-sm text-gray-500">
                Electrician
              </p>

              <p className="mt-1 text-xs text-gray-400">
                ⭐ 4.8 &nbsp; • &nbsp; 📍 1.2 km
              </p>
            </div>

            <button className="rounded-xl bg-indigo-50 px-3 py-2 text-sm font-semibold text-indigo-600">
              View
            </button>

          </div>

        </div>


        {/* Worker */}
        <div className="rounded-2xl bg-white p-4 shadow-sm">

          <div className="flex items-center gap-4">

            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-green-100 text-2xl">
              🔧
            </div>

            <div className="flex-1">
              <h3 className="font-bold text-gray-800">
                Amit
              </h3>

              <p className="text-sm text-gray-500">
                Plumber
              </p>

              <p className="mt-1 text-xs text-gray-400">
                ⭐ 4.6 &nbsp; • &nbsp; 📍 2 km
              </p>
            </div>

            <button className="rounded-xl bg-indigo-50 px-3 py-2 text-sm font-semibold text-indigo-600">
              View
            </button>

          </div>

        </div>

      </section>


      {/* Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 border-t bg-white px-6 py-3">

        <div className="mx-auto flex max-w-md items-center justify-between">

          <button className="flex flex-col items-center text-indigo-600">
            <span className="text-xl">🏠</span>
            <span className="text-xs font-semibold">Home</span>
          </button>

          <button className="flex flex-col items-center text-gray-400">
            <span className="text-xl">📋</span>
            <span className="text-xs">Jobs</span>
          </button>

          <button className="flex flex-col items-center text-gray-400">
            <span className="text-xl">💬</span>
            <span className="text-xs">Chat</span>
          </button>

          <button className="flex flex-col items-center text-gray-400">
            <span className="text-xl">👤</span>
            <span className="text-xs">Profile</span>
          </button>

        </div>

      </nav>

    </div>
  );
}

export default JobGiverHome;