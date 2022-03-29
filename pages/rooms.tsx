import type { NextPage } from "next";
import { useRouter } from "next/router";

const Rooms: NextPage = () => {
  const { query } = useRouter();
  return <div>Hello World Rooms Page {JSON.stringify(query)} </div>;
};

export default Rooms;
