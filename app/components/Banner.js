import Link from "next/link";
import Image from "next/image";
import styles from "@/app/styles/herosection.module.css";
const Banner = ({imageUrl, width, height}) => {
  return (
    <>
      <div className={styles.hero_image}>
        <Image src={imageUrl} width={width} height={height} alt="Something"></Image>
      </div>
    </>
  );
};

export default Banner;
