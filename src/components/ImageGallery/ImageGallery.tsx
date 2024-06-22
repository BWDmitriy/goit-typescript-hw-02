import ImageCard from "../ImageCard/ImageCard";
import styles from "./ImageGallery.module.css";
import { Image } from "../App/App";

interface ImageGalleryProps {
  images: Image[];
  onImageClick: (image: Image) => void
}
const ImageGallery: React.FC<ImageGalleryProps> = ({ images, onImageClick }) => {
  return (
    <ul className={styles.imageGallery}>
      {images.map((image, index) => (
        <ImageCard
          key={index}
          imageUrl={image.urls.small}
          altText={image.alt_description}
          onClick={() => onImageClick(image)}
        />
      ))}
    </ul>
  );
}

export default ImageGallery