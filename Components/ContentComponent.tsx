import React from "react";
import Image, { StaticImageData } from "next/image";
import styles from "../styles/Home.module.css";
interface Props {
  link?: string;
  link2?: string;
  link3?: string;
  // image?: StaticImageData;
}
const ContentComponent = ({ link, link2 }: Props) => {
  return (
    <div className={styles.bodycontainer}>
      <Image src="/islandimage.jfif" width="550px" height="280px"></Image>{" "}
      <br />
      <div className={styles.content}>
        <div className={styles.linkanddate}>
          <a href="" className={styles.secondlink}>
            {link}
          </a>
          <a href="" className={styles.secondlink}>
            {link2}
          </a>

          <p>June 2, 2022</p>
        </div>
        <div className={styles.paragraphandavatar}>
          <p className={styles.para}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit hoc
            ultimum bonorum, quod nunc a me defenditur; Vitae autem degendae
            ratio maxime quidem illis placuit quieta. Duo Reges: constructio
            interrete. Nam quid possumus facere melius?
          </p>
          <div className={styles.profilecontainer}>
            <Image
              src="/avataricon.webp"
              width="30px"
              height="30px"
              objectFit="cover"
              className={styles.imageProfile}
            ></Image>
            <h3>UserName LastName</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentComponent;
