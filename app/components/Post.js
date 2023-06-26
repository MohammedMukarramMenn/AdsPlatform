"use client";
import { useState } from "react";
import Image from "next/image";
import styles from "@/app/styles/common.module.css";
import Link from "next/link";
import { getImage } from "../helper/ApiUrlHelper";
import Banner from "./Banner";

const Post = ({ posts }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const postsPerPage = 2; // Number of posts to display per page

  // Calculate the index of the last post on the current page
  const indexOfLastPost = currentPage * postsPerPage;
  // Calculate the index of the first post on the current page
  const indexOfFirstPost = indexOfLastPost - postsPerPage;

  // Filter posts based on search query
  const filteredPosts = searchQuery
    ? posts.filter((post) =>
        post.title.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : posts;

  // Get the current posts to display on the page
  const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);

  const formatTitleForURL = (title) => {
    return title.replaceAll(" ", "-");
  };

  // Function to handle page number changes
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <>
      <div className={`${styles.hero_header}`}>
        <div className={`row ${styles.middle_banner}`}>
          <div className={`col-12`}>
          <Image src={'/adv3.gif'} width={1000} height={400} alt="Something"></Image>
          </div>
        </div>
        <div className={`row mt-3`}>
          <div className={`input-group mb-3`}>
            <span className={`input-group-text`} id="basic-addon1">
              Search
            </span>
            <input
              type="text"
              className={`form-control`}
              aria-label="search"
              aria-describedby="basic-addon1"
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                setCurrentPage(1); // Reset current page when the search query changes
              }}
            />
          </div>
        </div>
      </div>
      <div className={styles.posts}>
        {currentPosts &&
          currentPosts.map((post, index) => (
            <div
              className={`${styles.cardContainer}`}
              key={index} 
            >
              <div className={`row ${styles.card}`}>
                <div className={`col-md-3 col-sm-12 ${styles.cardImage}`}>
                  <Link href={`/ad/${formatTitleForURL(post.title)}`} passHref>
                    <div className={styles.imageContainer}>
                      {post.image_url ? (
                        <Image
                          src={getImage(post.image_url)}
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
                <div className={`col-md-9 col-sm-12 ${styles.cardContent}`}>
                  <Link href={`/ad/${formatTitleForURL(post.title)}`} passHref>
                    <h3 className={`title ${styles.title}`}>{post.title}</h3>
                  </Link>
                  <h6 className={styles.type}>{post.type}</h6>
                  <p className={styles.cardText}>{post.description}</p>
                </div>
              </div>

              <hr />
            </div>
          ))}

        {/* Pagination */}
        {filteredPosts.length > postsPerPage && (
          <div className={`${styles.pagination}`}>
            <ul className={`${styles.paginationList}`}>
              {Array.from({
                length: Math.ceil(filteredPosts.length / postsPerPage),
              }).map((item, index) => (
                <li
                  key={index}
                  className={`${styles.paginationItem} ${
                    index + 1 === currentPage ? "active" : ""
                  }`}
                  onClick={() => {
                    handlePageChange(index + 1);
                  }}
                >
                  {index + 1}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
      {/* Search Input */}
    </>
  );
};

export default Post;
