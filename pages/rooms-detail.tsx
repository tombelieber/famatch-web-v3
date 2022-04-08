import type { NextPage } from "next";
import { useRouter } from "next/router";

const RoomsDetail: NextPage = () => {
  const { query } = useRouter();
  return <div>Hello World RoomsDetail Page {JSON.stringify(query)}</div>;
};

export default RoomsDetail;
