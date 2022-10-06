import React from "react";
import styles from "../styles/Home.module.css";
import Image, { StaticImageData } from "next/image";
interface Props {
  links?: string;
}

const FirstContentComponent = ({ links }: Props) => {
  return (
    <div>
      <div className={styles.firstcontent}>
        <div className={styles.firstlinkanddate}>
          <a
            href="https://next-blog-wordpress.vercel.app/posts/second-entry"
            className={styles.firstlink}
          >
            {links}
          </a>

          <p>June 2, 2022</p>
        </div>
        <div className={styles.firstparagraphandavatar}>
          <p className={styles.para}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit hoc
            ultimum bonorum, quod nunc a me defenditur; Vitae autem degendae
            ratio maxime quidem illis placuit quieta. Duo Reges: constructio
            interrete. Nam quid possumus facere melius?
          </p>
          <div className={styles.firstprofilecontainer}>
            <div className={styles.imagecontainer}>
              <Image
                src="/avataricon.webp"
                width={30}
                height={30}
                objectFit="cover"
                className={styles.imageProfile}
              ></Image>
            </div>

            <h3>UserName LastName</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FirstContentComponent;
