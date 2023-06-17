import Head from "next/head";
import styles from "../styles/Home.module.css";
import HelloWorld from "../components/Hello";
import { NoSsr } from "@mui/base";
export default function Home() {
  return (
    <NoSsr>
      <div className={styles.container}>
        <Head>
          <title>Next App</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <HelloWorld />
      </div>
    </NoSsr>
  );
}
