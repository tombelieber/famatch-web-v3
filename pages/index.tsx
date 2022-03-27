import { AppShell, Center, Header } from "@mantine/core";
import type { NextPage } from "next";
import Head from "next/head";
import { AuthenticationForm } from "../components/Auth/AuthenticationForm";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Home | Famatch.io</title>
        <meta name="description" content="PAY LESS PLAY MORE" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <AppShell
          // navbar={
          //   <Navbar width={{ base: 300 }} height={500} p="xs">
          //     {/* Navbar content */}
          //   </Navbar>
          // }
          header={
            <Header height={60} p="xs">
              {/* Header content */}
            </Header>
          }
          styles={(theme) => ({
            main: {
              backgroundColor:
                theme.colorScheme === "dark"
                  ? theme.colors.dark[8]
                  : theme.colors.gray[0],
            },
          })}
        >
          {/* Your application here */}
          <Center>
            <AuthenticationForm />
          </Center>
        </AppShell>
      </main>
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
    </div>
  );
};

export default Home;
