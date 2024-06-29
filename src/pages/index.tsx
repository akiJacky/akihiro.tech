import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import React from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Akihiro Nakano</title>
        <meta name="description" content="Contact form: 仲野彰紘" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <main className={`${styles.main} ${inter.className}`}>
        <section className={styles.banner}>
          <div className={styles.information}>Hi, This is Akihiro.</div>
        </section>
        <div className={styles.grid}>
          <a
            href="/sample"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2>
              Works <span>-&gt;</span>
            </h2>
            <p>My Job details and technology stack I can provide.</p>
          </a>

          <a
            href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2>
              Contact <span>-&gt;</span>
            </h2>
            <p>Let's work together. Please feel free to contact me!</p>
          </a>

          <a
            href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2>
              Articles <span>-&gt;</span>
            </h2>
            <p>Mainly my blog, other than that, articles about my past work.</p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2>
              Space <span>-&gt;</span>
            </h2>
            <p>This is free Space.</p>
          </a>
        </div>
      </main>
    </>
  );
}
