import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { IFlightData } from "./../index";
export default function View() {
  const router = useRouter();
  const id = router.query.id as string;

  const [data, setData] = useState<IFlightData | null>();

  const fetchInfo = async () => {
    try {
      const response = await fetch(`//localhost:8080/flights/${id}`);
      const dataRecd = await response.json();
      setData(dataRecd);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    fetchInfo();
  }, [router.query.id]);
  if (!(data && data.fCode)) return <div>Loading</div>;
  return (
    <div className="text-black bg-white">
      <div
        className="bg-green-400 ml-2 mt-3 rounded border-gray-400 flex flex-col p-2 w-auto shadow-md"
        key={data.fCode}
      >
        <div className="text-black font-bold">Airlines : {data.Airlines}</div>
        <div className="text-black">Flight No : {data.fCode}</div>
        <div>
          <div className="text-black">Economy : {data.EconomyPrice}</div>
          <div className="text-black">
            Premium Economy : {data.PremEcoPrice}
          </div>
          <div className="text-black">Business : {data.BusinessPrice}</div>
        </div>
      </div>
    </div>
  );
}
