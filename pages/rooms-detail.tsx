import type { NextPage } from "next";
import { useRouter } from "next/router";
import RoomDetailContainer from "../components/Rooms/RoomDetailContainer";

const RoomsDetail: NextPage = () => {
  const { query } = useRouter();
  return (
    <div>
      Hello World RoomsDetail Page {JSON.stringify(query)}
      <RoomDetailContainer />
    </div>
  );
};

export default RoomsDetail;
