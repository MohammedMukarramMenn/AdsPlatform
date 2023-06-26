import heroStyles from "@/app/styles/herosection.module.css";
import styles from "@/app/styles/common.module.css";
import PostDetail from "./PostDetail";
import Banner from "./Banner";
import Post from "./Post";

const HeroSection = ({ posts, details }) => {
  return (
    <main>
      <div className={`row`}>
        <div className={`col-md-2 ${heroStyles.banner_col}`}>
          <div className={heroStyles.left_banner}>
            <Banner imageUrl={"/adv1.gif"} width={500} height={500} />
          </div>
        </div>
        <div className={`col-md-8 col-sm-12 ${styles.scrollable_content}`}>
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
          <div className={heroStyles.right_banner}>
            <Banner imageUrl={"/adv2.gif"} width={500} height={500} />
          </div>
        </div>
      </div>
    </main>
  );
};

export default HeroSection;
