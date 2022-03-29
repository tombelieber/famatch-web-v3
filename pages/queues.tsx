import type { NextPage } from "next";
import { useRouter } from "next/router";

const Queues: NextPage = () => {
  const { query } = useRouter();
  return <div>Hello World Queues Page {JSON.stringify(query)}</div>;
};

export default Queues;
