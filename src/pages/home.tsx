import React from "react";
import router from "next/router";
const home = () => {
  const search = (src: string, dest: string) => {
    router.push(`showFlights/${src}/${dest}`);
  };
  return (
    <div className="flex gap-2 bg-black h-screen">
      <div>
        <input
          type="text"
          placeholder="Source"
          id="srcField"
          className="rounded"
        ></input>
      </div>
      <div>
        <input
          type="text"
          placeholder="Destination"
          id="destField"
          className="rounded"
        ></input>
      </div>
      <div>
        <button
          className="bg-white"
          onClick={() =>
            search(
              (document.getElementById("srcField") as HTMLInputElement).value,
              (document.getElementById("destField") as HTMLInputElement).value
            )
          }
        >
          Show
        </button>
      </div>
    </div>
  );
};

export default home;
