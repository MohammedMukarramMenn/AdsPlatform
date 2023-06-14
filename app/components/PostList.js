import Image from "next/image";
import styles from "@/app/styles/common.module.css";
import Link from "next/link";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { getUserPost } from "../helper/ApiUrlHelper";
const PostList = () => {
  const router = useRouter();
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const token = Cookies.get("token");
    if (!token) {
      alert("Session Expired, please login again");
      router.push("/session/login");
      return () => false;
    }
    getCall(token);
  }, []);

  async function getCall(token) {
    const url = getUserPost();

    try {
      const response = await fetch(url, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          token: token,
        },
      });

      const data = await response.json();
      setPosts(data.data);
    } catch (error) {
      alert(error);
    }
  }

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
                {/* <Link href={`/${post.title}`} passHref> */}
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
                {/* </Link> */}
              </div>
              <div className={`col-md-9 ${styles.cardContent}`}>
                {/* <Link href={`/ad/${post.title}`} passHref> */}
                <h1 className="title">{post.title}</h1>
                {/* </Link> */}
                <h4>{post.type}</h4>
                <p className={styles.cardText}>{post.description}</p>
                <Link href={`/posts/${formatTitleForURL(post.title)}`}>
                  <button className="btn btn-outline-success">Edit</button>
                </Link>
              </div>
            </div>

            <hr />
          </div>
        ))}
    </>
  );
};

export default PostList;
