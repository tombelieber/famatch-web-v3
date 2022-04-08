import type { NextPage } from "next";
import { useRouter } from "next/router";
import QueueCard from "../components/Rooms/QueueCard";

const Queues: NextPage = () => {
  const { query } = useRouter();
  return (
    <div>
      Hello World Queues Page {JSON.stringify(query)}
      <QueueCard />
    </div>
  );
};

export default Queues;
