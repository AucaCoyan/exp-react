import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Home.module.css";

import Loader from '../components/Loader'

export default function Home() {
  return <div>
  <Loader show />
  </div>;
}
