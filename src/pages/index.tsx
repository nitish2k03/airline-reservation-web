import router from "next/router";
import { useEffect, useState } from "react";
export type IFlightData = {
  fCode: string;
  Airlines: string;
  Src: string;
  Dest: string;
  Duration: string;
  EconomyPrice: number;
  PremEcoPrice: number;
  BusinessPrice: number;
};
export default function Home() {
  const url = "//localhost:8080/flights";
  const [data, setData] = useState<IFlightData[]>([]);
  const getFlight = (id: string) => {
    router.push(`/bookticket/${id}`);
  };
  const fetchInfo = async () => {
    const response = await fetch(url);
    const data = await response.json();
    setData(data);
  };
  useEffect(() => {
    fetchInfo();
  }, []);
  return (
    <div className="bg-white">
      <div className="bg-slate-300 flex justify-center">
        <div className=" w-4/5 flex justify-evenly">
          <div className="bg-white border-black rounded-2xl mt-4 w-[25%] h-[41rem] min-w-[100px] mr-2">
            <div className="text-black flex flex-wrap">
              <div className="p-2">
                <input
                  type="checkbox"
                  onChange={() => console.log("Vistara")}
                />
                Vistara
              </div>
              <div className="p-2">
                <input type="checkbox" />
                Indigo
              </div>
              <div className="p-2">
                <input type="checkbox" />
                Air India
              </div>
              <div className="p-2">
                <input type="checkbox" />
                Akasa Air
              </div>
              <div className="p-2">
                <input type="checkbox" />
                Spicejet
              </div>
              <div className="p-2">
                <input type="checkbox" />
                Air Aisa
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-start items-start w-[60%]">
            {data.map((dataObj) => {
              return (
                <div
                  className="bg-white  mt-4 rounded-2xl border-gray-400 flex flex-col p-2 w-full shadow-md"
                  key={dataObj.fCode}
                  onClick={() => getFlight(dataObj.fCode)}
                >
                  <div className="text-black font-bold">
                    Airlines : {dataObj.Airlines}
                  </div>
                  <div className="text-black">Flight No : {dataObj.fCode}</div>
                  <div>
                    <div className="text-black">
                      Economy : {dataObj.EconomyPrice}
                    </div>
                    <div className="text-black">
                      <div>Premium Economy : {dataObj.PremEcoPrice}</div>
                      <div></div>
                    </div>
                    <div className="text-black">
                      Business : {dataObj.BusinessPrice}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
