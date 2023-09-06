import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "./page.module.css";

import { Button } from "ui";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return <main className={styles.main}><Button label="test"/></main>;
}
