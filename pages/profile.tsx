import { Container } from "@mantine/core";
import type { NextPage } from "next";
import { UserCardImage } from "../components/UserCard";

export type UserProfile = {
  image: string;
  avatar: string;
  name: string;
  intro: string;
  stats: { label: string; value: string }[];
};

// feature
// view user join rooms, open rooms history, current rooms / queuing rooms

// * Social
// comment from other users -> comments sort by date
// rating stars from other users -> rating score
// contacts, add to contact / remove in contact (similar to friends)
// comment state have public, private, hidden
//

const userData: UserProfile = {
  image:
    "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80",
  avatar:
    "https://images.unsplash.com/photo-1623582854588-d60de57fa33f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=250&q=80",
  name: "Bill Headbanger",
  intro:
    "Fullstack engineerFullstack engineerFullstack engineerFullstack engineerFullstack engineerFullstack engineerFullstack engineerFullstack engineerFullstack engineer",
  stats: [
    {
      value: "34K",
      label: "Followers",
    },
    {
      value: "187",
      label: "Follows",
    },
    {
      value: "1.6K",
      label: "Posts",
    },
  ],
};

const Profile: NextPage = () => {
  return (
    <>
      <Container size="xs">
        <UserCardImage {...userData} />

        <div>房間 0</div>
        <div>等候中 0</div>
      </Container>
    </>
  );
};

export default Profile;
