import heroStyles from "@/app/styles/herosection.module.css";
import styles from "@/app/styles/common.module.css";
import PostDetail from "./PostDetail";
import Banner from "./Banner";
import Post from "./Post";

const HeroSection = ({ posts, details }) => {
  return (
    <main className={`container-fluid`}>
      <div className={`row`}>
        <div className={`col-md-2 ${heroStyles.banner_col}`}>
          <Banner imageUrl={"/adv1.gif"} width={500} height={500} />
        </div>
        <div className={`col-md-8 col-sm-12 ${styles.scrollable_content}`}>
          <div className={`row ${styles.scrollable_row}`}>
            <div className={`col-12`}>
              <Banner imageUrl={"/adv3.gif"} width={900} height={100} />
            </div>
          </div>
          <br />
          <div className={`row`}>
            <div className={`input-group mb-3`}>
              <span className={`input-group-text`} id="basic-addon1">
                Search
              </span>
              <input
                type="text"
                className={`form-control`}
                aria-label="search"
                aria-describedby="basic-addon1"
              />
            </div>
          </div>

          {posts ? (
            <div className={`row ${styles.scrollable_row}`}>
              <Post posts={posts} />
            </div>
          ) : (
            <div className={`row ${styles.scrollable_row}`}>
              <PostDetail details={details} />
            </div>
          )}
        </div>
        <div className={`col-md-2 ${heroStyles.banner_col}`}>
          <Banner imageUrl={"/adv2.gif"} width={500} height={500} />
        </div>
      </div>
    </main>
  );
};

export default HeroSection;
