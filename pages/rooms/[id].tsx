import type { NextPage } from "next";
import { useRouter } from "next/router";

const ServiceRooms: NextPage = () => {
  const { query } = useRouter();
  const { id } = query;

  return <div>Hello World Rooms {id} Page</div>;
};

export default ServiceRooms;
