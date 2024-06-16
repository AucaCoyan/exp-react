import Head from "next/head";
import Tipeo from "./tipeo";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";


export default function Home() {
  return (
    <>
      <Tipeo />
      <p>
        Get started by editing&nbsp;
        <code className={styles.code}>src/pages/index.tsx</code>
      </p>
    </>
  );
}
