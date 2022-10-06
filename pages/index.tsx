import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import ContentComponent from "../Components/ContentComponent";
import FirstContentComponent from "../Components/FirstContentComponent";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className={styles.maincontainer}>
      <Head>
        <title>Static Website</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className={styles.header}>
        The source code for this blog is&ensp;
        <a href=" https://github.com/vercel/next.js/tree/canary/examples/cms-wordpress">
          available on GitHub
        </a>
      </header>
      <div className={styles.subcontainer}>
        <div className={styles.headingcontainer}>
          <h1 className={styles.blogtitle}>Blog.</h1>
          <p className={styles.paragraph}>
            A statically generated blog example using&ensp;
            <a href="https://nextjs.org/">Next.js</a>
          </p>
        </div>
        <div className={styles.imagecontainer}>
          <Image
            src="/image.jfif"
            layout="intrinsic"
            width={1200}
            height={600}
            // objectFit="contain"
          ></Image>
        </div>
        <div className={styles.contentcontainer}>
          <FirstContentComponent links=" From Server-side Rendering to Static Generation" />
        </div>{" "}
        <h1 className={styles.morestoriestitle}>More Stories</h1>
        <div className={styles.mainsubcontainer}>
          <div className={styles.leftcontainer}>
            <ContentComponent link="Learn How to Pre-render Pages Using Static Generation with Next.js" />
          </div>
          <div className={styles.rightcontainer}>
            <ContentComponent link2="Deploying Next.js Apps" />
          </div>
        </div>
      </div>

      <footer className={styles.footer}>
        <h1 className={styles.footertitle}>
          Statically Generated with Next.js.
        </h1>
        <div className={styles.buttoncontainer}>
          <a href="https://nextjs.org/docs/basic-features/pages" target="_self">
            <button className={styles.buttons}>Read Documentation</button>
          </a>
          <a href="https://github.com/vercel/next.js/tree/canary/examples/cms-wordpress">
            View on GitHub
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Home;
