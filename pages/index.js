import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "../styles/Home.module.css";
import { useState } from "react";
import Navbar from "../components/Navbar";
import Main from "../components/Main";
import Soap from "../components/Soap";
import Quotes from "../components/Quotes";
import Me from "../components/Me";
import YouOkay from "../components/YouOkay";
const inter = Inter({ subsets: ["latin"] });

const myLoader = ({ src, width, quality }) => {
  return `${src}?w=${width}&q=${quality || 75}`;
};

export default function Home() {
  const [navbarOpen, setNavbarOpen] = useState(false);
  return (
    <>
      <Head>
        <title>Tyler Durden</title>
      </Head>
      <Navbar />
      <Main />
      <Soap id={"soap"} />
      <Quotes />
      <Me />
      <YouOkay />
    </>
  );
}
