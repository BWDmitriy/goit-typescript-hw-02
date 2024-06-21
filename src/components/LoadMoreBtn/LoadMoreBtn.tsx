import styles from "./LoadMoreBtn.module.css";

interface LoadMoreBtnProps {
  loadMore: () => void;
}

const LoadMoreBtn: React.FC<LoadMoreBtnProps> = ({ loadMore }) => {
  return (
    <button className={styles.loadMoreBtn} onClick={loadMore}>
    Load More
</button>
  );
}

export default LoadMoreBtn;