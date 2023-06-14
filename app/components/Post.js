import Image from "next/image";
import styles from "@/app/styles/common.module.css";
import Link from "next/link";

const Post = ({ posts }) => {
  const formatTitleForURL = (title) => {
    return title.replaceAll(" ", "-");
  };

  return (
    <>
      {posts &&
        posts.map((post, index) => (
          <div
            className={`container-fluid ${styles.cardContainer}`}
            key={index}
          >
            <div className={`row ${styles.card}`}>
              <div className={`col-md-3 ${styles.cardImage}`}>
                <Link href={`/${formatTitleForURL(post.title)}`} passHref>
                  <div className={styles.imageContainer}>
                    {post.image_url ? (
                      <Image
                        src={post.image_url}
                        layout="fill"
                        objectFit="cover"
                        alt="Something"
                      />
                    ) : (
                      <Image
                        src="/listing-img.jpg" // Replace with the path to your default image
                        layout="fill" 
                        objectFit="cover"
                        alt="Default Image"
                      />
                    )}
                  </div>
                </Link>
              </div>
              <div className={`col-md-9 ${styles.cardContent}`}>
                <Link href={`/ad/${formatTitleForURL(post.title)}`} passHref>
                  <h1 className="title">{post.title}</h1>
                </Link>
                <h4>{post.type}</h4>
                <p className={styles.cardText}>{post.description}</p>
              </div>
            </div>

            <hr />
          </div>
        ))}
    </>
  );
};

export default Post;
