import React from "react";

export default function PostsList() {
  return (
    <>
      <div className="">
        {/* explore page content */}
        <div className="p-1">
          {/* search input section */}
          <div>
            <div class="w-full">
              <div class="relative px-1">
                <input
                  class="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm  border-1 border-zinc-900 rounded-md pl-3 pr-28 py-2 my-3 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
                  placeholder="Search.."
                />
                <button
                  class="absolute top-5 right-1 flex items-center justify-center rounded  border border-transparent text-center text-sm text-white transition-all  active:bg-zinc-900  disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                  type="button"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    class="w-4 h-4 mr-2"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10.5 3.75a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5ZM2.25 10.5a8.25 8.25 0 1 1 14.59 5.28l4.69 4.69a.75.75 0 1 1-1.06 1.06l-4.69-4.69A8.25 8.25 0 0 1 2.25 10.5Z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-1 ">
            <div className="bg-zinc-800 p-2">1</div>
            <div className="bg-zinc-800 p-2">1</div>
            <div className="bg-zinc-800 p-2">1</div>
            <div className="bg-zinc-800 p-2">1</div>
            <div className="bg-zinc-800 p-2">1</div>
            <div className="bg-zinc-800 p-2">1</div>
            <div className="bg-zinc-800 p-2">1</div>
            <div className="bg-zinc-800 p-2">1</div>
            <div className="bg-zinc-800 p-2">1</div>
            <div className="bg-zinc-800 p-2">1</div>
            <div className="bg-zinc-800 p-2">1</div>
            <div className="bg-zinc-800 p-2">1</div>
            <div className="bg-zinc-800 p-2">1</div>
            <div className="bg-zinc-800 p-2">1</div>
            <div className="bg-zinc-800 p-2">1</div>
            <div className="bg-zinc-800 p-2">1</div>
            <div className="bg-zinc-800 p-2">1</div>
            <div className="bg-zinc-800 p-2">1</div>
            <div className="bg-zinc-800 p-2">1</div>
            <div className="bg-zinc-800 p-2">1</div>
            <div className="bg-zinc-800 p-2">1</div>
            <div className="bg-zinc-800 p-2">1</div>
            <div className="bg-zinc-800 p-2">1</div>
            <div className="bg-zinc-800 p-2">1</div>
            <div className="bg-zinc-800 p-2">1</div>
            <div className="bg-zinc-800 p-2">1</div>
            <div className="bg-zinc-800 p-2">1</div>
            <div className="bg-zinc-800 p-2">1</div>
            <div className="bg-zinc-800 p-2">1</div>
            <div className="bg-zinc-800 p-2">1</div>
            <div className="bg-zinc-800 p-2">1</div>
            <div className="bg-zinc-800 p-2">1</div>
            <div className="bg-zinc-800 p-2">1</div>
            <div className="bg-zinc-800 p-2">1</div>
            <div className="bg-zinc-800 p-2">1</div>
            <div className="bg-zinc-800 p-2">1</div>
            <div className="bg-zinc-800 p-2">1</div>
            <div className="bg-zinc-800 p-2">1</div>
            <div className="bg-zinc-800 p-2">1</div>
            <div className="bg-zinc-800 p-2">1</div>
            <div className="bg-zinc-800 p-2">1</div>
            <div className="bg-zinc-800 p-2">1</div>
            <div className="bg-zinc-800 p-2">1</div>
          </div>
        </div>
      </div>
    </>
  );
}
