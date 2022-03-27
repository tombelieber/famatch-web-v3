import { Center } from "@mantine/core";
import type { NextPage } from "next";
import { AuthenticationForm } from "../components/Auth/AuthenticationForm";

const Home: NextPage = () => {
  return (
    <>
      <Center>
        <AuthenticationForm />
      </Center>
      {/* <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer> */}
    </>
  );
};

export default Home;
